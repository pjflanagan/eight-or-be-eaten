import { GameScene } from "../../scene";

enum FishSize {
  SMALL = 'fish-small',
  MEDIUM = 'fish-medium',
  LARGE = 'large-fish'
} 

export class Fish extends Phaser.GameObjects.Sprite {
  constructor(scene: GameScene, size: FishSize) {
    super(scene, 10, 10, size);
  }
}

export class LargeFish extends Fish {
  constructor(scene: GameScene) {
    super(scene, FishSize.LARGE);
  }
}

export class MediumFish extends Fish {
  constructor(scene: GameScene) {
    super(scene, FishSize.MEDIUM);
  }
}

export class SmallFish extends Fish {
  constructor(scene: GameScene) {
    super(scene, FishSize.SMALL);
  }
}
