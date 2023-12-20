const useR = {
    firstName: "",
    game: [],
    totalGame: 0,
    wins: 0,
    winPercentage: 0,
}

class User {
    
    constructor(name, game = [], totalGame=0, wins = 0, winPercentage = 0) {
        this.name = name;
        this.game = game;
        this.totalGame = totalGame;
        this.wins = wins;
        this.winPercentage = winPercentage;
    }

    get name() {
        return this.name;
    }


    get game() {
        return this.game;
    }

    set game(newGame) {
        this.game.push(newGame);
    }

    get totalGame() {
        return this.totalGame;
    }

    get wins() {
        return this.wins;
    }

    get winPercentage() {
        return this.winPercentage;
    }
}

console.log(User.totalGame);


// const player1 = new User({
//     name: Nik,
//     game: [0, 1, 1, 1, 0],
//     totalGame: 0,
//     wins: 0,
//     winPercentage: 0, 
// });


// console.log(player1);