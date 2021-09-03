let baseUrl =
  "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/";

let globalGameId;

export const createGame = () => {
  const game = { name: "My game" };
  fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(game),
  }).then(res => {
    return res.json();
  }).then(data => {
    if (!globalGameId) {
      const gameId = data.result.split(" ")[3]
      globalGameId = gameId
      console.log(globalGameId)
    }    
  }).catch(err => console.log(err));
  // const data = await response.json();
  // const splitData = data.result.split(" ");
  // return splitData[3];
};

createGame()

// export const fetchGameData = async () => {
//   return fetch(baseUrl + globalGameId + "/scores/")
//     .then(res => {
//       return res.json()
//     })
//     .then(data => {
//       return data.result
//     })
//     .catch(err => console.log(err));
// };

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