const playersName = ["Вакуленко", "Вовк", "Киреу", "Реутов", "Овчаров", "Яковлев",
    "Похил", "Спасский", "Семченко", "Мищенко"];

const gamesDay = [];
// const player = {
//     name: "name",
//     games: [],
//     totalGame: 0,
//     wins: 0,

console.log(`Всего игроков ${playersName.length}`);
console.dir(playersName);

const sortNamesPlayers = playersName.map(player => player.toUpperCase()).toSorted();
console.log(sortNamesPlayers);

class Team {
    constructor(player1, player2, id, arrayGame = [], totalGame=0, wins = 0, winPercentage = 0) {
        this.player1 = player1;
        this.player2 = player2;
        this.id = id;
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

/////////////////////////////////unique teams//////////////////////////////////////
let b = [...arrayTeam];

function createUniqueTeam(array) {
    
    for (let a = 0; a < array.length; a += 1) {
   
        for (let i = 0; i < array.length; i += 1) {
             
            if (array[a].player1 === array[i].player2
            && array[a].player2 === array[i].player1) {
                    // console.log("такая команда уже есть!!!");
                    let indexCopyTeam = i;
                    b.splice(indexCopyTeam, 1);
                    // console.log(indexCopyTeam);
            }
            // else {
            //     console.log("такой команды нет")
            // };
        };
    };
};

createUniqueTeam(b);
console.dir(b);

///////////////////////////////add index for team////////////////////

function addIndex(array) {
    for (let i = 0; i < array.length; i += 1) {
        array[i].id = i + 1;
    }
};

addIndex(b);
console.log(b);

////start random number //////

const btnGeneration = document.querySelector(".js-btn");
const firstNumber = document.querySelector(".js-firstNumber");
const secondNumber = document.querySelector(".js-secondNumber");

btnGeneration.addEventListener("click", createNumber);

const minValue = 1;
const maxValue = b.length + 1;

function randomTeamNumber() {
    const result = Math.floor(Math.random() * (maxValue - minValue)) + minValue;
    return result;
}

function createNumber(e) {
    e.preventDefault();
    const firstTeam = randomTeamNumber();
    const secondTeam = randomTeamNumber();

    let firstCheck = b[firstTeam].player1 !== b[secondTeam].player1 &&
        b[firstTeam].player1 !== b[secondTeam].player2;
    let secondCheck = b[firstTeam].player2 !== b[secondTeam].player1 &&
        b[firstTeam].player2 !== b[secondTeam].player2;
    
    
    // firstTeam !== secondTeam

    if (firstCheck && secondCheck) {
        firstNumber.textContent = `${b[firstTeam].id} ${b[firstTeam].player1} и ${b[firstTeam].player2}`;
        secondNumber.textContent = `${b[secondTeam].id} ${b[secondTeam].player1} и ${b[secondTeam].player2}`;
    }
    gamesDay.push(`${firstTeam} + ${secondTeam}`);
    console.log(gamesDay);
}

/////////////////////