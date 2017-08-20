import { Template } from 'meteor/templating';
import { tasks } from '../api/collections.js';
import { TASK_STATUS } from '../api/constants.js';
import './addATask.html';

Template.addATask.helpers({
    //Functions to add people names to the select box
    // Not to add the current user.
    // A person should not assign tasks to themselves.
    AllPeople: function(){
        var allUsers =  Meteor.users.find({}).fetch();
        var allUsersNotCurrent = [];
        allUsers.forEach(function(user){
            if(user.username !== Meteor.user().username)
                allUsersNotCurrent.push(user);
        });

        return allUsersNotCurrent;
    }
})

Template.addATask.events({
    'submit #addATaskForm' : function(event){
        event.preventDefault();
        tasks.insert({
            "task": $("#formTask").val(),
            "assignedBy": Meteor.user().username,
            "assignedTo": $("#formAssignedTo").val(),
            "dateOfAssignment": new Date(),
            "dateOfCompletion": null,
            "status": TASK_STATUS["PENDING"],
        }, function(error){
            if(error){
                $('#formSubmitError').css('display','block');
                return false; //Prevent page from reloading
            }else{
                $('#formSubmitSuccess').css('display','block');
                document.getElementById("addATaskForm").reset(); //Resetting form to initial values
                return false;
            }
        });
    },
});