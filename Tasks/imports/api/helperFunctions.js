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