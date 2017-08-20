import { Template } from 'meteor/templating';
import './allTasks.html';
import './singleTask.js';
import { tasks } from '../api/collections.js';
import { USER_ROLE } from '../api/constants.js'

Template.allTasks.helpers({
    AllTasks: function(role){
        if(role === USER_ROLE["RECIEVER"])
            return tasks.find({"assignedTo":Meteor.user().username}, { "sort": { "dateOfAssignment" :-1 }});
        else
            return tasks.find({"assignedBy":Meteor.user().username}, { "sort": { "dateOfAssignment" :-1 }});
    }
})