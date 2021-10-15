var date = new Date();
var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
var target_date = new Date(lastDay); // установить дату обратного отсчета
var days, hours, minutes, seconds; // переменные для единиц времени
    
var rm_days = document.getElementById("rm_days"); // получить элемент тега
var rm_hours = document.getElementById("rm_hours"); // получить элемент тега
var rm_minutes = document.getElementById("rm_minutes"); // получить элемент тега
var rm_seconds = document.getElementById("rm_seconds"); // получить элемент тега
    
getCountdown();
    
setInterval(function () { getCountdown(); }, 1000);
    
function getCountdown(){
    
    var current_date = Date.now();
    var seconds_left = (target_date - current_date) / 1000;
    
    days = pad( parseInt(seconds_left / 86400) );
    seconds_left = seconds_left % 86400;
            
    hours = pad( parseInt(seconds_left / 3600) );
    seconds_left = seconds_left % 3600;
            
    minutes = pad( parseInt(seconds_left / 60) );
    seconds = pad( parseInt( seconds_left % 60 ) );
    
    // строка обратного отсчета  + значение тега
    rm_days.innerHTML = days;
    rm_hours.innerHTML = hours;
    rm_minutes.innerHTML = minutes;
    rm_seconds.innerHTML = seconds;
}
    
function pad(n) {
    return (n < 10 ? '0' : '') + n;
}