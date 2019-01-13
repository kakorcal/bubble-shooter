import Player from '../entities/Player';
import { CENTER_X, CENTER_Y } from '../utils/Constants';

// images and fonts will be served from express static since there are no
// webpack loaders available for the fnt extension
const image = DEVELOPMENT ? './static/assets/images/' : './assets/images/';
const font = DEVELOPMENT ? './static/assets/fonts/' : './assets/fonts/';
// const wav = './static/assets/audio/wav/';
const mp3 = DEVELOPMENT ? './static/assets/audio/mp3/' : './assets/audio/mp3/';
const ogg = DEVELOPMENT ? './static/assets/audio/ogg/' : './assets/audio/ogg/';

/*
    Loads all sprite, audio, and fonts. Enable arcade physics
 */
class Load extends Phaser.State {
  preload() {
    // Preload text - show this if it takes a while for assets to load
    let loadTimer = this.time.create(true);
    loadTimer.add(
      Phaser.Timer.SECOND * 1.5,
      () => {
        document.getElementsByTagName('canvas')[0].style.opacity = 1;
        document.getElementById('github').style.opacity = 1;
        document.getElementById('sound').style.opacity = 1;

        let loadingText = this.add.text(CENTER_X, CENTER_Y, 'LOADING...', {
          font: '40px monospace',
          fill: 'yellow',
          align: 'center',
          strokeThickness: 5
        });

        loadingText.anchor.set(0.5);
        loadingText.alpha = 0;

        let loadingTween = this.add.tween(loadingText).to({ alpha: 1 }, 500, 'Linear', true, 0, -1);

        loadingTween.yoyo(true, 300);
      },
      this
    );
    loadTimer.start();

    // load image sprites
    this.load.image('tile-1', image + 'tile-sm-1.png');
    this.load.image('tile-2', image + 'tile-sm-2.png');
    this.load.image('tile-3', image + 'tile-sm-3.png');
    this.load.image('cloud-1', image + 'cloud-md-1.png');
    this.load.image('arrow-1', image + 'arrow-sm-1.png');
    this.load.image('block-1', image + 'block-sm-1.png');
    this.load.image('launcher-platform-1', image + 'launcher-platform-md-1.png');
    this.load.image('launcher-wheel-1', image + 'launcher-wheel-sm-1.png');
    this.load.image('speech-bubble-1', image + 'speech-bubble-sm-1.png');
    this.load.image('rainbow-1', image + 'rainbow-sm-1.png');

    // polnareff spritesheet
    // key, url, frameWidth, frameHeight, frameMax, margin, spacing
    this.load.spritesheet('polnareff-1', image + 'polnareff-sp-1.png', 60, 60, 2, 0, 0);

    // load fonts
    this.load.bitmapFont('happy-hell', font + 'happy-hell/medium/font.png', font + 'happy-hell/medium/font.fnt');
    this.load.bitmapFont('upheaval', font + 'upheaval/font.png', font + 'upheaval/font.fnt');

    // load audio (wav, mp3, ogg)
    this.load.audio('theme-0', [mp3 + 'theme-0.mp3', ogg + 'theme-0.ogg']);
    this.load.audio('theme-1', [mp3 + 'theme-1.mp3', ogg + 'theme-1.ogg']);
    this.load.audio('theme-2', [mp3 + 'theme-2.mp3', ogg + 'theme-2.ogg']);
    this.load.audio('game-win', [mp3 + 'game-win.mp3', ogg + 'game-win.ogg']);
    this.load.audio('game-lose', [mp3 + 'game-lose.mp3', ogg + 'game-lose.ogg']);
    this.load.audio('launch-bubble', [mp3 + 'launch-bubble.mp3', ogg + 'launch-bubble.ogg']);
    this.load.audio('target-bubble', [mp3 + 'target-bubble.mp3', ogg + 'target-bubble.ogg']);
    this.load.audio('non-target-bubble', [mp3 + 'non-target-bubble.mp3', ogg + 'non-target-bubble.ogg']);
    this.load.audio('select-navigation', [mp3 + 'select-navigation.mp3', ogg + 'select-navigation.ogg']);
    this.load.audio('switch-navigation', [
      ogg + 'switch-navigation.ogg',
      // fails to decode for firefox - (Error: The buffer passed to decodeAudioData contains invalid content which cannot be decoded successfully.)
      mp3 + 'switch-navigation.mp3'
    ]);

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
    document.getElementById('github').style.opacity = 1;
    document.getElementById('sound').style.opacity = 1;

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
    // change start
    this.state.start('menu');
    // initialize sounds
    this.game.data.audio.theme0.play(null, 0, 1, true);
    this.toggleSound();

    console.log('LAUNCHING GAME ', this.game);
  }

  // https://github.com/photonstorm/phaser/issues/2913
  toggleSound() {
    let soundElement = document.getElementById('sound');

    this.game.data.audio.theme0.onPlay.addOnce(() => {
      console.log('STARTING THEME 0');
      if (this.game.sound.context.state === 'suspended') {
        this.game.sound.context.suspend().then(() => {
          this.game.sound.mute = true;
          soundElement.style.backgroundImage = "url('" + image + "volume-mute.svg')";
        });
      } else {
        this.game.sound.context.resume().then(() => {
          this.game.sound.mute = false;
          soundElement.style.backgroundImage = "url('" + image + "volume-medium.svg')";
        });
      }
    });

    soundElement.addEventListener('click', () => {
      console.log('toggle sound');
      this.game.sound.context.resume().then(() => {
        if (this.game.sound.mute) {
          this.game.sound.mute = false;
          soundElement.style.backgroundImage = "url('" + image + "volume-medium.svg')";
        } else {
          this.game.sound.mute = true;
          soundElement.style.backgroundImage = "url('" + image + "volume-mute.svg')";
        }
      });
    });
  }
}

export default Load;
