const btnAddPlayer = document.querySelector(".btn_add");
const inputAdd = document.querySelector("#name-input");
const output = document.querySelector(".outputName");

let newPlayer = "";
inputAdd.addEventListener("input", (event) => {
    output.textContent = event.currentTarget.value;
    newPlayer = output.textContent;
});
    
btnAddPlayer.addEventListener("click", addPlayer);

const playersName = ["Вакуленко", "Вовк", "Киреу", "Реутов", "Овчаров", "Яковлев",
    "Похил", "Спасский", "Семченко", "Мищенко"];
    

function addPlayer() {
    // e.preventDefault();
    if (playersName.includes(newPlayer)) {
        console.log(`игрок ${newPlayer} уже есть`);
        return;
    }
    playersName.push(newPlayer);
    console.log(newPlayer);
    console.dir(playersName);
};




const allPlayers = playersName.length;

const nameToLowerCase = playersName.map(player => player.toUpperCase()).toSorted();
const sortNamesPlayers = playersName.toSorted();
console.log(sortNamesPlayers);

//////////////////////////////////class Team/////////////////////////////

class Team {
    constructor(player1, player2, id, arrayGame = [], totalGame = 0, wins = 0, winPercentage = 0,
        seriesWins = 0, bestSeries = 0, gameDeadHeat) {
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
let teamArray = [...arrayTeam];

function createUniqueTeam(array) {
    
    for (let a = 0; a < array.length; a += 1) {
   
        for (let i = 0; i < array.length; i += 1) {
             
            if (array[a].player1 === array[i].player2
            && array[a].player2 === array[i].player1) {
                    //такая команда уже есть!!!//////
                    teamArray.splice(i, 1);
            }
        };
    };
};

createUniqueTeam(teamArray);

///////////////////////////////add index for team////////////////////

function addIndex(array) {
    for (let i = 0; i < array.length; i += 1) {
        array[i].id = i + 1;
    }
};

addIndex(teamArray);
console.log(teamArray);

////////////////////////////////start random number ///////////////

const btnGeneration = document.querySelector(".js-btn");
const firstNumber = document.querySelector(".js-firstNumber");
const secondNumber = document.querySelector(".js-secondNumber");

btnGeneration.addEventListener("click", createNumber);

const minValue = 0;
const maxValue = teamArray.length + 1;

function randomTeamNumber() {
    const result = Math.floor(Math.random() * (maxValue - minValue)) + minValue;
    return result;
}

function createNumber(e) {
    e.preventDefault();
    const firstTeam = randomTeamNumber();
    const secondTeam = randomTeamNumber();
    
    // firstTeam !== secondTeam
    let firstCheck = teamArray[firstTeam].player1 !== teamArray[secondTeam].player1 &&
        teamArray[firstTeam].player1 !== teamArray[secondTeam].player2;
    let secondCheck = teamArray[firstTeam].player2 !== teamArray[secondTeam].player1 &&
        teamArray[firstTeam].player2 !== teamArray[secondTeam].player2;
    
    if (firstCheck && secondCheck) {
        firstNumber.textContent = `${teamArray[firstTeam].id} ${teamArray[firstTeam].player1} и ${teamArray[firstTeam].player2}`;
        secondNumber.textContent = `${teamArray[secondTeam].id} ${teamArray[secondTeam].player1} и ${teamArray[secondTeam].player2}`;
    }
    gamesDay.push(`${firstTeam} + ${secondTeam}`);
    console.log(gamesDay);
}

/////////////////////
const gamesDay = [];

///////////////////////////show players list/////////
const jsPlayerList = document.querySelector(".js_players_list");
const jsQuantityPlayers = document.querySelector(".js-quantityPlayers");

jsQuantityPlayers.textContent = `(всего ${playersName.length} игроков):`;

const markup = sortNamesPlayers
  .map((name) => `<li class="players_list_item">
                <p class="player_name">${name}</p>
                </li>`)
  .join("");

jsPlayerList.insertAdjacentHTML("beforeend", markup);
/////////////////////////////////////////////////////////

 /////////////////////////show teams list//////////////////
const jsTeamList = document.querySelector(".js_team_list");

const markupTeam = teamArray
  .map((team) => `<li class="team_list_item">
                <p class="team_name">№${team.id}: ${team.player1} и ${team.player2}</p>
                </li>`)
  .join("");

jsTeamList.insertAdjacentHTML("beforeend", markupTeam);
  
////////////////////////////gaming session////////////////
const sessionList = document.querySelector(".js_form_GS");

const markupListPlayer = sortNamesPlayers
  .map((player) => `<label>
    <input type="checkbox" name="player" value="${player}"/>
    ${player}
  </label>`)
  .join("");

sessionList.insertAdjacentHTML("afterbegin", markupListPlayer);

let readyToPlay = [];

// sessionList.addEventListener("input", readyPlayers);

// function readyPlayers(e) {
    
//     // readyToPlayer.push(toReady);
// };

//////////////////////////////////////add game to team///////

const selectTeam1 = document.querySelector(".js_choose_team1");
const selectTeam2 = document.querySelector(".js_choose_team2");

const markupChooseTeam = teamArray
  .map((team) => `<option value="${team.id}">${team.player1} ${team.player2}</option>`)
  .join("");

selectTeam1.insertAdjacentHTML("afterbegin", markupChooseTeam);
selectTeam2.insertAdjacentHTML("afterbegin", markupChooseTeam);

const btnToAddGame = document.querySelector(".js_add_game");
