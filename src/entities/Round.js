import {EntityMap} from '../utils/EntityMap';
import { CANVAS_WIDTH, CANVAS_HEIGHT, TILE_SIZE, ANCHOR_OFFSET, 
         LAUNCHER_HEIGHT, ROUND_MODE_1, ROUND_MODE_2
} from '../utils/Constants';

class Round {
    constructor(roundNumber) {
        let {matrix, selection} = require(`../rounds/${roundNumber}`);
        this.matrix = matrix.map(row => row.slice());
        this.selection = selection;
        this.topRow = 0;
        
        if(this.matrix.length && this.matrix[0].length) {
            this.rows = this.matrix.length;
            this.cols = this.matrix[0].length;

            if (this.cols === ROUND_MODE_1) {
                this.startX = TILE_SIZE;
                this.endX = CANVAS_WIDTH - TILE_SIZE;
                this.startY = TILE_SIZE;
                this.endY = CANVAS_HEIGHT - LAUNCHER_HEIGHT;
            }

            if (this.cols === ROUND_MODE_2) {
                this.startX = (5 * TILE_SIZE) + ANCHOR_OFFSET;
                this.endX = CANVAS_WIDTH - (5 * TILE_SIZE) - ANCHOR_OFFSET;
                this.startY = TILE_SIZE;
                this.endY = CANVAS_HEIGHT - LAUNCHER_HEIGHT;
            }
        }
    }

    getCoordinates(i, j) {
        if(i < 0 || j < 0) return;

        // add extra offset to shift the row that has one less space
        let xOffset = this.matrix[i][this.cols - 1] === null ? ANCHOR_OFFSET : 0;
        
        // get the x,y coord of the bubble with respect to its center
        let x = (this.startX + ANCHOR_OFFSET) + (j * TILE_SIZE) + xOffset;
        let y = (this.startY + ANCHOR_OFFSET) + (i * TILE_SIZE);
        // console.log('i: ' + i + ' j: ' + j + ' x: ' + x + ' y: ' + y);
        return {x, y};
    }

    getIndices(x, y) {
        if(x < 0 || y < 0) return;

        let i = Math.round((y - this.startY - ANCHOR_OFFSET) / (TILE_SIZE));
        let xOffset = this.matrix[i][this.cols - 1] === null ? ANCHOR_OFFSET : 0;
        let j = Math.round((x - this.startX - ANCHOR_OFFSET - xOffset) / (TILE_SIZE));
        // console.log('x: ' + x + ' y: ' + y + ' i: ' + i + ' j: ' + j);
        return {i, j};
    }

    shiftTopBoundary() {
        // add blocks on top
        // remove last row
        // push out of bounds on bottom
        let topRow = [];
        for(let i = 0; i < this.cols; i++) {
            if (this.cols === ROUND_MODE_1) {
                topRow.push(EntityMap.block);
            } else if (this.cols === ROUND_MODE_2) {
                topRow.push(EntityMap.halfBlock);
            }
        }

        this.matrix.unshift(topRow);
        
        let outOfBounds = this.matrix.pop();
        let validMatrix = this.matrix[this.rows - 1].every(el => el === EntityMap.zero || el === EntityMap.empty);

        if(validMatrix) {
            this.matrix.pop();
            this.matrix.push(outOfBounds);
            this.topRow++;
        }

        return validMatrix;
    }

    getBubbleHash(i, j) {
        return `${i}_${j}`;
    }

    fromBubbleHash(hash) {
        let bubble = {};
        let [i, j] = hash.split('_');
        i = parseInt(i);
        j = parseInt(j);
        bubble.indices = { i, j };
        bubble.colorCode = this.matrix[i][j];
        return bubble;
    }

    isBubble(i, j) {
        if(i >= 0 && i < this.rows && j >= 0 && j < this.cols) {
            return this.matrix[i][j] >= EntityMap.BUBBLE_START && this.matrix[i][j] <= EntityMap.BUBBLE_END;
        }else {
            return false;
        }
    }

    isSmallRow(i) {
        return this.matrix[i][this.cols - 1] === null;
    }
}

export default Round;