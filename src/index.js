import "./index.html";
import Game from "./Game";
import {CANVAS_WIDTH, CANVAS_HEIGHT} from './utils/Constants'

// gameboy aspect ratio ~ (340 x 280) (1.214285714)
// will scale by 1.5 (510, 420)
new Game(CANVAS_WIDTH, CANVAS_HEIGHT);