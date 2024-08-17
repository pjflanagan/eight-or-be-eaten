import { GameScene } from "../scene";
import { GAME_HEIGHT, GAME_WIDTH} from '../../config';

const CAMERA_PAN_DURATION = 400;

export class CameraManager {
  private scene: GameScene;
  
  constructor(scene: GameScene) {
    this.scene = scene;
  }

  initializeCamera() {
    this.getCamera().setBounds(0, 0, GAME_WIDTH, GAME_HEIGHT);
    this.setZoom(2);
  }

  trackSprite(sprite: Phaser.GameObjects.GameObject) {
    this.getCamera().startFollow(sprite, true, 0.4, 0.4);
  }
  
  getCamera(): Phaser.Cameras.Scene2D.Camera {
    return this.scene.cameras.main;
  }

  setZoom(zoom: number): void {
    this.getCamera().setZoom(zoom);
  }

  getCameraCenter() {
    console.log({
      centerX: this.getCamera().centerX,
      centerY: this.getCamera().centerY,
      worldViewX: this.getCamera().worldView.x,
      worldViewY: this.getCamera().worldView.y,
      worldViewCenterX: this.getCamera().worldView.centerX,
      worldViewCenterY: this.getCamera().worldView.centerY,

    })
    return {
      // x: this.getCamera().centerX,
      // y: this.getCamera().centerY,
      // x: this.getCamera().worldView.x,
      // y: this.getCamera().worldView.y,
      x: this.getCamera().centerX,
      y: this.getCamera().centerY,
    }
  }

  panCameraToLocation(x: number, y: number) {
    this.getCamera().pan(x, y, CAMERA_PAN_DURATION);
  }
}

export function onCameraPanEnd(callback: () => void): Phaser.Types.Cameras.Scene2D.CameraPanCallback {
  return (_ref, progress) => {
    if (progress === 1) {
      callback();
    }
  }
}