
export enum Image {
  WATER = 'water',
  CORAL = 'coral',
}

export enum Sprite {
  FISH = 'fish',
}

// General

type SpriteFrameCountMap = {
  [graphicName in Sprite]: number;
}

const SPRITE_FRAME_COUNT_MAP: SpriteFrameCountMap = {
  [Sprite.FISH]: 8,
}

export function getFrame(spriteName: Sprite, row: number, col: number | 'start' | 'end' = 'start') {
  const frameCount = SPRITE_FRAME_COUNT_MAP[spriteName];
  const colIndex = col === 'start' ? 0 : col === 'end' ? frameCount - 1 : col; 
  if (colIndex >= frameCount) {
    throw `No frame found for ${col} on ${spriteName}`;
  }
  return frameCount * row + colIndex;
}
