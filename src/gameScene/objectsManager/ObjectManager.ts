import { GameScene } from "../GameScene";
import { Arm } from "./objects/Arm";

export class ObjectManager {
  private scene: GameScene;

  // private fish: Phaser.Physics.Arcade.Group;
  // private sharks: Phaser.Physics.Arcade.Group;
  private arms: Arm[];

  constructor(scene: GameScene) {
    this.scene = scene;
    this.arms = [];
  }

  public createObjects() {
    // this.fish = this.scene.physics.add.group();
    // this.sharks = this.scene.physics.add.group();

    this.arms.push(new Arm(this.scene));
  }

  public addObject(sprite: Phaser.GameObjects.Sprite) {
    this.scene.add.existing(sprite);
  }
}