const useR = {
    firstName: "",
    game: [],
    totalGame: 0,
    wins: 0,
    winPercentage: 0,
}

class User {
    
    constructor(name, game = [], totalGame = 0, wins = 0, winPercentage = 0) {
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
        return this
    }
}