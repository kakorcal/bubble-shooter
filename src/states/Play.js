import { 
    CANVAS_WIDTH, CANVAS_HEIGHT, CENTER_X, CENTER_Y, 
    ROWS, COLUMNS, TILE_SIZE, SPRITE_OFFSET, LAUNCHER_HEIGHT, 
    SCOREBOARD_HEIGHT, MAX_ARROW_RANGE, CURRENT_BUBBLE_X, 
    CURRENT_BUBBLE_Y, NEXT_BUBBLE_X, NEXT_BUBBLE_Y
} from '../utils/Constants';
import GraphicSprite from '../graphics/GraphicSprite';
import round1 from '../rounds/1';
import Bubble from '../graphics/Bubble';
import Boundary from '../graphics/Boundary';
import { Colors } from '../utils/Colors';
import { EntityMap } from '../utils/EntityMap';


class Play extends Phaser.State {
    create() {
        // TODO: need to parametize the stat values
        /* 
            STATE FLOW:
            player plays
                if win
                    if win all
                        goto congradulation state
                    else
                        restart state with updated stats
                if lose
                    goto continue state
                        if continue
                            goto play state
                        else
                            save stats to localStorage
                            goto menu state
        */
        
        // stats
        this.totalScore = 0;
        this.score = 0
        this.round = 1;
        this.nowPlaying = false;
        this.roundComplete = false;
        this.gameover = false;
        this.paused = false;
        this.playTime = 0;
        this.launchCountdown = 10;

        // builders
        this.createTiles();
        this.createBoundaries();
        this.createLauncher();
        this.createStage();
        this.createScoreboard();
        this.createInitialLaunchBubbles();
        this.createOverlay();

        // game logic
        this.pregame(this.startGame);

        // events
        this.game.keySpace.onDown.add(this.launchBubble, this);
    }

    createTiles() {
        let tiles = this.add.group();
        tiles.createMultiple(ROWS * COLUMNS, 'tile-2', null, true);
        tiles.setAll('width', TILE_SIZE);
        tiles.setAll('height', TILE_SIZE);
        // rows and columns are opposites for this method
        tiles.align(COLUMNS, ROWS, TILE_SIZE, TILE_SIZE);
    }

    createBoundaries() {
        let topBoundarySprite = new GraphicSprite(this.game, 0, 0, null);
        topBoundarySprite.spritify(new Boundary(this.game,
            { x1: TILE_SIZE, y1: SCOREBOARD_HEIGHT },
            { x2: CANVAS_WIDTH - TILE_SIZE, y2: SCOREBOARD_HEIGHT },
            Colors.skyBlue
        ));
        this.physics.enable(topBoundarySprite, Phaser.Physics.ARCADE);
        this.topBoundary = this.add.existing(topBoundarySprite);

        let bottomBoundarySprite = new GraphicSprite(this.game, 0, 0, null);
        bottomBoundarySprite.spritify(new Boundary(this.game,
            { x1: TILE_SIZE, y1: CANVAS_HEIGHT - LAUNCHER_HEIGHT },
            { x2: CANVAS_WIDTH - TILE_SIZE, y2: CANVAS_HEIGHT - LAUNCHER_HEIGHT },
            Colors.skyBlue
        ));
        this.bottomBoundary = this.add.existing(bottomBoundarySprite);
        this.physics.enable(bottomBoundarySprite, Phaser.Physics.ARCADE);                    
        // move boundary by => boundary.x += val;
    }

    createScoreboard() {
        this.scoreText = this.add.bitmapText(5, 11, 'upheaval', 'SCORE 000000000', 25);
        this.scoreText.anchor.set(0, 0.5);

        this.roundText = this.add.bitmapText(CANVAS_WIDTH - 130, 11, 'upheaval', 'ROUND 001', 25);
        this.roundText.anchor.set(0, 0.5);
    }

    createLauncher() {
        // polnareff
        this.polnareff = this.add.sprite(CENTER_X - 75, CANVAS_HEIGHT + 2 - (2 * TILE_SIZE), 'polnareff-1', 0);
        this.polnareff.scale.set(0.9, 0.9);
        this.polnareff.anchor.set(0.5, 0.5);
        this.polnareff.animations.add('bounce', [0, 1], 2, true);
        this.polnareff.animations.play('bounce'); 
        
        // launcher pieces
        this.arrow = this.add.sprite(CENTER_X, CANVAS_HEIGHT - LAUNCHER_HEIGHT + SPRITE_OFFSET, 'arrow-1');
        this.arrow.anchor.set(0.5, 0.95);

        // wheel
        this.launcherWheel = this.add.sprite(CENTER_X - 14, CANVAS_HEIGHT - (2 * TILE_SIZE), 'launcher-wheel-1');
        this.launcherWheel.anchor.set(0.5, 0.5);
        this.launcherWheel.width = 57;
        this.launcherWheel.height = 57;

        // platform
        this.launcherPlatform = this.add.sprite(CENTER_X - 1, CANVAS_HEIGHT - (2 * TILE_SIZE), 'launcher-platform-1');
        this.launcherPlatform.anchor.set(0.26, 0.5);
        this.launcherPlatform.width = 90;
        this.launcherPlatform.height = 62;
        
        // next text
        this.nextText = this.add.bitmapText(CENTER_X + 91, CANVAS_HEIGHT - LAUNCHER_HEIGHT + TILE_SIZE + 13, 'upheaval', 'NEXT', 25);
        this.nextText.anchor.set(0.5, 0.5);

        // speech bubble 
        this.speechBubble = this.add.sprite(CENTER_X - 135, CANVAS_HEIGHT - LAUNCHER_HEIGHT + 12, 'speech-bubble-1');
        this.speechBubble.scale.set(0.7, 0.7);
        this.speechBubble.alpha = 0;
    }

