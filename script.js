const inputText = document.getElementById('text');
const textRate = document.getElementById('rate');
const textPitch = document.getElementById('pitch');
const playButton = document.getElementById('play');
const stopButton = document.getElementById('stop');

playButton.addEventListener('click', playText);

stopButton.addEventListener('click', stopText);

textRate.addEventListener('input', stopText);

textPitch.addEventListener('input', stopText);

const utterance = new SpeechSynthesisUtterance();

utterance.addEventListener('end', () => {
    inputText.disabled = false;
})

function playText() {
    if (speechSynthesis.speaking) {
        return;
    }
    utterance.text = inputText.value;
    utterance.rate = textRate.value || 1;

    utterance.pitch = textPitch.value || 1;
    inputText.disabled = true;

    speechSynthesis.speak(utterance);

    inputText.disabled = false;
}

function stopText() {
    speechSynthesis.cancel();
}