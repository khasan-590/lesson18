

window.addEventListener('DOMContentLoaded', () => {

  'use strict';

    // timer
    function countTimer(deadline) {
      
      const timeHours = document.querySelector('#timer-hours'),
            timeMinets = document.querySelector('#timer-minutes'),
            timeSeconds = document.querySelector('#timer-seconds');

        function getTimeRemaining() {
          const dateStop = new Date(deadline).getTime(),
          dateNow = new Date().getTime(),
          timeRemaining = (dateStop - dateNow) / 1000,
          seconds = Math.floor(timeRemaining % 60),
          minutes = Math.floor((timeRemaining / 60) % 60),
          hours = Math.floor(timeRemaining / 3600);

          // timeInterval = setInterval(updateClock, 1000);

            return {timeRemaining, hours, minutes, seconds };
        }

        function getZero(num) {
            if(num >= 0 && num < 10){
              return `0${num}`;
            } else {
              return num;
            }
           
          }

      function updateClock() {
        const timer = getTimeRemaining();
        
        timeHours.textContent = getZero(timer.hours);
        timeMinets.textContent = getZero(timer.minutes);
        timeSeconds.textContent = getZero(timer.seconds);
        
        if(timer.timeRemaining  <= 0) {
          // timer = clearInterval(updateClock);
          timeHours.textContent = "0";
          timeMinets.textContent = "0";
          timeSeconds.textContent = "0";
          
         
        }
        }
        updateClock();
    }


    countTimer('11 february 2021');



// setInterval(countTimer, 1000, '11 february 2021');

  
// const deadline = '2021-03-12';

// function getTimeRemaining(endtime) {

//   const times = Date.parse(endtime) - Date.parse( new Date()),

//         hours = Math.floor((times / (1000 * 60 * 60) % 24)),
//         minutes = Math.floor((times / 1000 / 60) % 60),
//         seconds = Math.floor((times / 1000) % 60);

//              return{
//                'total' : times,
//                'hours' : hours,
//                'minutes' : minutes,
//                'seconds' : seconds
//              };
// }

// function getZero(num) {
//   if(num >= 0 && num < 10){
//     return `0${num}`;
//   } else {
//     return num;
//   }
 
// }

// function setClock(selector, endtime) {
//   const timer = document.querySelector(selector),
//         timeHours =  timer.querySelector('#timer-hours'),
//         timeMinets =  timer.querySelector('#timer-minutes'),
//         timeSeconds =  timer.querySelector('#timer-seconds'),

//        timeInterval = setInterval(upDateclocks, 1000);

       

//     function upDateclocks() {
//       const times = getTimeRemaining(endtime);


//     timeHours.textContent = getZero(times.hours);
//     timeMinets.textContent = getZero(times.minutes);
//     timeSeconds.textContent = getZero(times.seconds);

//     if (times.total <= 0) {
//       clearInterval(timeInterval);
//       timeHours.textContent = '00';
//       timeMinets.textContent = '00';
//       timeSeconds.textContent = '00';
//   }
    
//     }
//     upDateclocks();
// }

// setClock('.timer', deadline);

// });



 