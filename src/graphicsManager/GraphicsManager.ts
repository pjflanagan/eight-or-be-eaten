import { MainScene } from "../scene";
import { createAnimations } from "./createAnimations";
import { Image } from "./graphics";

export class GraphicsManager {
  private scene: MainScene;


  constructor(scene: MainScene) {
    this.scene = scene;
  }

  preload() {
    this.scene.load.image(Image.WATER, './assets/images/background-sky.png');
    // this.scene.load.spritesheet(Sprite.SMALL_FISH, './assets/images/fish.png', { frameWidth: FISH_SMALL_WIDTH, frameHeight: FISH_SMALL_HEIGHT });
  }

  createAnimations() {
    createAnimations(this.scene);
  }
}