let baseUrl = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games";

const createGame = async() => {
  const game = { name: "My game" }
  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(game),
  });
  const data = await response.JSON();
  console(data);
};

createGame();

const scores = [
  {
    Name: 'Chike',
    score: 71,
  },
  {
    Name: 'Nelsino',
    score: 83,
  },
  {
    Name: 'Jose',
    score: 78,
  },
  {
    Name: 'Dante',
    score: 80,
  },
  {
    Name: 'Hamza',
    score: 97,
  },
  {
    Name: 'Agbo',
    score: 76,
  },
  {
    Name: 'Enio',
    score: 98,
  },
];

export default scores;

