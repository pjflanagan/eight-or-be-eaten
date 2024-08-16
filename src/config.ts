import Phaser from "phaser";
import { MainScene } from "./scene";
import { GAME_WIDTH, GAME_HEIGHT } from "./layout";

export const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: GAME_WIDTH,
    height: GAME_HEIGHT,
    mode: Phaser.Scale.RESIZE,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    pixelArt: false,
    render: {
        antialias: false,
    },
    scene: MainScene
};
