import { MainScene } from "../scene";

export class ObjectManager {
  private scene: MainScene;

  private fish: Phaser.Physics.Arcade.Group;
  private sharks: Phaser.Physics.Arcade.Group;
  private limbs: Phaser.Physics.Arcade.Group;

  constructor(scene: MainScene) {
    this.scene = scene;
  }

  public createObjects() {

    this.fish = this.scene.physics.add.group();
    this.sharks = this.scene.physics.add.group();
    this.limbs = this.scene.physics.add.group();
  }
}