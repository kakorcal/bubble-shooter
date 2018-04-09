import 'pixi';
import 'p2';
import Phaser from 'phaser';
import Logger from './utils/Logger';
import Bubble from './entities/Bubble';
import Sprite from './entities/Sprite';
import {Colors, ColorMap} from './utils/Colors';
import {BUBBLE_ROW_START, BUBBLE_ROW_END, COLUMNS, BUBBLE_DIAMETER, BUBBLE_OFFSET} from './utils/Constants';
import level1 from './levels/1';

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
                    this.physics.setBoundsToWorld();
                    
                    for(let i = 0; i < level1.length; i++) {
                        for(let j = 0; j < level1[i].length; j++) {
                            let bubbleType = level1[i][j];
                            if(level1[i][j] === 0) continue;

                            let x = i % 2 === 0 ? j * BUBBLE_DIAMETER + BUBBLE_DIAMETER : j * BUBBLE_DIAMETER + BUBBLE_OFFSET;
                            let y = i * BUBBLE_DIAMETER + BUBBLE_OFFSET;
                            let bubbleGraphic = new Bubble(this, BUBBLE_DIAMETER, Colors[bubbleType]);
                            let bubbleSprite = new Sprite(this, x, y);

                            bubbleGraphic.addDot(() => bubbleType === ColorMap.gold);
                            bubbleSprite.spritify(bubbleGraphic);
                            bubbleSprite.setScale(0.9, 0.9);
                            this.add.existing(bubbleSprite);
                            this.physics.enable(bubbleSprite, Phaser.Physics.ARCADE);
                            bubbleSprite.setCollisionDetection();
                        }
                    } 
                }
            }
        });        
    }        
}

export default Game;