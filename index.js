class Timer {
    constructor(durationInput, startButton, pauseButton) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }
    start = () => {
        this.tick();
        this.intervalId = setInterval(this.tick, 1000)
    }
    pause = () => {
        clearInterval(this.intervalId);
    }
    // onDurationChange() {

    // }
    tick = () => {
        console.log('tick')
    }
}

const durationInput = document.querySelector('#duration');
const startButon = document.querySelector('#start')
const pauseButon = document.querySelector('#pause')

const timer = new Timer(durationInput, startButon, pauseButon)