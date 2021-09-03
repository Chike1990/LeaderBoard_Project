import './style.css';
import { fetchGameData, addScore } from './scoredata.js';

let scores = [];

const scoreDisplay = document.querySelector('.score-display');

document.querySelector('#refresh').addEventListener('click', async () => {
  scores = await fetchGameData();
});


const displayScore = () => {
  scoreDisplay.innerHTML = '';
  scores.forEach((score) => {
    const template = `<div class="score-display-item">
      <span class="name">${score.user}</span>
      <span class="score">${score.score}</span>
    </div>`;
    scoreDisplay.innerHTML += template;
  });
};
displayScore();

document.querySelector('.add-score').addEventListener('submit', async (e) => {
  e.preventDefault();
  const user = document.querySelector('#name').value;
  const score = document.querySelector('#score').value;
  await addScore({ user, score });
  scores = await fetchGameData();
  displayScore();
});
