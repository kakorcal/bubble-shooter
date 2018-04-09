import 'pixi';
import 'p2';
import Phaser from 'phaser';
import Logger from './utils/Logger';
import Bubble from './entities/Bubble';
import Colors from './utils/Colors';

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
                    this.physics.startSystem(Phaser.Physics.ARCADE);
                    
                    for(var i = 0; i < 20; i++) {
                        this.add.existing(new Bubble(this, 20 * i + 1, 20 * i + 1, 24, Colors.red));
                    }
                }
            }
        });        
    }        
}

export default Game;