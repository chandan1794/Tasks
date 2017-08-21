import { Template } from 'meteor/templating';
import './allTasks.html';
import './singleTask.js';
import { tasks } from '../api/collections.js';
import { USER_ROLE, TASK_STATUS } from '../api/constants.js'
import { SortAccordingToStatus } from '../api/helperFunctions.js'

Template.allTasks.helpers({
    AllTasks: function(role){
        if(role === USER_ROLE["RECIEVER"]){
            var tasksArray =  tasks.find({"assignedTo":Meteor.user().username}, { "sort": { "dateOfAssignment" :-1 }});
            return SortAccordingToStatus(tasksArray, [ TASK_STATUS["PENDING"], TASK_STATUS["SUBMITTED"], TASK_STATUS["APPROVED"] ]);
        }
        else{
            var tasksArray =  tasks.find({"assignedBy":Meteor.user().username}, { "sort": { "dateOfAssignment" :-1 }});
            return SortAccordingToStatus(tasksArray, [ TASK_STATUS["SUBMITTED"], TASK_STATUS["PENDING"], TASK_STATUS["APPROVED"] ]);
        }
    }
})