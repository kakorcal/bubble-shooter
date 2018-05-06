import 'pixi';
import 'p2';
import Phaser from 'phaser';
import Load from './states/Load';
import Menu from './states/Menu';
import Play from './states/Play';
import Tutorial from './states/Tutorial';

class Game extends Phaser.Game {
    constructor(width, height) {        
        super({
            width,
            height,
            renderer: Phaser.AUTO,
            // TODO: scale accordlingly to device resolution
            // resolution: window.devicePixelRatio,
            state: {
                create: () => {
                    this.state.add('load', Load);
                    this.state.add('menu', Menu);
                    this.state.add('play', Play);
                    this.state.add('tutorial', Tutorial);
                    this.state.start('load');                    
                }
            }
        });         
    }        
}

export default Game;