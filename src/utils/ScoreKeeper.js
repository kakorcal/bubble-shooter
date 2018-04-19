const bubblePoints = 10;
const maxBonusPoints = 50000;
const bonusInterval = 840;

class ScoreKeeper {
    constructor() {
        this.score = 0;
        this.time = 0;
        this.bonus = 0;
        // stores the colorCode as key and value
        // will be an array of indices
        this.colorMap = new Map();
        this.mergeMap = [];
    }

    add(colorCode, i, j) {
        let current = this.colorMap.get(colorCode);
        if (current) {
            current.push({ i, j });
            this.colorMap.set(colorCode, current);
        }else {
            this.colorMap.set(colorCode, [{i, j}]);
        }
    }

    calculate(currentColorCode) {
        this.colorMap.forEach((arr, key) => {
            let pointsArr;
            if (key === currentColorCode) {
                this.score += arr.length * bubblePoints;
                arr.forEach(el => {
                    el.score = bubblePoints;
                    this.mergeMap.push(el);
                });
            }else {
                this.score += (bubblePoints * Math.pow(2, arr.length)) * arr.length;
                arr.forEach(el => {
                    el.score = bubblePoints * Math.pow(2, arr.length);
                    this.mergeMap.push(el);
                });
            }
            // this.colorMap.set(key, pointsArr);
        });
    }

    calculateTotal() {

    }

    calculateBonus() {
        if(this.time <= 5) {
            this.bonus = maxBonusPoints;
        }else if(this.time > 6 && this.time <= 64) {
            // 50000 - (840 * (64 - 5))
            this.bonus = maxBonusPoints - (bonusInterval * (this.time - 5));
        }else {
            this.bonus = 0;
            this.score = 0;
        }
    }

    refreshMaps() {
        this.colorMap.clear();
        this.mergeMap = [];
    }
}

export default ScoreKeeper;