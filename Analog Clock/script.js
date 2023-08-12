let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime(){
    let date = new Date();

    let hm = date.getHours();
    let mm = date.getMinutes();
    let sm = date.getSeconds();

    let hRotation = 30*hm + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*sm;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;

}

setInterval(displayTime, 1000);