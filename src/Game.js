import 'pixi';
import 'p2';
import Phaser from 'phaser';
import Logger from './utils/Logger';
import Bubble from './entities/Bubble';
import Sprite from './entities/Sprite';
import Boundary from './entities/Boundary';
import {Colors} from './utils/Colors';
import {EntityMap} from './utils/EntityMap';
import {CANVAS_WIDTH, CANVAS_HEIGHT, BUBBLE_ROW_START, BUBBLE_ROW_END, COLUMNS, BUBBLE_DIAMETER, BUBBLE_OFFSET, BUBBLE_LAUNCHER_HEIGHT, SCOREBOARD_HEIGHT} from './utils/Constants';
import level1 from './levels/1';
import TileImg from './assets/checkered.png';

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

                    // load image sprites
                    this.load.image('tile', TileImg);
                },
                create: () => {
                    Logger.logState('CREATE');
                    this.physics.startSystem(Phaser.Physics.ARCADE);
                    this.physics.setBoundsToWorld();
                    
                    // todo: add bubble to group to make collision detection easier
                    for(let i = 0; i < level1.length; i++) {
                        for(let j = 0; j < level1[i].length; j++) {
                            let value = level1[i][j];
                            if(value === EntityMap.zero) continue;
                            if (value >= EntityMap.COLOR_START && value <= EntityMap.COLOR_END) {
                                let x = i % 2 === 0 ? j * BUBBLE_DIAMETER + BUBBLE_DIAMETER : j * BUBBLE_DIAMETER + BUBBLE_OFFSET;
                                let y = i * BUBBLE_DIAMETER + BUBBLE_OFFSET;
                                let bubbleGraphic = new Bubble(this, BUBBLE_DIAMETER, Colors[EntityMap.colors[value]]);
                                let bubbleSprite = new Sprite(this, x, y, null);

                                bubbleGraphic.addDot(() => value === EntityMap.gold);
                                bubbleSprite.spritify(bubbleGraphic);
                                bubbleSprite.setScale(0.9, 0.9);
                                this.add.existing(bubbleSprite);
                                this.physics.enable(bubbleSprite, Phaser.Physics.ARCADE);
                                bubbleSprite.setCollisionDetection();
                            } else if (value >= EntityMap.GAME_OBJECT_START && value <= EntityMap.GAME_OBJECT_END) {
                                let x = j * BUBBLE_DIAMETER + BUBBLE_OFFSET;
                                let y = i * BUBBLE_DIAMETER + BUBBLE_OFFSET;
                                let tileSprite = new Sprite(this, x, y, 'tile');
                                tileSprite.setDimensions(BUBBLE_DIAMETER, BUBBLE_DIAMETER);
                                this.add.existing(tileSprite);
                            }
                        }
                    }

                    let topBoundarySprite = new Sprite(this, 0, 0, null);
                    topBoundarySprite.spritify(new Boundary(this,
                        { x1: 0, y1: SCOREBOARD_HEIGHT },
                        { x2: CANVAS_WIDTH, y2: SCOREBOARD_HEIGHT },
                        Colors.blue
                    ));
                    this.physics.enable(topBoundarySprite, Phaser.Physics.ARCADE);
                    let topBoundary = this.add.existing(topBoundarySprite);

                    let bottomBoundarySprite = new Sprite(this, 0, 0, null);
                    bottomBoundarySprite.spritify(new Boundary(this,
                        { x1: 0, y1: CANVAS_HEIGHT - BUBBLE_LAUNCHER_HEIGHT },
                        { x2: CANVAS_WIDTH, y2: CANVAS_HEIGHT - BUBBLE_LAUNCHER_HEIGHT },
                        Colors.blue
                    ));
                    let bottomBoundary = this.add.existing(bottomBoundarySprite);
                    this.physics.enable(bottomBoundarySprite, Phaser.Physics.ARCADE);                    
                    // move boundary by => boundary.x += val;
                }
            }
        });        
    }        
}

export default Game;