import { EntityMap } from '../utils/EntityMap';
import { Colors } from '../utils/Colors';

// TODO: attach props to .data to prevent overwrite
class Bubble extends Phaser.Sprite {
    constructor(game, diameter, x, y, colorCode, group) {
        super(game, x, y);
        let color = EntityMap.colors[colorCode];
        let { fill, alpha, stroke, strokeWidth } = Colors[color];

        this.shape = new Phaser.Graphics(game);
        this.diameter = diameter;
        this.fill = fill;
        this.alpha = alpha;
        this.stroke = stroke;
        this.strokeWidth = strokeWidth;
        this.colorCode = colorCode;
        
        this.draw();

        this.addChild(this.shape);
        this.anchor.set(0.5, 0.5);
        this.scale.set(0.9, 0.9);

        if(group) {
            group.add(this);
        }else {
            this.game.add.existing(this);
        }
    }

    draw() {
        this.shape.lineStyle(this.strokeWidth, this.stroke);
        this.shape.beginFill(this.fill, this.alpha);
        // position will be determined by sprite
        this.shape.drawCircle(null, null, this.diameter);
        this.shape.endFill();
        this.addDot(() => this.colorCode === EntityMap.gold);
    }

    addDot(cb) {
        if(cb()) {
            this.shape.lineStyle(1, this.stroke);
            this.shape.beginFill(this.stroke, 1);
            this.shape.drawCircle(null, null, this.diameter / 4);
            this.shape.endFill();
        }
    }
    
    // TODO
    addGradient(cb) {
        if(cb()) {

        }
    }
}

export default Bubble;