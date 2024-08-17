
export enum CutSceneEventType {
  DEATH = 'death',
  EAT = 'eat',
  READY = 'ready',
  FUNCTION = 'function'
}

export type CutSceneDeathEvent = {
  type: CutSceneEventType.DEATH;
}

export type CutSceneEatEvent = {
  type: CutSceneEventType.EAT;
  // fish: Fish;
}

export type CutSceneFunctionEvent = {
  type: CutSceneEventType.FUNCTION;
  callback: () => void;
}

export type CutSceneEvent = (
  CutSceneDeathEvent |
  CutSceneEatEvent |
  CutSceneFunctionEvent
);


export type CutSceneSequence = CutSceneEvent[];

export type CutScene = {
  stage: number;
  sequence: CutSceneSequence;
}
