import { Template } from 'meteor/templating';
import { tasks } from '../api/collections.js';
import { TASK_STATUS } from '../api/constants.js';
import './addATask.html';

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
                return false;
            }else{
                $('#formSubmitSuccess').css('display','block');
                document.getElementById("addATaskForm").reset(); //Resetting form to initial values
                return false;
            }
        });
    },
});