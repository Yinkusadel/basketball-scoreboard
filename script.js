const homeScore = document.getElementById('home-score');
const guestScore = document.getElementById('guest-score');
const newGame = document.getElementById('new-game');
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

const homeOne = document.getElementById('home-btn-1');
homeOne.onclick = oneGoalToHome;

const homeTwo = document.getElementById('home-btn-2');
homeTwo.onclick = twoGoalToHome;

const homeThree = document.getElementById('home-btn-3');
homeThree.onclick = threeGoalToHome;

const guestOne = document.getElementById('guest-btn-1');
guestOne.onclick = oneGoalToGuest;

const guestTwo = document.getElementById('guest-btn-2');
guestTwo.onclick = twoGoalToGuest;

const guestThree = document.getElementById('guest-btn-3');
guestThree.onclick = threeGoalToGuest;

const refreshGame = document.getElementById('new-game');
refreshGame.onclick = playNewGame;
