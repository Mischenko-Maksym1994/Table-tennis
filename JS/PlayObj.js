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

