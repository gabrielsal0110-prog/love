const startDate = new Date(2024, 7, 23, 0, 0);

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;
    document.getElementById('days').innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById('hours').innerText = Math.floor((diff / (1000 * 60 * 60)) % 24);
    document.getElementById('minutes').innerText = Math.floor((diff / 1000 / 60) % 60);
    document.getElementById('seconds').innerText = Math.floor((diff / 1000) % 60);
}

setInterval(updateTimer, 1000);
updateTimer();

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
    const x = Math.random() * (window.innerWidth - btnNao.offsetWidth);
    const y = Math.random() * (window.innerHeight - btnNao.offsetHeight);
    btnNao.style.position = 'fixed';
    btnNao.style.left = x + 'px';
    btnNao.style.top = y + 'px';
}

function celebrate() {
    alert("você é o meu porto seguro! 🥰❤️");
}