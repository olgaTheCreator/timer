class Timer {
    constructor(durationInput, startButton, pauseButton) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener("click", this.start);
    }
    start = () => {
        this.tick();
        setInterval(this.tick, 1000);
    }

    tick = () => {
        console.log('tick');
    }
}
const durationInput = document.body.querySelector("#duration")
const startButton = document.body.querySelector("#start");
const pauseButton = document.body.querySelector("#pause");

const timer = new Timer(durationInput, startButton, pauseButton);