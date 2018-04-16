import Player from '../entities/Player';
import {CENTER_X, CENTER_Y} from '../utils/Constants';

// images and fonts will be served from express static since there are no 
// webpack loaders available for the fnt extension
const cloud1 = './assets/images/cloud-md-1.png';
const tile1 = './assets/images/tile-sm-1.png';
const tile2 = './assets/images/tile-sm-2.png';
const arrow1 = './assets/images/arrow-sm-1.png';
const block1 = './assets/images/block-md-1.png';
const blocksVertical1 = './assets/images/blocks-vertical-md-1.png';
const blocksVerticalHalf1 = './assets/images/blocks-vertical-half-md-1.png';
const blocksHorizontal1 = './assets/images/blocks-horizontal-md-1.png';
const blockContour1 = './assets/images/block-contour-md-1.png';
const polnareff1 = './assets/images/polnareff-sp-1.png';
const speechBubble1 = './assets/images/speech-bubble-sm-1.png';
const launcherPlatform1 = './assets/images/launcher-platform-md-1.png';
const launcherWheel1 = './assets/images/launcher-wheel-md-1.png';
const happyHellPng = './assets/fonts/happy-hell/font.png';
const happyHellFnt = './assets/fonts/happy-hell/font.fnt';
const upheavalPng = './assets/fonts/upheaval/font.png';
const upheavalFnt = './assets/fonts/upheaval/font.fnt';

// phaser state has direct references to certain props so we don't have
// invoke methods using this.game... 
class Load extends Phaser.State {
    preload() {
        // Preload text
        let loadTimer = this.time.create(true);
        loadTimer.add(Phaser.Timer.SECOND * 1.5, () => {
            document.getElementsByTagName('canvas')[0].style.opacity = 1;
            let loadingText = this.add.text(
                CENTER_X, CENTER_Y, "LOADING...",
                { font: "40px monospace", fill: "yellow", align: "center", strokeThickness: 5 }
            );
            // Set relative to center, not top left
            loadingText.anchor.set(0.5);
            loadingText.alpha = 0;

            // Yoyo the text
            let loadingTween = this.add.tween(loadingText).
                to({ alpha: 1 }, 500, "Linear", true, 0, -1);

            loadingTween.yoyo(true, 300); 
        }, this);
        loadTimer.start();

        // load image sprites
        this.load.image('tile-1', tile1);
        this.load.image('tile-2', tile2);
        this.load.image('cloud-1', cloud1);
        this.load.image('arrow-1', arrow1);
        this.load.image('block-1', block1);
        this.load.image('blocks-vertical-1', blocksVertical1);
        this.load.image('blocks-vertical-half-1', blocksVerticalHalf1);
        this.load.image('blocks-horizontal-1', blocksHorizontal1);
        this.load.image('launcher-platform-1', launcherPlatform1);
        this.load.image('launcher-wheel-1', launcherWheel1);
        this.load.image('speech-bubble-1', speechBubble1);

        // polnareff spritesheet
        // key, url, frameWidth, frameHeight, frameMax, margin, spacing
        this.load.spritesheet('polnareff-1', polnareff1, 60, 60, 2, 0, 0);

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
        this.input.keyboard.addKeyCapture([
            Phaser.Keyboard.LEFT, 
            Phaser.Keyboard.RIGHT, 
            Phaser.Keyboard.UP, 
            Phaser.Keyboard.DOWN, 
            Phaser.Keyboard.SPACEBAR,
            Phaser.Keyboard.ENTER
        ]);

        // load continuing user if they exist
        let player = Player.getExistingPlayer();
        if(player) {
            this.game.player = player;
        }else {
            this.game.player = null;
        }
    }

    create() {
        document.getElementsByTagName('canvas')[0].style.opacity = 1;
        this.state.start('menu');

        // enable physics
        this.physics.startSystem(Phaser.Physics.ARCADE);
    }
}

export default Load;