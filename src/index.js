import './style.css';
import scores from './scoredata.js';

console.log(scores);
const scoreDisplay = document.querySelector(".score-display");
const displayScores = () => {
  scores.forEach(score => {
    const template =
      `<div class="score-display-item">
      <span class="name">${score.Name}</span>
      <span class="score">${score.score}</span>
    </div>`;
    scoreDisplay.innerHTML += template;
  });
};

displayScores();
