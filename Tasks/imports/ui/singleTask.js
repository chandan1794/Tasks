import { Template } from 'meteor/templating';
import './singleTask.html';
import { TASK_STATUS } from '../api/constants.js';
import { MapStatus, ConstructDate } from '../api/helperFunctions.js';
import { tasks } from '../api/collections.js';
import './taskEditForm.js';
Template.singleTaskTo.helpers({
    GetStatus: function(status){
        return MapStatus(status, TASK_STATUS);
    },

    // function to format date
    ExtractDate: function(date){
        return ConstructDate(date);
    },

    IsTaskPending: function(status){
        return TASK_STATUS["PENDING"] === status || TASK_STATUS["REASSIGNED"] === status;
    },

    IsTaskSubmitted: function(status){
        return TASK_STATUS["SUBMITTED"] === status;
    },

    IsTaskApproved: function(status){
        return TASK_STATUS["APPROVED"] === status;
    },
})

Template.singleTaskTo.events({
    'click #singleTaskToSubmit': function(event){
        var taskId = $("#singleTaskToSubmit").data('id');
        tasks.update({ '_id': taskId },
                    {
                     '$set':{
                         'status':TASK_STATUS["SUBMITTED"]
                            }
                    });
        return false;
    }
})

Template.singleTaskBy.helpers({
    GetStatus: function(status){
        return MapStatus(status, TASK_STATUS);
    },

    // function to format date
    ExtractDate: function(date){
        return ConstructDate(date);
    },

    IsTaskSubmitted: function(status){
        return TASK_STATUS["SUBMITTED"] === status;
    },

    IsTaskApproved: function(status){
        return TASK_STATUS["APPROVED"] === status;
    },

    IsTaskPending: function(status){
        return TASK_STATUS["PENDING"] === status || TASK_STATUS["REASSIGNED"] === status;
    },
})

Template.singleTaskBy.events({
    'click #singleTaskByApprove': function(event){
        var taskId = $("#singleTaskByApprove").data('id');
        tasks.update({ '_id': taskId },
                    {
                     '$set':{
                         'status':TASK_STATUS["APPROVED"],
                         'dateOfCompletion':new Date()
                            }
                    });
        return false;
    },

    'click #singleTaskByReassign': function(event){
        var taskId = $("#singleTaskByReassign").data('id');
        tasks.update({ '_id': taskId },
                    {
                     '$set':{
                         'status':TASK_STATUS["REASSIGNED"]
                            }
                    });
        return false;
    },

    'click #editTask': function(event){
        var taskId = this.Task._id;
        var task = this.Task.task;
        var assignedTo =this.Task.assignedTo;
        $("#formTask").val(task);
        $("#formAssignedTo").val(assignedTo);
        return true;
    }
})