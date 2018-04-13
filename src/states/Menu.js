import {ROWS, COLUMNS, TILE_SIZE, SPRITE_OFFSET, CANVAS_HEIGHT, CENTER_X, CENTER_Y} from '../utils/Constants';

class Menu extends Phaser.State {
    create() {
        // TODO: https://stackoverflow.com/questions/39152877/consider-marking-event-handler-as-passive-to-make-the-page-more-responsive
        // TODO: check localStorage for stats and add continue option if it exists
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
        this.navigation = this.add.group();
        this.navigationIndex = 0;
        
        // adding logo text
        this.newGameText = this.add.bitmapText(CENTER_X, CENTER_Y + 110, 'upheaval', 'NEW GAME', 30, this.navigation);
        this.newGameText.stateName = 'play';
        // this.continueText = this.add.bitmapText(CENTER_X, CENTER_Y + 170, 'upheaval', 'CONTINUE', 30, this.navigation);
        this.tutorialText = this.add.bitmapText(CENTER_X, CENTER_Y + 150, 'upheaval', 'TUTORIAL', 30, this.navigation);
        this.tutorialText.stateName = 'tutorial';

        this.navigation.setAll('anchor.x', 0.5);
        this.navigation.setAll('anchor.y', 0.5);          

        // adding polnareff and it's animation
        this.polnareffPosition = this.navigation.children.map((cur, idx) => {
            let initialPosition = CENTER_Y + 113;
            return idx === 0 ? initialPosition : initialPosition + (38 * idx);
        });
        this.polnareff = this.add.sprite(CENTER_X - 105, this.polnareffPosition[this.navigationIndex], 'polnareff-1', 0);
        this.polnareff.scale.set(0.6, 0.6);
        this.polnareff.anchor.set(0.5, 0.5);
        this.polnareff.animations.add('bounce', [0,1], 2, true);
        this.polnareff.animations.play('bounce');        


        // adding instruction text
        let instructions = this.add.text(
            7, CANVAS_HEIGHT - 10,
            "Use arrow keys to move and press ENTER to select",
            { font: "12px monospace", fill: "white", align: "left", stroke: 'black', strokeThickness: 3 },
        );

        instructions.anchor.set(0, 0.5);
    }

    changeCurrentNavigation(e) {
        if (e.keyCode === this.game.keyDown.keyCode && this.navigationIndex < this.polnareffPosition.length - 1) {
            this.polnareff.y = this.polnareffPosition[++this.navigationIndex];
        }

        if (e.keyCode === this.game.keyUp.keyCode && this.navigationIndex > 0) {
            this.polnareff.y = this.polnareffPosition[--this.navigationIndex];
        }
    }

    changeState(e) {        
        this.navigation.children[this.navigationIndex].alpha = 0;
        
        let navigationTween = this.add.tween(this.navigation.children[this.navigationIndex]).
            to({ alpha: 1 }, 100, "Linear", true, 0, 3);
        
        navigationTween.onComplete.add(() => {
            this.state.start(this.navigation.children[this.navigationIndex].stateName);            
        }, this);
    }

    shutdown() {
        this.game.keyEnter.onDown.remove(this.changeState, this);
        this.game.keyDown.onDown.remove(this.changeCurrentNavigation, this);
        this.game.keyUp.onDown.remove(this.changeCurrentNavigation, this);  
    }
}

export default Menu;