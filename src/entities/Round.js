import { CANVAS_WIDTH, CANVAS_HEIGHT, TILE_SIZE, ANCHOR_OFFSET, LAUNCHER_HEIGHT} from '../utils/Constants';

class Round {
    constructor(round) {
        this.matrix = require(`../rounds/${round}`).default;
        
        if(this.matrix.length && this.matrix[0].length) {
            this.rows = this.matrix.length;
            this.cols = this.matrix[0].length;

            if(this.cols === 17) {
                this.startX = TILE_SIZE;
                this.endX = CANVAS_WIDTH - TILE_SIZE;
                this.startY = TILE_SIZE;
                this.endY = CANVAS_HEIGHT - LAUNCHER_HEIGHT;
            }

            if(this.cols === 8) {
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

    addRow(row) {

    }

    removeRow(row) {

    }
}

export default Round;