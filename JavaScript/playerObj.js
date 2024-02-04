// const player = {
//     name: "name",
//     games: [],
//     totalGame: 0,
//     wins: 0,


// }

// console.log(player);

// const Kolya = Object.create(player);
// Kolya.name = "Kolya";
// Kolya.games = [0, 1, 1, 1, 0];

// console.log(Kolya);




const minValue = 1;
const maxValue = 45;

function randomTeamNumber() {
    const minValue = 1;
    const maxValue = 45;
    return Math.random() * (maxValue - minValue) + minValue;
}

console.log(randomTeamNumber());

