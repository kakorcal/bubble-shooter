import { 
    CANVAS_WIDTH, CANVAS_HEIGHT, CENTER_X, CENTER_Y, 
    ROWS, COLUMNS, TILE_SIZE, ANCHOR_OFFSET, MIN_HEIGHT,
    HEADER_FONT_SIZE, DESC_FONT_SIZE, NAV_FONT_SIZE
} from '../utils/Constants';
import { setSize } from '../utils/Helpers';

const adjustSize = setSize(MIN_HEIGHT, CANVAS_HEIGHT);

class Tutorial extends Phaser.State {
    create() {       
        // builder
        this.createTiles();
        this.createInstructions();
        this.theme = this.game.data.audio.theme0;

        // events
        this.game.keyEnter.onDown.add(this.changeState, this);
    }

    createTiles() {
        this.tiles = this.add.group();
        this.tiles.createMultiple(ROWS * COLUMNS, 'tile-3', null, true);
        this.tiles.setAll('width', TILE_SIZE);
        this.tiles.setAll('height', TILE_SIZE);
        // rows and columns are opposites for this method
        this.tiles.align(COLUMNS, ROWS, TILE_SIZE, TILE_SIZE);
    }

    createInstructions() {
        this.instructions = this.add.group();

        let rules = "• Clear all bubbles using the launcher to continue to the\n  next round.\n"
            + "• Remove the bubbles by attaching to clusters of 3 or more with\n  the same color.\n"
            + "• Bubbles with different colors can also be removed if they are\n  hanging from the cluster.\n"
            + "• Each bubble removed is worth 10 points.\n"
            + "• Each hanging bubble that is removed is worth\n  10^(total hanging bubbles) points per color.\n"
            + "• There are a total of 50 rounds and 6 credits per game. Good Luck!"

        let rulesHeader = this.add.bitmapText(TILE_SIZE, ANCHOR_OFFSET, 'upheaval', 'RULES', HEADER_FONT_SIZE, this.instructions);
        let rulesDesc = this.add.text(TILE_SIZE, TILE_SIZE * 2, rules, {font: DESC_FONT_SIZE + "px monospace", fill: "white", align: "left", stroke: 'black', strokeThickness: 3}, this.instructions);

        let controls = "• SPACE = Launch bubble\n"
            + "• ARROW LEFT/RIGHT = Rotate launcher\n"
            + "• ENTER = Select navigation\n"
            + "• ARROW UP/DOWN = Switch navigation"
        
        let controlHeader = this.add.bitmapText(TILE_SIZE, CENTER_Y + TILE_SIZE, 'upheaval', 'CONTROLS', HEADER_FONT_SIZE, this.instructions);
        let controlDesc = this.add.text(TILE_SIZE, CENTER_Y + (TILE_SIZE * 2) + ANCHOR_OFFSET, controls, {font: DESC_FONT_SIZE + "px monospace", fill: "white", align: "left", stroke: 'black', strokeThickness: 3}, this.instructions);

        // adding instruction text
        let instructions = this.add.text(
            ANCHOR_OFFSET - adjustSize(3), CANVAS_HEIGHT - ANCHOR_OFFSET,
            "Press ENTER to go back",
            { font: DESC_FONT_SIZE + "px monospace", fill: "white", align: "left", stroke: 'black', strokeThickness: 3 },
        );

        instructions.anchor.set(0, 0.35);
        instructions.alpha = 0;

        // Yoyo the text
        let instructionsTween = this.add.tween(instructions).
            to({ alpha: 1 }, 500, "Linear", true, 0, -1);

        instructionsTween.yoyo(true, 300); 
    }

    changeState(e) {
        this.state.start('menu');
    }

    shutdown() {
        this.game.keyEnter.onDown.remove(this.changeState, this);
    }
}

export default Tutorial;