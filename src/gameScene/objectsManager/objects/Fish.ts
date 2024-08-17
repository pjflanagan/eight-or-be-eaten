// import { generateFrameNumbers } from '../../graphicsManager';
// import { GameScene } from '../../scene';

export enum FishSpriteName {
  SMALL = 'fish-small',
  MEDIUM = 'fish-medium',
  LARGE = 'large-fish'
}

// enum FishAnimationName {
//   DIE = 'die',
//   SWIM = 'swim',
//   TURN = 'turn',
//   FLEE = 'flee', // swim but faster
// } 

// type FishAnimationKey = `${FishSpriteName}-${FishAnimationName}-${number}`;

// const FISH_FRAMES = 8;
// const FISH_ROWS = 10;

export class Fish extends Phaser.GameObjects.Sprite {
  // private spriteRow: number;
  // private fishSpriteName: FishSpriteName;
  // private animationKeys: Record<FishAnimationName, FishAnimationKey>

  // constructor(scene: GameScene, name: FishSpriteName) {
  //   super(scene, 10, 10, name);
  //   this.fishSpriteName = name;
  //   // TODO: store all of this fish's animation names
  // }

  // TODO: this function will create all animations associated with fish
  // static createAnimations(animationManager: Phaser.Animations.AnimationManager) {
  //   Object.values(FishSpriteName).forEach((spriteName: FishSpriteName) => {
  //     // TODO: might not do a forEach over the FishAnimationName because each animation is different
  //     Object.values(FishAnimationName).forEach((animationName: FishAnimationName) => {
  //       for (let row = 0; row < FISH_ROWS; ++row) {
  //         const animationKey: FishAnimationKey = `${spriteName}-${animationName}-${row}`;
  //         animationManager.create({
  //           key: animationKey,
  //           frames: generateFrameNumbers({
  //             animationManager,
  //             spriteName,
  //             row,
  //             frameCount: FISH_FRAMES,
  //           }),
  //           // TODO: some of these are faster
  //           frameRate: 9,
  //           // TODO: some of these don't repeat
  //           repeat: -1
  //         });
  //       }
  //     });
  //   });
  // }
}

// export class LargeFish extends Fish {
//   constructor(scene: GameScene) {
//     super(scene, FishSpriteName.LARGE);
//   }
// }

// export class MediumFish extends Fish {
//   constructor(scene: GameScene) {
//     super(scene, FishSpriteName.MEDIUM);
//   }
// }

// export class SmallFish extends Fish {
//   constructor(scene: GameScene) {
//     super(scene, FishSpriteName.SMALL);
//   }
// }
