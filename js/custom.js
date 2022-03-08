//checkout page//

$('form').card({
    container: '.card-wrapper',
    width: 280,

    formSelectors: {
        nameInput: 'input[name="first-name"], input[name="last-name"]'
    }
});

window.AudioContext = window.AudioContext || window.webkitAudioContext;

const context = new AudioContext();

navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
  const microphone = context.createMediaStreamSource(stream);
  const filter = context.createBiquadFilter();
  // microphone -> filter -> destination
  microphone.connect(filter);
  filter.connect(context.destination);
});

//new try for camera//

