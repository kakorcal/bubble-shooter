import 'pixi';
import 'p2';
import Phaser from 'phaser';
//import Logger from './utils/Logger';

class Bubble extends Phaser.Graphics {
    constructor(game, diameter, color) {
        super(game);    
        let {fill, alpha, stroke, strokeWidth} = color;    
        this.boundsPadding = 0
        this.lineStyle(strokeWidth, stroke);
        this.beginFill(fill, alpha);
        // position will be determined by sprite
        this.drawCircle(null, null, diameter);
        this.endFill();
    }
}

export default Bubble;