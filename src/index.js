import _ from 'lodash';
import './style.css';


let score = [
  {
    Name: 'Chike',
    score: 71
  },
  {
    Name: 'Nelsino',
    score: 83
  },
  {
    Name: 'Jose',
    score: 78
  },
  {
    Name: 'Dante',
    score: 80
  },
  {
    Name: 'Hamza',
    score: 97
  },
  {
    Name: 'Agbo',
    score: 76
  },
  {
    Name: 'Enio',
    score: 98
  },
]




function component() {
  const element = document.createElement('div');

 // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  return element;
}

document.body.appendChild(component());