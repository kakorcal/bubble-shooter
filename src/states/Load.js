import Player from '../entities/Player';
import {CENTER_X, CENTER_Y} from '../utils/Constants';

// images and fonts will be served from express static since there are no 
// webpack loaders available for the fnt extension
const image = './assets/images/';
const font = './assets/fonts/';
const wav = './assets/audio/wav/';
const mp3 = './assets/audio/mp3/';
const ogg = './assets/audio/ogg/';

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
        this.load.image('tile-1', image + 'tile-sm-1.png');
        this.load.image('tile-2', image + 'tile-sm-2.png');
        this.load.image('cloud-1', image + 'cloud-md-1.png');
        this.load.image('arrow-1', image + 'arrow-sm-1.png');
        this.load.image('block-1', image + 'block-md-1.png');
        this.load.image('blocks-vertical-1', image + 'blocks-vertical-md-1.png');
        this.load.image('blocks-vertical-half-1', image + 'blocks-vertical-half-md-1.png');
        this.load.image('blocks-horizontal-1', image + 'blocks-horizontal-md-1.png');
        this.load.image('blocks-horizontal-half-1', image + 'blocks-horizontal-half-md-1.png');
        this.load.image('launcher-platform-1', image + 'launcher-platform-md-1.png');
        this.load.image('launcher-wheel-1', image + 'launcher-wheel-md-1.png');
        this.load.image('speech-bubble-1', image + 'speech-bubble-sm-1.png');
        this.load.image('rainbow-1', image + 'rainbow-sm-1.png');

        // polnareff spritesheet
        // key, url, frameWidth, frameHeight, frameMax, margin, spacing
        this.load.spritesheet('polnareff-1', image + 'polnareff-sp-1.png', 60, 60, 2, 0, 0);

        // load fonts
        this.load.bitmapFont('happy-hell', font + 'happy-hell/font.png', font + 'happy-hell/font.fnt');
        this.load.bitmapFont('upheaval', font + 'upheaval/font.png', font + 'upheaval/font.fnt');

        // load audio (wav, mp3, ogg)
        this.load.audio('theme-0', 
            [mp3 + 'theme-0.mp3', ogg + 'theme-0.ogg']);
        this.load.audio('theme-1',
            [wav + 'theme-1.wav', mp3 + 'theme-1.mp3', ogg + 'theme-1.ogg']);
        this.load.audio('theme-2',
            [mp3 + 'theme-2.mp3', ogg + 'theme-2.ogg']);
        this.load.audio('game-win',
            [wav + 'game-win.wav', mp3 + 'game-win.mp3', ogg + 'game-win.ogg']);
        this.load.audio('game-lose',
            [wav + 'game-lose.wav', mp3 + 'game-lose.mp3', ogg + 'game-lose.ogg']);
        this.load.audio('launch-bubble',
            [wav + 'launch-bubble.wav', mp3 + 'launch-bubble.mp3', ogg + 'launch-bubble.ogg']);
        this.load.audio('target-bubble',
            [wav + 'target-bubble.wav', mp3 + 'target-bubble.mp3', ogg + 'target-bubble.ogg']);
        this.load.audio('non-target-bubble',
            [wav + 'non-target-bubble.wav', mp3 + 'non-target-bubble.mp3', ogg + 'non-target-bubble.ogg']);
        this.load.audio('select-navigation',
            [wav + 'select-navigation.wav', mp3 + 'select-navigation.mp3', ogg + 'select-navigation.ogg']);
        this.load.audio('switch-navigation',
            [wav + 'switch-navigation.wav', mp3 + 'switch-navigation.mp3', ogg + 'switch-navigation.ogg']);

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
    }

    create() {
        document.getElementsByTagName('canvas')[0].style.opacity = 1;
        // adding data object to prevent overwriting phaser props
        this.game.data = {};

        // namespace audio
        this.game.data.audio = {};
        this.game.data.audio.theme0 = this.game.add.audio('theme-0');
        this.game.data.audio.theme1 = this.game.add.audio('theme-1');
        this.game.data.audio.theme2 = this.game.add.audio('theme-2');
        this.game.data.audio.gameWin = this.game.add.audio('game-win');
        this.game.data.audio.gameLose = this.game.add.audio('game-lose');
        this.game.data.audio.launchBubble = this.game.add.audio('launch-bubble');
        this.game.data.audio.targetBubble = this.game.add.audio('target-bubble');
        this.game.data.audio.nonTargetBubble = this.game.add.audio('non-target-bubble');
        this.game.data.audio.selectNavigation = this.game.add.audio('select-navigation');
        this.game.data.audio.switchNavigation = this.game.add.audio('switch-navigation');

        // load continuing user if they exist
        let player = Player.getExistingPlayer();
        if (player) {
            let { name, credits, totalScore, highScore, currentRound, gameCompleted } = player;
            this.game.data.player = new Player(name, credits, totalScore, highScore, currentRound, gameCompleted);
        } else {
            this.game.data.player = null;
        }

        // enable physics
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.state.start('menu');
        this.game.data.audio.theme0.play(null, 0, 1, true);

        console.log('LAUNCHING GAME ', this.game);
    }
}

export default Load;