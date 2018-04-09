import 'pixi';
import 'p2';
import Phaser from 'phaser';
//import Logger from './utils/Logger';

class Bubble extends Phaser.Graphics {
    constructor(game, diameter, {fill, alpha, stroke, strokeWidth}) {
        super(game);    
        //this.boundsPadding = 0;
        this.diameter = diameter;
        this.fill = fill;
        this.alpha = alpha;
        this.stroke = stroke;
        this.strokeWidth = strokeWidth;
        this.lineStyle(strokeWidth, stroke);
        this.beginFill(fill, alpha);
        // position will be determined by sprite
        this.drawCircle(null, null, diameter);
        this.endFill();
    }

    addDot(cb) {
        if(cb()) {
            this.lineStyle(1, this.stroke);
            this.beginFill(this.stroke, 1);
            this.drawCircle(null, null, this.diameter / 4);
            this.endFill();
        }
    }
    
    addGradient(cb) {
        if(cb()) {

        }
    }
}

export default Bubble;