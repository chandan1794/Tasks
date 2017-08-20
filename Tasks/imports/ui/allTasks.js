import { Template } from 'meteor/templating';
import './allTasks.html';
import './singleTask.js';
import { tasks } from '../api/collections.js';

Template.allTasks.helpers({
    AllTasks: function(){
        return tasks.find({"assignedTo":Meteor.user().username}, { "sort": { "dateOfAssignment" :-1 }});
    }
})