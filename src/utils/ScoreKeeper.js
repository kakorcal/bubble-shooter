const bubblePoints = 10;

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

    refreshMaps() {
        this.colorMap.clear();
        this.mergeMap = [];
    }
}

export default ScoreKeeper;