window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    // timer
    function countTimer(deadline) {

        const timeHours = document.querySelector('#timer-hours'),
            timeMinets = document.querySelector('#timer-minutes'),
            timeSeconds = document.querySelector('#timer-seconds');
        let idInterval;
        function getTimeRemaining() {
            const dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 3600);

            // timeInterval = setInterval(updateClock, 1000);

            return { timeRemaining, hours, minutes, seconds };
        }

        function getZero(num) {
            if (num >= 0 && num < 10) {
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

            if (timer.timeRemaining  <= 0) {
                timeHours.textContent = "0";
                timeMinets.textContent = "0";
                timeSeconds.textContent = "0";
                return false;

            }
        }

        if (updateClock() !== false) {
            idInterval = setInterval(updateClock, 1000);
        } else {
            clearInterval(idInterval);
        }
    }

    countTimer('15 march 2021');

});



