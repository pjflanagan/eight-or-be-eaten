import { GameScene } from "../scene";
import { CutScene, CutSceneEventType, CutSceneSequence } from "./types";

export const CUT_SCENE_INACTIVE = -1;

export class CutSceneManager {
  private scene: GameScene;
  private activeCutScene: CutScene;

  constructor(scene: GameScene) {
    this.scene = scene;
    this.activeCutScene = {
      stage: CUT_SCENE_INACTIVE,
      sequence: []
    }
  }

  isCutSceneActive(): boolean {
    return this.activeCutScene.stage !== CUT_SCENE_INACTIVE;
  }

  triggerCutScene(sequence: CutSceneSequence) {
    if (this.isCutSceneActive()) {
      return;
    }
    this.activeCutScene = {
      stage: 0,
      sequence
    }
  }

  advanceCutSceneStage() {
    this.activeCutScene.stage += 1;
    if (this.activeCutScene.stage >= this.activeCutScene.sequence.length) {
      this.setCutSceneInactive();
    }
  }

  setCutSceneInactive() {
    this.activeCutScene = {
      stage: CUT_SCENE_INACTIVE,
      sequence: []
    }
  }

  getCutScene(): CutScene {
    return this.activeCutScene;
  }

  playCutScene() {
    const { stage, sequence } = this.activeCutScene;
    if (stage === CUT_SCENE_INACTIVE) {
      return;
    } else if (stage >= sequence.length) {
      this.setCutSceneInactive();
      return;
    }

    const cutSceneEvent = sequence[stage]!;
    switch (cutSceneEvent.type) {
      case CutSceneEventType.DEATH:
        // TODO: this.die();
        break;
      case CutSceneEventType.FUNCTION:
        this.advanceCutSceneStage();
        cutSceneEvent.callback();
        break;
    }
  }
}
