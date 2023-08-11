const homeScore = document.getElementById('home-score');
const guestScore = document.getElementById('guest-score');
let currentHomeScore = 0;
let currentGuestScore = 0;

function oneGoalToHome() {
  homeScore.textContent = `${(currentHomeScore += 1)}`;
}

function twoGoalToHome() {
  homeScore.textContent = `${(currentHomeScore += 2)}`;
}

function threeGoalToHome() {
  homeScore.textContent = `${(currentHomeScore += 3)}`;
}

function oneGoalToGuest() {
  guestScore.textContent = `${(currentGuestScore += 1)}`;
}

function twoGoalToGuest() {
  guestScore.textContent = `${(currentGuestScore += 2)}`;
}

function threeGoalToGuest() {
  guestScore.textContent = `${(currentGuestScore += 3)}`;
}

function playNewGame() {
  guestScore.textContent = `${(currentGuestScore -= currentGuestScore)}`;
  homeScore.textContent = `${(currentHomeScore -= currentHomeScore)}`;
}

document.addEventListener('click', function homeOne() {
  document.getElementById('home-btn-1').onclick = oneGoalToHome;
});

document.addEventListener('click', function homeTwo() {
  document.getElementById('home-btn-2').onclick = twoGoalToHome;
});

document.addEventListener('click', function homeThree() {
  document.getElementById('home-btn-3').onclick = threeGoalToHome;
});

document.addEventListener('click', function guestOne() {
  document.getElementById('guest-btn-1').onclick = oneGoalToGuest;
});

document.addEventListener('click', function guestTwo() {
  document.getElementById('guest-btn-2').onclick = twoGoalToGuest;
});

document.addEventListener('click', function guestThree() {
  document.getElementById('guest-btn-3').onclick = threeGoalToGuest;
});

document.addEventListener('click', function refreshGame() {
  document.getElementById('new-game').onclick = playNewGame;
});
