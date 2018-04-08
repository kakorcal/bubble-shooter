import 'pixi';
import 'p2';
import Phaser from 'phaser';
//import Logger from './utils/Logger';

class Bubble extends Phaser.Graphics {
    constructor(game, x, y, d) {
        super(game);        
        this.beginFill(0xff0000);
        this.drawCircle(x, y, d);
        this.endFill();
    }
}

export default Bubble;