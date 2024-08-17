import { FishSpriteName } from '../objectsManager';

export enum Image {
  WATER = 'water',
  CORAL = 'coral',
}

export function getFrame(frameCount: number, row: number, col: number | 'start' | 'end' = 'start') {
  const colIndex = col === 'start' ? 0 : col === 'end' ? frameCount - 1 : col; 
  return frameCount * row + colIndex;
}

type GenerateFrameNumbersParams = {
  animationManager: Phaser.Animations.AnimationManager,
  spriteName: FishSpriteName,
  frameCount: number,
  row: number,
  startCol?: number | 'start' | 'end',
  endCol?: number | 'start' | 'end',
}

export function generateFrameNumbers({
  animationManager,
  spriteName,
  row,
  frameCount,
  startCol = 'start',
  endCol = 'end'
}: GenerateFrameNumbersParams) {
  return animationManager.generateFrameNumbers(
    spriteName,
    {
      start: getFrame(frameCount, row, startCol),
      end: getFrame(frameCount, row, endCol)
    }
  )
}
