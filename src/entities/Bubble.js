import 'pixi';
import 'p2';
import Phaser from 'phaser';
//import Logger from './utils/Logger';

class Bubble extends Phaser.Graphics {
    constructor(game, x, y, d, color) {
        super(game);    
        let {fill, alpha, stroke, strokeWidth} = color;    
        this.boundsPadding = 0
        this.lineStyle(strokeWidth, stroke);
        this.beginFill(fill, alpha);
        this.drawCircle(x, y, d);
        this.endFill();

        // http://www.html5gamedevs.com/topic/6476-collision-with-gameaddgraphics-and-a-sprite/
        // need to spritify to enable collision detections

    }
}

export default Bubble;