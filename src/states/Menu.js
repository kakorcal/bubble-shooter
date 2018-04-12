import {ROWS, COLUMNS, TILE_SIZE, SPRITE_OFFSET, CANVAS_HEIGHT} from '../utils/Constants';

class Menu extends Phaser.State {
    create() {
        // TODO: check localStorage for stats and add continue option if it exists
        this.createTiles();
        this.createLogo();
        this.createNavigation();

        // events
        // fire this only once
        this.game.keyEnter.onDown.addOnce(this.changeState.bind(this));
        this.game.keyDown.onDown.add(this.changeCurrentNavigation.bind(this));
        this.game.keyUp.onDown.add(this.changeCurrentNavigation.bind(this));  
    }

    createTiles() {
        let tiles = this.add.group();
        tiles.createMultiple(ROWS * COLUMNS, 'tile1', null, true);
        tiles.setAll('width', TILE_SIZE);
        tiles.setAll('height', TILE_SIZE);
        // rows and columns are opposites for this method
        tiles.align(COLUMNS, ROWS, TILE_SIZE, TILE_SIZE);
    }

    createLogo() {
        let logo = this.add.group();
        logo.create(this.world.centerX, this.world.centerY - 10, 'cloud1');
        // x, y, font, text, size, group
        this.add.bitmapText(this.world.centerX - 50, this.world.centerY - 55, 'happy-hell', 'BUBBLE', 80, logo);
        this.add.bitmapText(this.world.centerX + 30, this.world.centerY + 30, 'happy-hell', 'SHOOTER', 80, logo);
        logo.setAll('anchor.x', 0.5);
        logo.setAll('anchor.y', 0.5);
    }

    createNavigation() {
        this.navigation = this.add.group();
        this.navigationIndex = 0;
        
        // adding logo text
        this.newGameText = this.add.bitmapText(this.world.centerX, this.world.centerY + 90, 'upheaval', 'NEW GAME', 30, this.navigation);
        this.newGameText.stateName = 'play';
        // this.continueText = this.add.bitmapText(this.world.centerX, this.world.centerY + 170, 'upheaval', 'CONTINUE', 30, this.navigation);
        this.tutorialText = this.add.bitmapText(this.world.centerX, this.world.centerY + 130, 'upheaval', 'TUTORIAL', 30, this.navigation);
        this.tutorialText.stateName = 'tutorial';

        this.navigation.setAll('anchor.x', 0.5);
        this.navigation.setAll('anchor.y', 0.5);          

        // adding polnareff and it's animation
        this.polnareffPosition = this.navigation.children.map((cur, idx) => {
            let initialPosition = this.world.centerY + 93;
            return idx === 0 ? initialPosition : initialPosition + (38 * idx);
        });
        this.polnareff = this.add.sprite(155, this.polnareffPosition[this.navigationIndex], 'polnareff', 0);
        this.polnareff.scale.set(0.6, 0.6);
        this.polnareff.anchor.set(0.5, 0.5);
        this.polnareff.animations.add('bounce', [0,1], 2, true);
        this.polnareff.animations.play('bounce');        


        // adding instruction text
        let instructions = this.add.text(
            this.world.centerX - 72,
            CANVAS_HEIGHT - 10,
            "Use arrow keys to move and press ENTER to select",
            { font: "12px monospace", fill: "white", align: "left", stroke: 'black', strokeThickness: 3 },
        );

        instructions.anchor.set(0.5, 0.5);
    }

    changeCurrentNavigation(e) {
        if (e.keyCode === Phaser.Keyboard.DOWN && this.navigationIndex < this.polnareffPosition.length - 1) {
            this.polnareff.y = this.polnareffPosition[++this.navigationIndex];
        }

        if (e.keyCode === Phaser.Keyboard.UP && this.navigationIndex > 0) {
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

    // TODO: https://stackoverflow.com/questions/39152877/consider-marking-event-handler-as-passive-to-make-the-page-more-responsive
    // TODO: add shutdown method to remove event listeners
}

export default Menu;