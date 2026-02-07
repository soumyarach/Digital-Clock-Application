function updateClock() {
    const clock = document.getElementById("clock");
    const formatSwitch = document.getElementById("formatSwitch");

    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // 12-hour format
    if (!formatSwitch.checked) {
        let period = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12; 
        clock.innerHTML = `${pad(hours)}:${pad(minutes)}:${pad(seconds)} ${period}`;
    } 
    // 24-hour format
    else {
        clock.innerHTML = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    }
}

function pad(num) {
    return num < 10 ? "0" + num : num;
}

setInterval(updateClock, 1000);
updateClock();

function updateDate() {
    const dateEl = document.getElementById("date-display");
    if (!dateEl) return;

    const now = new Date();
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    const dayName = days[now.getDay()];
    const monthName = months[now.getMonth()];
    const date = now.getDate();
    const year = now.getFullYear();

    dateEl.textContent = `${dayName}, ${monthName} ${date}, ${year}`;
}

setInterval(updateDate, 60000);
updateDate();