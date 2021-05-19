const durationInput = document.body.querySelector("#duration")
const startButton = document.body.querySelector("#start");
const pauseButton = document.body.querySelector("#pause");

const timer = new Timer(durationInput, startButton, pauseButton, {
onStart() {
    console.log('timer started');
},
onTick() {
    console.log('timer just clicked');
},
onComplete() {
    console.log('timer is completed')
}

});