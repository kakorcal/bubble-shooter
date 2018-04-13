import { CANVAS_WIDTH, CANVAS_HEIGHT, ROWS, COLUMNS, TILE_SIZE, SPRITE_OFFSET, BUBBLE_LAUNCHER_HEIGHT, SCOREBOARD_HEIGHT } from '../utils/Constants';
import GraphicSprite from '../graphics/GraphicSprite';
import level1 from '../levels/1';
import Bubble from '../graphics/Bubble';
import Boundary from '../graphics/Boundary';
import { Colors } from '../utils/Colors';
import { EntityMap } from '../utils/EntityMap';


class Play extends Phaser.State {
    create() {
        this.createTiles();
        this.createStage();
        this.createBoundaries();
        this.createScoreboard();
        this.createLauncher();
        // this.startTimer();
    }

    createTiles() {
        let tiles = this.add.group();
        tiles.createMultiple(ROWS * COLUMNS, 'tile2', null, true);
        tiles.setAll('width', TILE_SIZE);
        tiles.setAll('height', TILE_SIZE);
        // rows and columns are opposites for this method
        tiles.align(COLUMNS, ROWS, TILE_SIZE, TILE_SIZE);
    }

    createBoundaries() {
        let topBoundarySprite = new GraphicSprite(this.game, 0, 0, null);
        topBoundarySprite.spritify(new Boundary(this.game,
            { x1: 0, y1: SCOREBOARD_HEIGHT },
            { x2: CANVAS_WIDTH, y2: SCOREBOARD_HEIGHT },
            Colors.skyBlue
        ));
        this.physics.enable(topBoundarySprite, Phaser.Physics.ARCADE);
        this.topBoundary = this.add.existing(topBoundarySprite);

        let bottomBoundarySprite = new GraphicSprite(this.game, 0, 0, null);
        bottomBoundarySprite.spritify(new Boundary(this.game,
            { x1: 0, y1: CANVAS_HEIGHT - BUBBLE_LAUNCHER_HEIGHT },
            { x2: CANVAS_WIDTH, y2: CANVAS_HEIGHT - BUBBLE_LAUNCHER_HEIGHT },
            Colors.skyBlue
        ));
        this.bottomBoundary = this.add.existing(bottomBoundarySprite);
        this.physics.enable(bottomBoundarySprite, Phaser.Physics.ARCADE);                    
        // move boundary by => boundary.x += val;
    }

    createScoreboard() {
        this.score = 0;
        this.scoreText = this.add.bitmapText(5, 11, 'upheaval', 'SCORE 000000000', 25);
        this.scoreText.anchor.set(0, 0.5);

        this.round = 1;
        this.roundText = this.add.bitmapText(CANVAS_WIDTH - 130, 11, 'upheaval', 'ROUND 001', 25);
        this.roundText.anchor.set(0, 0.5);
    }

    createLauncher() {
        // polnareff
        this.polnareff = this.add.sprite(this.world.centerX - 75, CANVAS_HEIGHT - TILE_SIZE, 'polnareff', 0);
        this.polnareff.scale.set(0.9, 0.9);
        this.polnareff.anchor.set(0.5, 0.5);
        this.polnareff.animations.add('bounce', [0, 1], 2, true);
        this.polnareff.animations.play('bounce'); 
        
        // launcher pieces
        this.arrow = this.add.sprite(this.world.centerX, CANVAS_HEIGHT - BUBBLE_LAUNCHER_HEIGHT + SPRITE_OFFSET, 'arrow1');
        this.arrow.anchor.set(0.5, 0.95);

        // wheel
        this.launcherWheel = this.add.sprite(this.world.centerX - 14, CANVAS_HEIGHT - 30, 'launcher-wheel1');
        this.launcherWheel.anchor.set(0.5, 0.5);
        this.launcherWheel.width = 57;
        this.launcherWheel.height = 57;

        // platform
        this.launcherPlatform = this.add.sprite(this.world.centerX, CANVAS_HEIGHT, 'launcher-platform1');
        this.launcherPlatform.anchor.set(0.26, 1);
        this.launcherPlatform.width = 90;
        this.launcherPlatform.height = 62;
        
        // next text
        this.nextText = this.add.bitmapText(this.world.centerX + 115, CANVAS_HEIGHT - BUBBLE_LAUNCHER_HEIGHT + 20, 'upheaval', 'NEXT', 25);
        this.nextText.anchor.set(0.5, 0.5);
    }

    createStage() {
        this.bubbles = this.add.group();
        this.blocks = this.add.group();

        for(let i = 0; i < level1.length; i++) {
            for(let j = 0; j < level1[i].length; j++) {
                let value = level1[i][j];
                if(value === EntityMap.zero) continue;

                if(value >= EntityMap.COLOR_START && value <= EntityMap.COLOR_END) {
                    let x = i % 2 === 0 ? j * TILE_SIZE + TILE_SIZE : j * TILE_SIZE + SPRITE_OFFSET;
                    let y = i * TILE_SIZE + SPRITE_OFFSET;
                    let bubbleGraphic = new Bubble(this.game, TILE_SIZE, Colors[EntityMap.colors[value]]);
                    let bubbleSprite = new GraphicSprite(this.game, x, y, null);
                    bubbleGraphic.addDot(() => value === EntityMap.gold);
                    bubbleSprite.spritify(bubbleGraphic);
                    bubbleSprite.setScale(0.9, 0.9);
                    this.bubbles.add(bubbleSprite);
                    // this.physics.enable(bubbleSprite, Phaser.Physics.ARCADE);
                    // bubbleSprite.setCollisionDetection();
                }

                if (value >= EntityMap.GAME_OBJECT_START && value <= EntityMap.GAME_OBJECT_END) {
                    let x = j * TILE_SIZE;
                    let y = i * TILE_SIZE;
                    let block = this.add.sprite(x, y, 'block1', this.blocks);
                    block.width = TILE_SIZE;
                    block.height = TILE_SIZE;
                }
            }
        }

        this.blocks.setAll('anchor.x', 0.5);
        this.blocks.setAll('anchor.y', 0.5);
    }

    update() {
        // handling cursor movement
        if(this.game.keyLeft.isDown) {
            this.arrow.angle -= 1.4;
            this.launcherWheel.angle -= 1.4;
        }else if(this.game.keyRight.isDown) {
            this.arrow.angle += 1.4;
            this.launcherWheel.angle += 1.4;
        }
    }
}

export default Play;