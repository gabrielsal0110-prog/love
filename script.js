// Configuração do início: 23 de Agosto de 2024
const startDate = new Date(2024, 7, 23, 0, 0);

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}

setInterval(updateTimer, 1000);
updateTimer();

// Lógica do botão "Me Ama"
function answerYes() {
    const message = document.getElementById('love-message');
    message.innerText = "Eu também te amo muito, meu amor! ❤️🌹";
    document.getElementById('btn-sim').style.transform = "scale(1.2)";
}

function showError() {
    alert("Não tem essa opção! ❌😜");
}

function moveNo() {
    const btnNao = document.getElementById('btn-nao');
    // Faz o botão saltar para uma posição aleatória na tela
    const x = Math.random() * (window.innerWidth - btnNao.offsetWidth);
    const y = Math.random() * (window.innerHeight - btnNao.offsetHeight);
    
    btnNao.style.position = 'fixed';
    btnNao.style.left = x + 'px';
    btnNao.style.top = y + 'px';
}

function celebrate() {
    alert("És o meu porto seguro! 🥰❤️");
}