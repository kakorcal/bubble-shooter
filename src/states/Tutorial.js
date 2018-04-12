class Tutorial extends Phaser.State {
    create() {
        let tutorialText = this.add.text(
            this.world.centerX,
            this.world.centerY,
            "TUTORIAL",
            { font: "40px monospace", fill: "yellow", align: "center", strokeThickness: 5 }
        );

        tutorialText.anchor.set(0.5, 0.5);
    }
}

export default Tutorial;