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

// images and fonts will be served from express static since there are no webpack loaders available for the fnt extension
const tile1 = './assets/images/tile-sm-1.png';
const arrow1 = './assets/images/arrow-sm-1.png';
const polnareffSS = './assets/images/polnareff-sp-1.png';
const bigBottomCartoonPng = './assets/fonts/big-bottom-cartoon/font.png';
const bigBottomCartoonFnt = './assets/fonts/big-bottom-cartoon/font.fnt';

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
                    this.load.image('Tile1', tile1);
                    this.load.image('Arrow1', arrow1);
                    // polnareff spritesheet
                    // key, url, frameWidth, frameHeight, frameMax, margin, spacing
                    this.load.spritesheet('Polnareff', polnareffSS, 60, 60, 2, 0, 0);
                    // <?xml version="1.0" encoding="UTF-8"?>

                    this.load.bitmapFont('Big-Bottom-Cartoon', bigBottomCartoonPng, bigBottomCartoonFnt);
                },
                create: () => {
                    /* 
                        * @param {number} x - X coordinate to display the BitmapText object at.
    * @param {number} y - Y coordinate to display the BitmapText object at.
    * @param {string} font - The key of the BitmapText as stored in Phaser.Cache.
    * @param {string} [text=''] - The text that will be rendered. This can also be set later via BitmapText.text.
    * @param {number} [size=32] - The size the font will be rendered at in pixels.
                    */
                    var text1 = this.add.bitmapText(this.world.centerX, this.world.centerY, 'Big-Bottom-Cartoon', 'Bubble Shooter', 32);

                //     Logger.logState('CREATE');
                //         // this.state.add('load', Load);
                //         // //this.state.add('menu', Menu);
                //         // this.state.add('play', Play);
                //     this.physics.startSystem(Phaser.Physics.ARCADE);
                //     this.physics.setBoundsToWorld();
                //     this.cursors = this.input.keyboard.createCursorKeys();

                //     for (let i = 0; i < level1.length; i++) {
                //         for (let j = 0; j < level1[i].length; j++) {
                //             let value = level1[i][j];
                //             let x = j * BUBBLE_DIAMETER + BUBBLE_OFFSET;
                //             let y = i * BUBBLE_DIAMETER + BUBBLE_OFFSET;
                //             let tile1 = new Sprite(this, x, y, 'Tile1');
                //             tile1.setDimensions(BUBBLE_DIAMETER, BUBBLE_DIAMETER);
                //             this.add.existing(tile1);
                //         }
                //     }

                //     let d1 = BUBBLE_DIAMETER + (CANVAS_HEIGHT - BUBBLE_LAUNCHER_HEIGHT);
                //     let polnareffSprite = new Sprite(this, 140, d1, 'Polnareff', 0);
                //     polnareffSprite.animations.add('bounce', [0,1], 2, true);
                //     polnareffSprite.animations.play('bounce');
                //     this.add.existing(polnareffSprite);

                //     let d2 = (CANVAS_HEIGHT - BUBBLE_LAUNCHER_HEIGHT + 15);
                //     let launcherSprite = new Sprite(this, this.world.centerX, d2, 'Arrow1');
                //     launcherSprite.setAnchor(0.5, 0.95);
                //     let launcher = this.add.existing(launcherSprite);

                //     this.launcher = launcher;

                //     // let polnareff2 = new Sprite(this, xx - 80, d, 'Polnareff2');
                //     // this.add.existing(polnareff2);


                //     // todo: add bubble to group to make collision detection easier
                //     for(let i = 0; i < level1.length; i++) {
                //         for(let j = 0; j < level1[i].length; j++) {
                //             let value = level1[i][j];

                //             if(value === EntityMap.zero) continue;
                //             if (value >= EntityMap.COLOR_START && value <= EntityMap.COLOR_END) {
                //                 let x = i % 2 === 0 ? j * BUBBLE_DIAMETER + BUBBLE_DIAMETER : j * BUBBLE_DIAMETER + BUBBLE_OFFSET;
                //                 let y = i * BUBBLE_DIAMETER + BUBBLE_OFFSET;
                //                 let bubbleGraphic = new Bubble(this, BUBBLE_DIAMETER, Colors[EntityMap.colors[value]]);
                //                 let bubbleSprite = new Sprite(this, x, y, null);

                //                 bubbleGraphic.addDot(() => value === EntityMap.gold);
                //                 bubbleSprite.spritify(bubbleGraphic);
                //                 bubbleSprite.setScale(0.9, 0.9);
                //                 this.add.existing(bubbleSprite);
                //                 this.physics.enable(bubbleSprite, Phaser.Physics.ARCADE);
                //                 bubbleSprite.setCollisionDetection();

                //             } 
                //             // else if (value >= EntityMap.GAME_OBJECT_START && value <= EntityMap.GAME_OBJECT_END) {
                //             //     // let x = j * BUBBLE_DIAMETER + BUBBLE_OFFSET;
                //             //     // let y = i * BUBBLE_DIAMETER + BUBBLE_OFFSET;
                //             //     // let tileSprite = new Sprite(this, x, y, 'tile');
                //             //     // tileSprite.setDimensions(BUBBLE_DIAMETER, BUBBLE_DIAMETER);
                //             //     // this.add.existing(tileSprite);
                //             // }
                //         }
                //     }

                //     let topBoundarySprite = new Sprite(this, 0, 0, null);
                //     topBoundarySprite.spritify(new Boundary(this,
                //         { x1: 0, y1: SCOREBOARD_HEIGHT },
                //         { x2: CANVAS_WIDTH, y2: SCOREBOARD_HEIGHT },
                //         Colors.skyBlue
                //     ));
                //     this.physics.enable(topBoundarySprite, Phaser.Physics.ARCADE);
                //     let topBoundary = this.add.existing(topBoundarySprite);

                //     let bottomBoundarySprite = new Sprite(this, 0, 0, null);
                //     bottomBoundarySprite.spritify(new Boundary(this,
                //         { x1: 0, y1: CANVAS_HEIGHT - BUBBLE_LAUNCHER_HEIGHT },
                //         { x2: CANVAS_WIDTH, y2: CANVAS_HEIGHT - BUBBLE_LAUNCHER_HEIGHT },
                //         Colors.skyBlue
                //     ));
                //     let bottomBoundary = this.add.existing(bottomBoundarySprite);
                //     this.physics.enable(bottomBoundarySprite, Phaser.Physics.ARCADE);                    
                //     // move boundary by => boundary.x += val;
                },
                // update: () => {
                //     if (this.cursors.left.isDown) {
                //         this.launcher.angle -= 1.4;
                //     }else if (this.cursors.right.isDown) {
                //         this.launcher.angle += 1.4;
                //     }
                // }
            }
        });        
    }        
}

export default Game;