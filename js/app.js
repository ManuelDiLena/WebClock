(function updateData() {

    //Get time and date data
    var date = new Date(),
        ampm,
        hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds(),
        dayWeek = date.getDay(),
        days = date.getDate(),
        month = date.getMonth(),
        year = date.getFullYear();

    //We get our HTML elements
    var elementHours = document.getElementById('hours'),
        elementMinutes = document.getElementById('minutes'),
        elementSeconds = document.getElementById('seconds'),
        elementAmpm = document.getElementById('ampm'),
        elementDayWeek = document.getElementById('dayWeek'),
        elementDay = document.getElementById('day'),
        elementMonth = document.getElementById('month'),
        elementYear = document.getElementById('year');
    
    //Declare arrangement of days and months
    var arrayWeek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
        arrayMonth = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    //We assign date date
    elementDayWeek.textContent = arrayWeek[dayWeek];
    elementDay.textContent = days;
    elementMonth.textContent = arrayMonth[month];
    elementYear.textContent = year;

    //Transform the clock from 24 to 12 hours
    if (hours >= 12) {
        hours = hours - 12;
        ampm = 'PM';
    } else {
        ampm = 'AM';
    }

    //We add 0 to the minutes and seconds
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    //Add conditional to avoid hour 00
    if (hours == 0) {
        hours = 12;
    }

    //Assign time elements
    elementHours.textContent = hours;
    elementMinutes.textContent = minutes;
    elementSeconds.textContent = seconds;
    elementAmpm.textContent = ampm;

    setInterval(updateData, 1000);

}())