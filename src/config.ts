import Phaser from "phaser";
import { GameScene } from "./gameScene/scene";

export const GAME_WIDTH = 800;
export const GAME_HEIGHT = 600;

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
    scene: [
        // TitleScene,
        // InstructionsScene,
        GameScene,
        // EndScene
    ]
};
