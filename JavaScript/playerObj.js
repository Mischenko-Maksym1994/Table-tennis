const player = {
    name: "name",
    games: [],
    totalGame: 0,
    wins: 0,


}

console.log(player);

const Kolya = Object.create(player);
Kolya.name = "Kolya";
Kolya.games = [0, 1, 1, 1, 0];

console.log(Kolya);