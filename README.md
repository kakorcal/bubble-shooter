# Bubble Shooter
HTML5 canvas game inspired by the [Puzzle Bobble series](https://en.wikipedia.org/wiki/Puzzle_Bobble). 

VIEW LIVE: https://html5bubbleshooter.co/

![alt text](https://media.giphy.com/media/TgMIylhZS3FabKO3CY/giphy.gif "Bubble Shooter")

* Has 50 unique rounds that increase in difficulty 
* All sprites and graphics scale proportionally to the user device's viewport height (min height: 510px, max height: 1190px)
* Assets are optimized using spritesheets made with TexturePacker and cache control headers configured by the nginx server
* Game data is stored using localStorage enabling players to continue from the most current round

## Built With
* Phaser.js - Game engine, collision detection, animation, sound effects, and managing state
* ES6 - Transpiled with Babel
* Webpack - For bundling, applying loaders, and HMR for development
* Express.js - Serve static content
* nginx - Proxy between client and Express server for modifying HTTP responses
* Photoshop - Created all png files for the game
* TexturePacker - For creating spritesheets

## Music Credits
* [Phaser.js](https://phaser.io/examples/v2/audio/audio-sprite)
* [FoxSynergy](https://opengameart.org/content/lunar-joyride-8-bit)
* [bart](https://opengameart.org/content/the-adventure-begins-8-bit-remix)
* [agcnf_media](https://www.pond5.com/sound-effect/32742863/retro-pong-tennis-hit-5.html)
* [MLMusic](https://www.pond5.com/sound-effect/48873387/8-bit-video-game-win-melody-1.html)
* [ionics](https://www.pond5.com/stock-music/69859326/game-background-music-loop-01.html)
* [jabameister](https://www.pond5.com/sound-effect/82668554/retro-game-lose.html)
* EpicStock [1](https://www.pond5.com/sound-effect/44790173/retro-game-sound-8bit-68.html) [2](https://www.pond5.com/sound-effect/44790158/retro-game-sound-8bit-55.html)

## Backlog
* Add 50 more levels
* Input form for signup
* MySQL server to persist user stats 
* Rankings page