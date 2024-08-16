import { Phase } from './gameManager';

type DebugConfig = {
  startPhase: Phase;
  grid?: boolean;
}

type DebugConfigLibrary = {
  [key: string]: DebugConfig
};

const DEBUG_CONFIG_LIBRARY: DebugConfigLibrary = {
  testIntro: {
    startPhase: Phase.GAME_START,
  },
  testGame: {
    startPhase: Phase.GAME_SETUP,
  },
  testGameEnd: {
    startPhase: Phase.GAME_END,
  },
  testLayout: {
    grid: true,
    startPhase: Phase.GAME_SETUP,
  }
}

export const DEBUG_CONFIG: DebugConfig | undefined = DEBUG_CONFIG_LIBRARY.testGame;