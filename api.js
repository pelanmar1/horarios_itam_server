// Schedule generator client


// Format request.

var formatAvoidHours = function(filters){
    if (filters!=null){
        if (filters.hasOwnProperty('avoidHours') && filters.avoidHours!=null && filters.avoidHours.length>0){
            for (var i =0;i<filters.avoidHours.length;i++){
                var temp = filters.avoidHours[i];
                temp.startTime = dateToInt(new Date(temp.startTime));
                temp.endTime = dateToInt(new Date(temp.endTime));
                filters.avoidHours[i] = temp;
            }
        }
    }
    return filters;
}


var dateToInt = function(dateObject){
    var hour = parseInt(dateObject.getHours());
    var minutes = parseInt(dateObject.getMinutes());
    if (minutes != 0)
        hour+=0.5
    return hour
}


