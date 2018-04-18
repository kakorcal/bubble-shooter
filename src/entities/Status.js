import { CANVAS_WIDTH, CANVAS_HEIGHT } from '../utils/Constants';
import Navigation from './Navigation';
// pseudo state that displays user stats
class Status extends Phaser.Group {
    constructor(game) {
        super(game);
        this.overlay = null;
        this.header = null;
        this.stats = [];
        this.navigation = null;
        // TODO: the next bubble is painted on top of overlay
        // so we have to make sure the overlay is on top
    }

    createOverlay(overlay) {
        if (this.overlay) this.remove(this.overlay);

        let {fill} = overlay;
        let graphic = new Phaser.Graphics(this.game, 0, 0);
        graphic.beginFill(fill);
        graphic.drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        graphic.alpha = 0.3;
        return this.add(graphic);
    }

    createHeader(header) {
        if(this.header) this.remove(this.header);

        let {x, y, font, message, fontSize} = header;
        let text = new Phaser.BitmapText(this.game, x, y, font, message, fontSize);
        // text.alpha = 0;
        text.anchor.set(0.5, 0.5);
        return this.add(text);
    }

    createStats(stats) {
        if(this.stats.length) {
            this.stats.forEach((stat) => {
                this.remove(stat);
            })
        }

        let {x, y, font, message, fontSize, distance} = stats;
        let {time, score, bonus} = message;

        let propText = `TIME\nSCORE\nBONUS`;
        let valueText = `${time}\n${score}\n${bonus}`;
        let props = new Phaser.BitmapText(this.game, x - distance, y, font, propText, fontSize);
        let values = new Phaser.BitmapText(this.game, x + distance, y, font, valueText, fontSize);

        // props.alpha = 0;
        props.anchor.set(0.5, 0.5);
        // values.alpha = 0;
        values.anchor.set(0.5, 0.5);
        return this.addMultiple([props, values]);
    }

    createNavigation(navigation) {
        let {items, x, y, increment} = navigation;
        return new Navigation(this.game, items, x, y, increment);
    }
}

export default Status;