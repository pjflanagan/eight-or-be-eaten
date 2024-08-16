import { MainScene } from "../scene";

type InputDirection = 'up' | 'down' | 'left' | 'right';
type WASDKey = 'W' | 'A' | 'S' | 'D';

type WASDCursors = {
  W: Phaser.Input.Keyboard.Key,
  A: Phaser.Input.Keyboard.Key,
  S: Phaser.Input.Keyboard.Key,
  D: Phaser.Input.Keyboard.Key
}

const WASDMap: { [key in InputDirection]: WASDKey } = {
  up: 'W',
  left: 'A',
  down: 'S',
  right: 'D'
}

export class InteractionManager {
  private scene: MainScene;
  private cursors: Phaser.Types.Input.Keyboard.CursorKeys & WASDCursors;

  constructor(scene: MainScene) {
    this.scene = scene;
  }

  createCursorKeys() {
    this.cursors = {
      ...this.scene.input.keyboard!.createCursorKeys(),
      W: this.scene.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.W),
      A: this.scene.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.A),
      S: this.scene.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.S),
      D: this.scene.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.D)
    }
  }

  // interact(
  //   _player: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody,
  //   interactive: InteractiveObject
  // ) {
  //   interactive.setPipeline('outline')
  //   const type = interactive.getType();
  // }

  isKeyDown(key: InputDirection) {
    const WASDPair = WASDMap[key];
    return this.cursors[key].isDown || this.cursors[WASDPair].isDown;
  }
}
