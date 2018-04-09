import 'pixi';
import 'p2';
import Phaser from 'phaser';

class Sprite extends Phaser.Sprite {
    constructor(game, x, y) {
        super(...arguments);
        this.anchor.setTo(0.5, 0.5);        
    }

    // http://www.html5gamedevs.com/topic/6476-collision-with-gameaddgraphics-and-a-sprite/
    // need to spritify to enable collision detections
    spritify(graphic) {
        this.addChild(graphic);
    }

    setCollisionDetection() {
        this.body.collideWorldBounds = true;
        this.body.bounce.set(0.5);
    }
}

export default Sprite;