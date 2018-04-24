import Player from '../entities/Player';
import Navigation from '../entities/Navigation';
import {ROWS, COLUMNS, TILE_SIZE, CANVAS_HEIGHT, CENTER_X, CENTER_Y} from '../utils/Constants';

class Menu extends Phaser.State {
    init(prevState) {
        if(prevState) {
            this.game.data.audio.theme0.play();
        }
    }

    create() {
        // TODO: https://stackoverflow.com/questions/39152877/consider-marking-event-handler-as-passive-to-make-the-page-more-responsive
        this.createTiles();
        this.createLogo();
        this.createNavigation();

        // event listeners
        this.game.keyEnter.onDown.addOnce(this.changeState, this);
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
        logo.create(CENTER_X, CENTER_Y - 10, 'cloud-1');
        // x, y, font, text, size, group
        this.add.bitmapText(CENTER_X - 50, CENTER_Y - 45, 'happy-hell', 'BUBBLE', 80, logo);
        this.add.bitmapText(CENTER_X + 30, CENTER_Y + 40, 'happy-hell', 'SHOOTER', 80, logo);
        logo.setAll('anchor.x', 0.5);
        logo.setAll('anchor.y', 0.5);
    }

    createNavigation() {        
        // adding logo text
        if(this.game.data.player) {
            this.navigation = new Navigation(this.game, [
                {name: 'CONTINUE', stateName: 'continue', font: 'upheaval', fontSize: 30},
                {name: 'NEW GAME', stateName: 'newGame', font: 'upheaval', fontSize: 30},
                {name: 'TUTORIAL', stateName: 'tutorial', font: 'upheaval', fontSize: 30},
            ], CENTER_X, CENTER_Y + 110, 40);
        }else {
            this.navigation = new Navigation(this.game, [
                { name: 'NEW GAME', stateName: 'newGame', font: 'upheaval', fontSize: 30 },
                { name: 'TUTORIAL', stateName: 'tutorial', font: 'upheaval', fontSize: 30 },
            ], CENTER_X, CENTER_Y + 110, 40);
        }

        this.navigation.createPolnareff(CENTER_X - 105, CENTER_Y + 113, 38);
      
        // adding instruction text
        let instructions = this.add.text(
            7, CANVAS_HEIGHT - 10,
            "Use arrow keys to move and press ENTER to select",
            { font: "12px monospace", fill: "white", align: "left", stroke: 'black', strokeThickness: 3 },
        );

        instructions.anchor.set(0, 0.5);
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