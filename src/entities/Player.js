/* 
    Class for adding, deleting, and updating player stats
    Stored in the game.data object to be access throughout all phaser states
*/
class Player {
    constructor(name = 'GUEST', credits = 6, totalScore = 0, highScore = 0, currentRound = 1, gameCompleted = false) {
        this.name = name;
        this.credits = credits;
        this.totalScore = totalScore;
        this.highScore = highScore;
        this.currentRound = currentRound;
        this.gameCompleted = gameCompleted;

        // if (completedRound) {
        //     this.completedRound = completedRound;
        // }else {
        //     this.completedRound = {
        //         round: currentRound,
        //         time: null,
        //         bonus: null,
        //         score: null,
        //         totalScore: null
        //     };
        // }
    }

    static getExistingPlayer() {
        return JSON.parse(localStorage.getItem('bubble-shooter'));
    }
    
    static clear() {
        localStorage.removeItem('bubble-shooter');
    }
    
    save() {
        localStorage.setItem('bubble-shooter', JSON.stringify(this));
    }
}

export default Player;