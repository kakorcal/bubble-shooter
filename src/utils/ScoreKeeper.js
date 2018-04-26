const bubblePoints = 10;
const maxBonusPoints = 50000;
const bonusInterval = 840;

/* 
    Keeps tally of the score for the current round
*/
class ScoreKeeper {
    constructor() {
        this.currentScore = 0;
        this.score = 0;
        this.time = 0;
        this.bonus = 0;
        // stores the colorCode as key and value
        // will be an array of indices
        this.colorMap = new Map();
        this.mergeMap = [];
    }

    // used when a bubble match occurs or floaters are detected
    add(colorCode, i, j) {
        let current = this.colorMap.get(colorCode);
        if (current) {
            current.push({ i, j });
            this.colorMap.set(colorCode, current);
        }else {
            this.colorMap.set(colorCode, [{i, j}]);
        }
    }

    // 10 points per matching color
    // 10^(non matching color count) per non matching color
    calculate(currentColorCode) {
        this.colorMap.forEach((arr, key) => {
            let pointsArr;
            if (key === currentColorCode) {
                this.score += arr.length * bubblePoints;
                this.currentScore += arr.length * bubblePoints;
                arr.forEach(el => {
                    el.score = bubblePoints;
                    this.mergeMap.push(el);
                });
            }else {
                this.score += (bubblePoints * Math.pow(2, arr.length)) * arr.length;
                this.currentScore += (bubblePoints * Math.pow(2, arr.length)) * arr.length;
                arr.forEach(el => {
                    el.score = bubblePoints * Math.pow(2, arr.length);
                    this.mergeMap.push(el);
                });
            }
            // this.colorMap.set(key, pointsArr);
        });
    }

    calculateFinalResult(win) {
        if(win) {
            this.calculateBonus();
        }else {
            this.bonus = 0;
            this.score = 0;
        }
    }

    calculateBonus() {
        if(this.time < 6) {
            this.bonus = maxBonusPoints;
        }else if(this.time >= 6 && this.time <= 64) {
            // 50000 - (840 * (64 - 5))
            this.bonus = maxBonusPoints - (bonusInterval * (this.time - 5));
        }else {
            this.bonus = 0;
        }
    }

    refreshMaps() {
        this.colorMap.clear();
        this.mergeMap = [];
        this.currentScore = 0;
    }
}

export default ScoreKeeper;