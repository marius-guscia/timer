const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const resetButton = document.querySelector('#reset');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;

resetCounter = () => {
    circle.setAttribute('stroke-dasharray', perimeter);
    circle.setAttribute('stroke-dashoffset', 0);
}

resetCounter();
let duration;

const timer = new Timer(durationInput, startButton, pauseButton, resetButton, {
    onStart(totalDuration) {
        duration = totalDuration;
    },
    onTick(timeRemaining) {
        circle.setAttribute('stroke-dashoffset',
            perimeter * timeRemaining / duration - perimeter
        );
    },
    onComplete() {
        resetCounter();
    }
});