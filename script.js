// CONFIGURAÇÃO: Coloque a data do início do namoro aqui!
// Formato: Ano, Mês (0-11), Dia, Hora, Minuto
// O mês 7 representa Agosto (Janeiro = 0)
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
updateTimer(); // Roda imediatamente ao carregar

// Easter egg de desenvolvedor ;)
console.log("Feito com amor para a melhor namorada do mundo.");