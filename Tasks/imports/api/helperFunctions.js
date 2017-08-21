import { TASK_STATUS } from './constants.js'

export const MapStatus = function(status, TASK_STATUS){
    switch(status){
        case TASK_STATUS["REASSIGNED"]:
        case TASK_STATUS["PENDING"]: return "warning";
        case TASK_STATUS["SUBMITTED"]: return "info";
        case TASK_STATUS["APPROVED"]: return "success";
    }
}

export const ConstructDate = function(date){
    var fullDate = "";
    
    var temp = date.getDate();
    if(temp<10)
        fullDate+="0";
    fullDate+=temp;
    fullDate+="-";

    temp = date.getMonth();
    if(temp<10)
        fullDate+="0";
    fullDate+=temp;
    fullDate+="-";

    return (fullDate+date.getFullYear());
}


// This function is sorting tasks according to the status first and then time of assignment
// Status priority is now fixed. Will give soon an option to customize.

// This function has a flaw that it is using 2 times more space.
// Space optimization can be an issue in future when a sinnlge user of thousands of tasks.
export const SortAccordingToStatus = function(tasks, order){
    var pending = [];
    var submitted = [];
    var accepted = [];
    tasks.forEach(function(task){
        if(task.status === TASK_STATUS["PENDING"] || task.status === TASK_STATUS["REASSIGNED"])
            pending.push(task);
        else{
            if(task.status === TASK_STATUS["SUBMITTED"])
                submitted.push(task);
            else
                accepted.push(task);
        }
    });
    // Arraging array of tasks according to custmized order given by user.
    var finalOrder = [];
    order.forEach(function(status){
        if(TASK_STATUS["PENDING"] === status)
            finalOrder = finalOrder.concat(pending);
        else{
            if(TASK_STATUS["SUBMITTED"] === status)
                finalOrder = finalOrder.concat(submitted);
            else
                finalOrder = finalOrder.concat(accepted);
        }
    })
    return finalOrder;
}