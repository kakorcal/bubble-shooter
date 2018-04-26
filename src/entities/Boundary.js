/* 
    For setting boundaries between the bubble launcher and scoreboard
 */
class Boundary extends Phaser.Sprite {
    constructor(game, {x1, y1}, {x2, y2},  {fill, alpha, stroke, strokeWidth}) {
        super(game, 0, 0);
        this.data.graphic = new Phaser.Graphics(game);
        this.data.fill = fill;
        this.data.alpha = alpha;
        this.data.stroke = stroke;
        this.data.strokeWidth = strokeWidth;
        this.data.p1 = {x1, y1};
        this.data.p2 = {x2, y2};

        this.data.graphic.lineStyle(strokeWidth, stroke, alpha);
        this.data.graphic.beginFill(fill);
        this.data.graphic.moveTo(x1, y1);
        this.data.graphic.lineTo(x2, y2);
        this.data.graphic.endFill();

        this.addChild(this.data.graphic);
        this.game.add.existing(this);
    }
}

export default Boundary;