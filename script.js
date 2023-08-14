const homeScore = document.querySelector('#home-score');
const guestScore = document.querySelector('#guest-score');
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

const homeOne = document.querySelector('#home-btn-1');
homeOne.addEventListener('click', oneGoalToHome);

const homeTwo = document.querySelector('#home-btn-2');
homeTwo.addEventListener('click', twoGoalToHome);

const homeThree = document.querySelector('#home-btn-3');
homeThree.addEventListener('click', threeGoalToHome);

const guestOne = document.querySelector('#guest-btn-1');
guestOne.addEventListener('click', oneGoalToGuest);

const guestTwo = document.querySelector('#guest-btn-2');
guestTwo.addEventListener('click', twoGoalToGuest);

const guestThree = document.querySelector('#guest-btn-3');
guestThree.addEventListener('click', threeGoalToGuest);

const refreshGame = document.querySelector('#new-game');
refreshGame.addEventListener('click', playNewGame);
