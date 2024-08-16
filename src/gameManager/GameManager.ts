import { Phase } from "./phase";

export class GameManager {
  difficulty: number;
  phase: Phase;

  constructor() {
    this.difficulty = 0;
    this.phase = Phase.GAME_START;
  }

  getPhase(): Phase {
    return this.phase;
  }

  setGamePhase(phase: Phase) {
    this.phase = phase;
  }

  increaseDifficulty(): void {
    this.difficulty += 1;
  }
}
