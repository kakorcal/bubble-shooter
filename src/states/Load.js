// images and fonts will be served from express static since there are no 
// webpack loaders available for the fnt extension
const cloud1 = './assets/images/cloud-md-1.png';
const tile1 = './assets/images/tile-sm-1.png';
const tile2 = './assets/images/tile-sm-1.png';
const arrow1 = './assets/images/arrow-sm-1.png';
const polnareff1 = './assets/images/polnareff-sp-1.png';
const happyHellPng = './assets/fonts/happy-hell/font.png';
const happyHellFnt = './assets/fonts/happy-hell/font.fnt';
const upheavalPng = './assets/fonts/upheaval/font.png';
const upheavalFnt = './assets/fonts/upheaval/font.fnt';

// phaser state has direct references to certain props so we don't have
// invoke methods using this.game... 
class Load extends Phaser.State {
    preload() {
        // Preload text
        let loadingText = this.add.text(
            this.world.centerX,
            this.world.centerY,
            "LOADING...",
            { font: "40px monospace", fill: "yellow", align: "center", strokeThickness: 5 }
        );
        // Set relative to center, not top left
        loadingText.anchor.set(0.5);
        loadingText.alpha = 0;

        // Yoyo the text
        let loadingTween = this.add.tween(loadingText).
            to({ alpha: 1 }, 500, "Linear", true, 0, -1);

        loadingTween.yoyo(true, 300);

        // load image sprites
        this.load.image('tile1', tile1);
        this.load.image('tile2', tile2);
        this.load.image('cloud1', cloud1);
        this.load.image('arrow1', arrow1);

        // polnareff spritesheet
        // key, url, frameWidth, frameHeight, frameMax, margin, spacing
        this.load.spritesheet('polnareff', polnareff1, 60, 60, 2, 0, 0);

        // load fonts
        this.load.bitmapFont('happy-hell', happyHellPng, happyHellFnt);
        this.load.bitmapFont('upheaval', upheavalPng, upheavalFnt);

        // register keys. registering through the game object so each state can have access
        this.game.keyLeft = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        this.game.keyRight = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        this.game.keyUp = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
        this.game.keyDown = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
        this.game.keySpace = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        this.game.keyEnter = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

        // prevent key event propagating up to the browser
        this.game.input.keyboard.addKeyCapture([
            Phaser.Keyboard.LEFT, 
            Phaser.Keyboard.RIGHT, 
            Phaser.Keyboard.UP, 
            Phaser.Keyboard.DOWN, 
            Phaser.Keyboard.SPACEBAR,
            Phaser.Keyboard.ENTER
        ]);
    }

    create() {
        this.state.start('menu');

        // enable input keys. namespace cursors prop so others
        this.cursors = this.input.keyboard.createCursorKeys();
    }
}

export default Load;