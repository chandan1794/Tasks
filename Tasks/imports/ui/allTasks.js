import { Template } from 'meteor/templating';
import './allTasks.html';
import './singleTask.js';
import { tasks } from '../api/collections.js';

Template.allTasks.helpers({
    AllTasks: function(){
        return tasks.find({}, { "sort": { "dateOfAssignment" :-1 }});
    }
})