const audio = document.getElementById("background-audio");
const audioIcon = document.getElementById("audio-icon");

function toggleAudio() {
    if (audio.paused) {
        audio.play();
        audioIcon.innerHTML = "❚❚"; // Ícono de pausa
    } else {
        audio.pause();
        audioIcon.innerHTML = "►"; // Ícono de play
    }
}
