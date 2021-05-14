const TIMER_STEP = 10;

class Timer {
    constructor(durationInput, startButton, pauseButton, resetButton, callbacks) {
        this.isRunning = false;
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        this.resetButton = resetButton;
        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        };
        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
        this.resetButton.addEventListener('click', this.reset);
    };

    start = () => {
        if (!this.isRunning) {
            this.isRunning = true;
            if (this.onStart) {
                this.onStart(this.timeRemaining);
            };
            this.tick();
            this.intervalId = setInterval(this.tick, TIMER_STEP);
        }
    };

    pause = () => {
        clearInterval(this.intervalId);
        this.isRunning = false;
    };

    tick = () => {
        if (this.timeRemaining <= 0) {
            this.pause();
            if (this.onComplete) {
                this.durationInput.value = 0;
                alert('timer is complete.')
                this.onComplete();
            };
        } else {
            this.timeRemaining = this.timeRemaining - 1 / (1000 / TIMER_STEP);
            if (this.onTick) {
                this.onTick(this.timeRemaining);
            };
        }
    };

    reset = () => {
        this.pause();
        if (this.onComplete) {
            this.durationInput.value = 30;
            this.onComplete();
        };
    }

    get timeRemaining() {
        return parseFloat(this.durationInput.value)
    };

    set timeRemaining(time) {
        this.durationInput.value = time.toFixed(2);
    };
}