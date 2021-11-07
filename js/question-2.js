const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=984e104dcc8a446eaaca8fa096057f3b"

const resultsContainer = document.querySelector(".results")

async function getGames() {
    try {
        const response = await fetch(url);
        const results = await response.json();
        const games = results.all;

        resultsContainer.innerHTML = "";

        for(let i = 0; i < games.length; i++){
            console.log(games[i].name, games[i].rating);

            if(i == 8){
                break;
            }

            resultsContainer.innerHTML += `<div class="result">${games[i].name}</div>`;
        }

    } catch (error) {
        console.log(error);
    } 
}

getGames();