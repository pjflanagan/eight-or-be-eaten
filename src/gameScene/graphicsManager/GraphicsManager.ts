import { GameScene } from "../scene";
import { createAnimations } from "./createAnimations";
import { Image } from "./graphics";

export class GraphicsManager {
  private scene: GameScene;


  constructor(scene: GameScene) {
    this.scene = scene;
  }

  preload() {
    this.scene.load.image(Image.WATER, './assets/images/background-sky.png');
    // this.scene.load.spritesheet(Sprite.SMALL_FISH, './assets/images/fish.png', { frameWidth: FISH_SMALL_WIDTH, frameHeight: FISH_SMALL_HEIGHT });
  }

  getAnims(): Phaser.Animations.AnimationManager {
    return this.scene.anims;
  }

  createAnimations() {
    createAnimations(this);
  }
}