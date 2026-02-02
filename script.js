const text = "Neural Interface Activated.";
const speed = 70;
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

// Iniciar animaciones y configurar el botón
document.addEventListener("DOMContentLoaded", () => {
    typeWriter();

    const startBtn = document.getElementById('start-chat-btn');
    
    startBtn.addEventListener('click', () => {
        // Esta función intenta abrir el widget de Chatbase
        if (typeof chatbase === 'function') {
            chatbase("open");
        } else {
            console.log("Chatbase not loaded yet. Retrying...");
            alert("Connecting to AI... Please try again in 2 seconds.");
        }
    });
});