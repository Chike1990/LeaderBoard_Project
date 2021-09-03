let baseUrl =
  "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/";

let globalGameId;

const createGame = async () => {
  const game = { name: "My game" };
  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(game),
  });
  const data = await response.json();
  const splitData = data.result.split(" ");
  return splitData[3];
};

if (!globalGameId) {
  const gameId = await createGame();
  globalGameId = gameId;
  console.log(globalGameId);
}

export const fetchGameData = async () => {
  const response = await fetch(baseUrl + globalGameId + "/scores/");
  const data = await response.json();
  return data.result;
};

export const addScore = async (data) => {
  console.log(data);
  const response = await fetch(baseUrl + globalGameId + "/scores/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await response.json();
};
