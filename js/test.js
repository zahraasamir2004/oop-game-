async function GetGames() {


    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '1581d97e0emsh5ffee5ddb926fc5p1eb66ajsna1b7454c0ca5',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    
    const api = await fetch(
        "https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter", options
      );
      const response = await api.json();
      console.log(response);
    
  const url =
  "https://free-to-play-games-database.p.rapidapi.com/api/game?id=452";  
try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}
}


GetGames();