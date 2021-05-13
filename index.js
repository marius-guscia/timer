class Timer {
    constructor(durationInput, startButton, pauseButton) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }
    start() {
        console.log('Time to start the timer.')
    }
    pause() {
        console.log('Time to pause the timer.')
    }
    // onDurationChange() {

    // }
    // tick() {

    // }
}

const durationInput = document.querySelector('#duration');
const startButon = document.querySelector('#start')
const pauseButon = document.querySelector('#pause')

const timer = new Timer(durationInput, startButon, pauseButon)