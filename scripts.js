let hourHand = document.querySelector('.hour-hand');
let minuteHand = document.querySelector('.minute-hand');
let secondHand = document.querySelector('.second-hand');

setInterval (() => {

let hourDegree = new Date().getHours()*(360/12);
let minuteDegree = new Date().getMinutes()*(360/60);
let secondDegree = new Date().getSeconds()*(360/60);



hourHand.style.transform = `rotate(${hourDegree}deg)`;
minuteHand.style.transform = `rotate(${minuteDegree}deg)`; secondHand.style.transform =`rotate(${secondDegree}deg)`;
}, 500)