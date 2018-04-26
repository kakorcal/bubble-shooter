import { EntityMap } from '../utils/EntityMap';
import { Colors } from '../utils/Colors';

/* 
    Sprite class for bubbles.
    If sprite key does not exist, it will draw a Phaser Graphics
    and append it to an empty sprite to enable physics
*/
class Bubble extends Phaser.Sprite {
    constructor(game, diameter, x, y, colorCode, group, key) {
        super(game, x, y, key);
        let color = EntityMap.colors[colorCode];
        let { fill, alpha, stroke, strokeWidth } = Colors[color];

        this.data.graphic = new Phaser.Graphics(game);
        this.data.diameter = diameter;
        this.data.fill = fill;
        this.data.alpha = alpha;
        this.data.stroke = stroke;
        this.data.strokeWidth = strokeWidth;
        this.data.colorCode = colorCode;
        this.anchor.set(0.5, 0.5);
        this.scale.set(0.9, 0.9);
        
        if(!key) {
            this.draw();
            this.addChild(this.data.graphic);
        }
        
        if(group) {
            group.add(this);
        }else {
            this.game.add.existing(this);
        }
    }

    draw() {
        this.data.graphic.lineStyle(this.data.strokeWidth, this.data.stroke);
        this.data.graphic.beginFill(this.data.fill, this.data.alpha);
        // position will be determined by sprite
        this.data.graphic.drawCircle(null, null, this.data.diameter);
        this.data.graphic.endFill();
        this.addDot(() => this.data.colorCode === EntityMap.gold);
    }

    addDot(cb) {
        if(cb()) {
            this.data.graphic.lineStyle(1, this.data.stroke);
            this.data.graphic.beginFill(this.data.stroke, 1);
            this.data.graphic.drawCircle(null, null, this.data.diameter / 4);
            this.data.graphic.endFill();
        }
    }
}

export default Bubble;