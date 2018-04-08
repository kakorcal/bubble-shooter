import 'pixi';
import 'p2';
import Phaser from 'phaser';
import Logger from './utils/Logger';

class Game extends Phaser.Game {
    constructor(width, height) {        
        super({
            width,
            height,
            renderer: Phaser.AUTO,
            state: {
                preload: () => this.preload(),
                create: () => this.create()
            }
        });        
    }

    preload() {
        Logger.logState('PRELOAD');
        // this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.stage.backgroundColor = '#eee';
    }

    create() {
        // this.state.add('load', Load);
        // this.state.add('menu', Menu);
        // this.state.add('play', Play);
        // this.state.add('gameover', GameOver);
        // this.state.add('victory', Victory);
        // this.state.start('load');
    }
}

export default Game;