import { GraphicsManager } from './GraphicsManager';

// function generateFrameNumbers(
//   anims: Phaser.Animations.AnimationManager,
//   spriteName: Sprite,
//   row: number,
//   startCol: number | 'start' | 'end' = 'start',
//   endCol: number | 'start' | 'end' = 'end') {
//   return anims.generateFrameNumbers(
//     spriteName,
//     {
//       start: getFrame(spriteName, row, startCol),
//       end: getFrame(spriteName, row, endCol)
//     }
//   )
// }

export function createAnimations(graphicsManager: GraphicsManager): void {
  const anims = graphicsManager.getAnims();
  // anims.create({
  //   key: PlayerAnimations.RIGHT,
  //   frames: generateFrameNumbers(anims, Sprite.PLAYER, 0),
  //   frameRate: 9,
  //   repeat: -1
  // });

}