const playersName = ["Вакуленко", "Вовк", "Киреу", "Реутов", "Овчаров", "Яковлев",
    "Похил", "Спасский", "Семченко", "Мищенко"];

const gamesDay = [];
// const player = {
//     name: "name",
//     games: [],
//     totalGame: 0,
//     wins: 0,

console.log(`Всего игроков ${playersName.length}`);
console.log(playersName);


const toUpperCasePlayers = playersName.map(player => player.toUpperCase());
const sortNamesPlayers = toUpperCasePlayers.toSorted();
console.log(sortNamesPlayers);


class Team {
    constructor(player1, player2, arrayGame = [], totalGame=0, wins = 0, winPercentage = 0) {
        this.player1 = player1;
        this.player2 = player2;
        this.arrayGame = arrayGame;
        this.totalGame = totalGame;
        this.wins = wins;
        this.winPercentage = winPercentage;
    }
}
///create array with all variable team////
let arrayTeam = [];

function createTeam(array) {
        
    for (let a = 0; a < array.length; a += 1) {
        // let a = 0;
        
        for (let i = 0; i < array.length; i += 1) {
            if (a < array.length) {
                if (array[a] !== array[i]) {
                   
                    const newT = new Team(); 
                    newT.player1 = array[a];
                    newT.player2 = array[i];
                    arrayTeam.push(newT);
                    // const newTeam = `${array[a]} ${array[i]}`;
                    // arrayTeam.push(newTeam); 
                } else {
                    continue;
                } 
            } else if (a === array.length) {
                a += 1;
            }
        }
    }
}

createTeam(sortNamesPlayers);
console.dir(arrayTeam);

////unique teams////
const uniqueTeam = [];

// for (element of arrayTeam) {
//     if (uniqueTeam.includes(element) {
//         continue;
//     } )
// }

////start random number //////

const btnGeneration = document.querySelector(".js-btn");
const firstNumber = document.querySelector(".js-firstNumber");
const secondNumber = document.querySelector(".js-secondNumber");

btnGeneration.addEventListener("click", createNumber);

const minValue = 1;
const maxValue = 45;

function randomTeamNumber() {
    const result = Math.floor(Math.random() * (maxValue - minValue)) + minValue;
    return result;
}

function createNumber(e) {
    e.preventDefault();
    const firstTeam = randomTeamNumber();
    const secondTeam = randomTeamNumber();
    if (firstTeam !== secondTeam) {
        firstNumber.textContent = firstTeam;
        secondNumber.textContent = secondTeam;
    }
    gamesDay.push(`${firstTeam} + ${secondTeam}`);
    console.log(gamesDay);
}

