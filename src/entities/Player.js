class Player {
    constructor(name = 'GUEST', currentRound = 1, credits = 3, totalScore = 0, highScore = 0) {
        this.name = name;
        this.currentRound = currentRound;
        this.credits = credits;
        this.totalScore = totalScore;
        this.highScore = highScore;
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