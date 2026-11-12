// NEXORA_EXE WEBSITE

console.log("Welcome to NEXORA_EXE!");

const games = [
    {
        name: "Adventure Games",
        category: "Adventure"
    },
    {
        name: "Speed Racing",
        category: "Racing"
    },
    {
        name: "Puzzle Challenge",
        category: "Puzzle"
    },
    {
        name: "Action Zone",
        category: "Action"
    }
];

const gameList = document.getElementById("game-list");

if (gameList) {
    gameList.innerHTML = "";

    games.forEach(game => {
        const gameCard = document.createElement("div");

        gameCard.className = "game-card";

        gameCard.innerHTML = `
            <h3>${game.name}</h3>
            <p>${game.category}</p>
            <button type="button" onclick="alert('Game coming soon!')">
                Play Now
            </button>
        `;

        gameList.appendChild(gameCard);
    });
}
