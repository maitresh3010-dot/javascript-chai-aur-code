let secretNumber = Math.floor(Math.random() * 20) + 1;

const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const message = document.getElementById('message');
const restartBtn = document.getElementById('restartBtn');


const audioElements = document.querySelectorAll('audio');
const wrongAudios = Array.from(audioElements);

let attempts = 0;

function playRandomWrongAudio() {
    const randomIndex = Math.floor(Math.random() * wrongAudios.length);
    const audio = wrongAudios[randomIndex];
    audio.currentTime = 0;
    audio.play().catch(e => console.log('Audio play failed:', e));
}

guessBtn.addEventListener('click', function () {
    const guess = parseInt(guessInput.value);

    
    if (isNaN(guess) || guess < 1 || guess > 20) {
        message.textContent = 'Bkl 1 se 20 ke beech me daal!';
        return;
    }

    attempts++;

    if (guess === secretNumber) {
        message.textContent = `Sahi pakda! 🎉 ${attempts} attempt me pata chala!`;
        guessBtn.disabled = true;
        guessInput.disabled = true;
    } else {
        
        playRandomWrongAudio();

        if (guess < secretNumber) {
            message.textContent = 'Chota hai, bada soch! ⬆️';
        } else {
            message.textContent = 'Bada hai, chhota soch! ⬇️';
        }
        guessInput.value = '';
        guessInput.focus();
    }
});

restartBtn.addEventListener('click', function () {
    secretNumber = Math.floor(Math.random() * 20) + 1;
    attempts = 0;
    message.textContent = '';
    guessInput.value = '';
    guessInput.disabled = false;
    guessBtn.disabled = false;
    guessInput.focus();
});
