const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

let globalGameId;

export const createGame = () => {
  const game = { name: 'My game' };
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(game),
  }).then((res) => res.json()).then((data) => {
    if (!globalGameId) {
      const gameId = data.result.split(' ')[3];
      globalGameId = gameId;
    }
  });
};

createGame();

export const fetchGameData = async () => {
  const response = await fetch(`${baseUrl + globalGameId}/scores/`);
  const data = await response.json();
  return data.result;
};

export const addScore = async (data) => {
  const response = await fetch(`${baseUrl + globalGameId}/scores/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};