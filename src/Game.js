import 'pixi';
import 'p2';
import Phaser from 'phaser';
import Logger from './utils/Logger';
import Bubble from './entities/Bubble';

class Game extends Phaser.Game {
    constructor(width, height) {        
        super({
            width,
            height,
            renderer: Phaser.AUTO,
            state: {
                preload: () => {
                    Logger.logState('PRELOAD');
                    // this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
                    this.scale.pageAlignHorizontally = true;
                    this.scale.pageAlignVertically = true;
                    this.stage.backgroundColor = '#fff';
                },
                create: () => {
                    Logger.logState('CREATE');
                    for(var i = 0; i < 30; i++) {
                        this.add.existing(new Bubble(this, 30 * i + 1, 30 * i + 1, 30));
                    }
                }
            }
        });        
    }        
}

export default Game;