const aud = document.getElementById('mic');
const openMic= document.getElementById('openMic');
openMic.addEventListener('click', () => {
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
            aud.srcObject = stream;
            aud.style.display = 'block';
        })
        .catch(err => {
            console.error("Microphone access denied:", err);
        });
});