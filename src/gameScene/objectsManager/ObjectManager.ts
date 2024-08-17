import { GameScene } from "../gameScene/scene";

export class ObjectManager {
  private scene: GameScene;

  private fish: Phaser.Physics.Arcade.Group;
  private sharks: Phaser.Physics.Arcade.Group;
  private arms: Phaser.Physics.Arcade.Group;

  constructor(scene: GameScene) {
    this.scene = scene;
  }

  public createObjects() {

    this.fish = this.scene.physics.add.group();
    this.sharks = this.scene.physics.add.group();
    this.arms = this.scene.physics.add.group();
  }
}