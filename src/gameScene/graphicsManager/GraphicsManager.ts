// import { Fish } from "../objectsManager";
import { GameScene } from "../GameScene";
// import { Image } from "./graphics";

export class GraphicsManager {
  private scene: GameScene;

  constructor(scene: GameScene) {
    this.scene = scene;
  }

  preload() {
    // Object.values(Image).forEach((imageName) => {
    //   this.scene.load.image(imageName, [`assets/images/${imageName}.webp`,]);
    // });
    // this.scene.load.spritesheet(Sprite.SMALL_FISH, './assets/images/fish.png', { frameWidth: FISH_SMALL_WIDTH, frameHeight: FISH_SMALL_HEIGHT });
  }

  createGraphicsGameObject(): Phaser.GameObjects.Graphics {
    return this.scene.add.graphics();
  }

  getAnimationManager(): Phaser.Animations.AnimationManager {
    return this.scene.anims;
  }

  createAnimations() {
    // Fish.createAnimations(this.getAnimationManager());
  }
}