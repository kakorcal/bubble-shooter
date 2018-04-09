import 'pixi';
import 'p2';
import Phaser from 'phaser';
import Logger from './utils/Logger';
import Bubble from './entities/Bubble';
import Sprite from './entities/Sprite';
import Colors from './utils/Colors';
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
                    
                    // for(let i = BUBBLE_ROW_START; i <= BUBBLE_ROW_END; i++) {
                    //     for(let j = 0; j < COLUMNS; j++) {
                    //         if(i % 2 === 0 && j === COLUMNS - 1) continue;
                    //         let x = i % 2 === 0 ? j * BUBBLE_DIAMETER + BUBBLE_DIAMETER : j * BUBBLE_DIAMETER + BUBBLE_OFFSET;
                    //         let y = i * BUBBLE_DIAMETER + BUBBLE_OFFSET;
                    //         let s = new Sprite(this, x, y);
                    //         s.spritify(new Bubble(this, BUBBLE_DIAMETER, Colors.green));
                    //         this.add.existing(s);
                    //         this.physics.enable(s, Phaser.Physics.ARCADE);
                    //         s.setCollisionDetection();
                    //     }
                    // }

                    for(let i = 0; i < level1.length; i++) {
                        for(let j = 0; j < level1[i].length; j++) {
                            let bubbleType = level1[i][j];
                            if(level1[i][j] === 0) continue;

                            let x = i % 2 === 0 ? j * BUBBLE_DIAMETER + BUBBLE_DIAMETER : j * BUBBLE_DIAMETER + BUBBLE_OFFSET;
                            let y = i * BUBBLE_DIAMETER + BUBBLE_OFFSET;
                            let s = new Sprite(this, x, y);
                            s.spritify(new Bubble(this, BUBBLE_DIAMETER, Colors[bubbleType]));
                            this.add.existing(s);
                            this.physics.enable(s, Phaser.Physics.ARCADE);
                            s.setCollisionDetection();
                        }
                    } 
                }
            }
        });        
    }        
}

export default Game;