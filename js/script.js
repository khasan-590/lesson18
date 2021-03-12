

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

            return {timeRemaining, hours, minutes, seconds };
        }
        
      function updateClock() {
        const timer = getTimeRemaining();
        
        timeHours.textContent = timer.hours;
        timeMinets.textContent = timer.minutes;
        timeSeconds.textContent = timer.seconds;
        
        if(timer.timeRemaining  <= 0) {
          setTimeout(updateClock, 1000);
        }
        }
        updateClock();
    }


    countTimer('11 february 2021');

});



    // setInterval(countTimer, 1000, '11 february 2021');


    // const deadline = '2021-03-12';

    // function getTimeRemaining(endtime) {

    //   const times = Date.parse(endtime) - Date.parse( new Date()),
    //         // days = Math.floor(t / (1000 * 60 * 60 *24)),
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
    //   // if(num >= 0 && num < 10){
    //   //   return `0${num}`;
    //   // } else {
    //   //   return num;
    //   // }
     
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

    //     if(timer.total <= 0) {
    //             clearInterval(timeInterval);
    //           }
    //     }
    //     upDateclocks();
    // }
    // setClock('.timer', deadline);