    createStage() {
        this.bubbles = this.add.group();
        this.blocks = this.add.group();

        for(let i = 0; i < round1.length; i++) {
            for(let j = 0; j < round1[i].length; j++) {
                let value = round1[i][j];
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
                    let block = this.add.sprite(x, y, 'block-1', this.blocks);
                    block.width = TILE_SIZE;
                    block.height = TILE_SIZE;
                }
            }
        }

        this.blocks.setAll('anchor.x', 0.5);
        this.blocks.setAll('anchor.y', 0.5);

        this.bubbles.enableBody = true;
        this.bubbles.physicsBodyType = Phaser.Physics.ARCADE;
        this.bubbles.checkWorldBounds = true;
    }

    createInitialLaunchBubbles() {     
        this.currentBubble = this.createRandomBubble(CURRENT_BUBBLE_X, CURRENT_BUBBLE_Y);
        this.nextBubble = this.createRandomBubble(NEXT_BUBBLE_X, NEXT_BUBBLE_Y);

        this.bubbles.add(this.currentBubble);
        this.bubbles.add(this.nextBubble);
    }

    createRandomBubble(x, y) {
        let randomColor = this.getRandomBubbleColor();
        let bubbleGraphic = new Bubble(this.game, TILE_SIZE, Colors[randomColor]);
        let bubbleSprite = new GraphicSprite(this.game, x, y, null);
        bubbleSprite.spritify(bubbleGraphic);
        bubbleSprite.setScale(0.9, 0.9);

        return bubbleSprite;
    }

    getRandomBubbleColor() {
        let min = EntityMap.BUBBLE_START;
        let max = EntityMap.BUBBLE_END;
        let random = Math.floor(Math.random() * (max - min) + min);
        return EntityMap.colors[random];
    }

    createOverlay() {
        this.overlay = this.add.graphics(0, 0);
        this.overlay.beginFill(0x000000);
        this.overlay.drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        this.overlay.alpha = 0.3;

        this.readyGoText = this.add.bitmapText(CENTER_X, CENTER_Y, 'upheaval', 'READY', 30);
        this.readyGoText.anchor.set(0.5, 0.5);
    }

    // add 'ready go' text before starting the game.
    // calls the startGame function after 'ready go' text disappears
    pregame(cb) {
        // create a one-off timers that autodestroys itself
        // TODO: maybe use async await / yield / promises?
        let pregameTimer1 = this.time.create(true);
        pregameTimer1.add(Phaser.Timer.SECOND * 1.7, () => {
            let pregameTimer2 = this.time.create(true);
            pregameTimer2.add(Phaser.Timer.SECOND * 1.7, cb, this);
            pregameTimer2.start();
            this.readyGoText.setText('GO');
        }, this);

        pregameTimer1.start();
    }

    // remove overlay, starts timer, setups stats, enable input
    startGame() {
        console.log('NOW PLAYING...');
        this.overlay.destroy();
        this.readyGoText.destroy();
        this.nowPlaying = true;
        this.gameloop();    
    }

    // add 
    gameloop() {

    }

    update() {
        if(this.nowPlaying) {
            this.handleCursorInput();
        }
    }

    launchBubble() {
        if (this.nowPlaying) {
            console.log('LAUNCH BUBBLE');
            
            this.physics.arcade.velocityFromAngle(
                // https://phaser.io/docs/2.4.4/Phaser.Physics.Arcade.html#velocityFromRotation
                // need to subtract 90 to get the coordinates adjusted
                this.arrow.angle - 90, 200, this.currentBubble.body.velocity);

            // detect collision

            // replenish bubble
            this.nextBubble.position.set(CURRENT_BUBBLE_X, CURRENT_BUBBLE_Y);
            this.currentBubble = this.nextBubble;
            this.nextBubble = this.createRandomBubble(NEXT_BUBBLE_X, NEXT_BUBBLE_Y);
            this.bubbles.add(this.nextBubble);
        }
    }

    handleCursorInput() {
        if (this.game.keyLeft.isDown) {
            if (this.arrow.angle >= -MAX_ARROW_RANGE) {
                this.arrow.angle -= 1.4;
                this.launcherWheel.angle -= 1.4;
            } else {
                this.arrow.angle = -MAX_ARROW_RANGE;
                this.launcherWheel.angle = -MAX_ARROW_RANGE;
            }
        } else if (this.game.keyRight.isDown) {
            if (this.arrow.angle <= MAX_ARROW_RANGE) {
                this.arrow.angle += 1.4;
                this.launcherWheel.angle += 1.4;
            } else {
                this.arrow.angle = MAX_ARROW_RANGE;
                this.launcherWheel.angle = MAX_ARROW_RANGE;
            }
        }
    }

    shutdown() {

    }
}

export default Play;