let points = 0;
let timer;
let timeLeft = 30;
let gameStarted = false;

function startGame() {
  if (!gameStarted) {
    gameStarted = true;
    points = 0;
    timeLeft = 30;
    updatePoints();
    updateTimer();

    // Esconder o botão "Iniciar Jogo"
    document.getElementById('startButton').style.display = 'none';

    timer = setInterval(updateTimer, 1000);

    // Adicionando evento de escuta para a tecla de espaço
    document.addEventListener('keypress', spaceKeyPressed);
  }
}

function spaceKeyPressed(event) {
  if (event.code === 'Space' && gameStarted && timeLeft > 0) {
    points++;
    updatePoints();
  }
}

function updatePoints() {
  document.getElementById('points').innerText = points;
}

function updateTimer() {
  timeLeft--;
  document.getElementById('timer').innerText = timeLeft;
  if (timeLeft === 0) {
    clearInterval(timer);
    document.getElementById('timer').innerText = 'Tempo esgotado!';
    gameStarted = false;

    // Mostrar novamente o botão "Iniciar Jogo" quando o tempo acabar
    document.getElementById('startButton').style.display = 'block';

    // Remover o evento de escuta da tecla de espaço quando o tempo acabar
    document.removeEventListener('keypress', spaceKeyPressed);
  }
}

// Esconde inicialmente o botão "Clique Aqui" ao carregar a página
document.getElementById('clickButton').style.display = 'none';
