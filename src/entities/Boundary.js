import 'pixi';
import 'p2';
import Phaser from 'phaser';

class Boundary extends Phaser.Graphics {
    constructor(game, {x1, y1}, {x2, y2},  {fill, alpha, stroke, strokeWidth}) {
        super(game);
        this.fill = fill;
        this.alpha = alpha;
        this.stroke = stroke;
        this.strokeWidth = strokeWidth;
        this.p1 = {x1, y1};
        this.p2 = {x2, y2};

        this.lineStyle(strokeWidth, stroke, alpha);
        this.beginFill(fill);
        this.moveTo(x1, y1);
        this.lineTo(x2, y2);
        this.endFill();
    }
}

export default Boundary;