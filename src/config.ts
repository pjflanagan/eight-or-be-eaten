import Phaser from "phaser";
import PhaserMatterCollisionPlugin from 'phaser-matter-collision-plugin';
// import { GameScene } from "./gameScene/GameScene";
import { TestScene } from "./testScene";

export const GAME_WIDTH = 800;
export const GAME_HEIGHT = 600;

export const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: GAME_WIDTH,
    height: GAME_HEIGHT,
    mode: Phaser.Scale.RESIZE,
    physics: {
        default: 'matter',
        matter: {
            enableSleeping: true,
            gravity: {
                y: 0,
                x: 0
            },
            debug: {
                showBody: true,
                showStaticBody: true
            }
        }
    },
    pixelArt: false,
    render: {
        antialias: false,
    },
    scene: [
        TestScene
        // TitleScene,
        // InstructionsScene,
        // GameScene,
        // EndScene
    ],
    plugins: [
        {
            plugin: PhaserMatterCollisionPlugin,
            key: 'matterCollision',
            mapping: 'matterCollision'
        }
    ]
};
