import Player from '../entities/Player';
import Navigation from '../entities/Navigation';
import {ROWS, COLUMNS, TILE_SIZE, ANCHOR_OFFSET, CANVAS_HEIGHT, CANVAS_WIDTH, MIN_HEIGHT,
    CENTER_X, CENTER_Y, TITLE_FONT_SIZE, HEADER_FONT_SIZE, DESC_FONT_SIZE, NAV_FONT_SIZE
} from '../utils/Constants';
import {setSize} from '../utils/Helpers';

const adjustSize = setSize(MIN_HEIGHT, CANVAS_HEIGHT);

class Menu extends Phaser.State {
    init(prevState) {
        if(prevState === 'play') {
            this.game.data.audio.theme0.play(null, 0, 1, true);
        }
    }

    create() {
        // TODO: https://stackoverflow.com/questions/39152877/consider-marking-event-handler-as-passive-to-make-the-page-more-responsive
        this.createTiles();
        this.createLogo();
        this.createNavigation();

        // event listeners
        this.game.keyEnter.onDown.add(this.changeState, this);
        this.game.keyDown.onDown.add(this.changeCurrentNavigation, this);
        this.game.keyUp.onDown.add(this.changeCurrentNavigation, this);  
    }

    createTiles() {
        let tiles = this.add.group();
        tiles.createMultiple(ROWS * COLUMNS, 'tile-1', null, true);
        tiles.setAll('width', TILE_SIZE);
        tiles.setAll('height', TILE_SIZE);
        // rows and columns are opposites for this method
        tiles.align(COLUMNS, ROWS, TILE_SIZE, TILE_SIZE);
    }

    createLogo() {
        let logo = this.add.group();
        let cloud = logo.create(CENTER_X, CENTER_Y - adjustSize(10), 'cloud-1');
        cloud.width = adjustSize(510);
        cloud.height = adjustSize(450);
        // x, y, font, text, size, group
        // large: 130, medium: 100, small: 72
        this.add.bitmapText(CENTER_X - adjustSize(50), CENTER_Y - adjustSize(45), 'happy-hell', 'BUBBLE', TITLE_FONT_SIZE, logo);
        this.add.bitmapText(CENTER_X + adjustSize(30), CENTER_Y + adjustSize(40), 'happy-hell', 'SHOOTER', TITLE_FONT_SIZE, logo);
        logo.setAll('anchor.x', 0.5);
        logo.setAll('anchor.y', 0.5);
    }

    createNavigation() {        
        // adding logo text
        if(this.game.data.player) {
            this.navigation = new Navigation(this.game, [
                {name: 'CONTINUE', stateName: 'continue', font: 'upheaval', fontSize: NAV_FONT_SIZE},
                {name: 'NEW GAME', stateName: 'newGame', font: 'upheaval', fontSize: NAV_FONT_SIZE},
                {name: 'TUTORIAL', stateName: 'tutorial', font: 'upheaval', fontSize: NAV_FONT_SIZE},
            ], CENTER_X, CENTER_Y + adjustSize(110), adjustSize(40));
        }else {
            this.navigation = new Navigation(this.game, [
                { name: 'NEW GAME', stateName: 'newGame', font: 'upheaval', fontSize: NAV_FONT_SIZE },
                { name: 'TUTORIAL', stateName: 'tutorial', font: 'upheaval', fontSize: NAV_FONT_SIZE },
            ], CENTER_X, CENTER_Y + adjustSize(110), adjustSize(40));
        }

        this.navigation.createPolnareff(CENTER_X - adjustSize(105), CENTER_Y + adjustSize(113), adjustSize(38));
        this.navigation.polnareff.width = adjustSize(36);
        this.navigation.polnareff.height = adjustSize(36);

        // adding instruction text
        let instructions = this.add.text(
            ANCHOR_OFFSET - adjustSize(3), CANVAS_HEIGHT - ANCHOR_OFFSET,
            "Use arrow keys to move and press ENTER to select",
            { font: DESC_FONT_SIZE + "px monospace", fill: "white", align: "left", stroke: 'black', strokeThickness: 3 },
        );

        instructions.anchor.set(0, 0.35);
        instructions.alpha = 0;

        // Yoyo the text
        let instructionsTween = this.add.tween(instructions).
            to({ alpha: 1 }, 500, "Linear", true, 0, -1);

        instructionsTween.yoyo(true, 300); 
    }

    changeCurrentNavigation(e) {
        if (e.keyCode === this.game.keyDown.keyCode) {
            this.navigation.changeCurrentNavigation(1);
        }

        if (e.keyCode === this.game.keyUp.keyCode) {
            this.navigation.changeCurrentNavigation(-1);
        }

        this.game.data.audio.switchNavigation.play();
    }

    changeState(e) {     
        let state = this.navigation.children[this.navigation.currentIndex].stateName;

        if(state === 'newGame') {
            Player.clear();
            this.game.data.player = new Player();
            state = 'play';
        }else if(state === 'continue') {
            state = 'play';
        }
        
        this.navigation.tweenNavigation(this.navigation.currentIndex, () => { 
                this.state.start(state);

                if(state !== 'tutorial') {
                    this.game.data.audio.theme0.stop();
                }
                
            });

        this.game.data.audio.selectNavigation.play();
    }

    shutdown() {
        this.game.keyEnter.onDown.remove(this.changeState, this);
        this.game.keyDown.onDown.remove(this.changeCurrentNavigation, this);
        this.game.keyUp.onDown.remove(this.changeCurrentNavigation, this);  
    }
}

export default Menu;