import { Phase } from './gameScene/gameManager';

type DebugConfig = {
  // scene: Scene; TODO: which scene to debug
  phase?: Phase;
  grid?: boolean;
}

// type DebugConfigTestName =
//   'testLayout';

// type DebugConfigLibrary = {
//   [key: DebugConfigTestName]: DebugConfig
// };

// const DEBUG_CONFIG_LIBRARY: DebugConfigLibrary = {
//   testIntro: {
//     startPhase: Phase.GAME_START,
//   },
//   testGame: {
//     startPhase: Phase.,
//   },
//   testGameEnd: {
//     startPhase: Phase.GAME_END,
//   },
//   testLayout: {
//     grid: true,
//     startPhase: Phase.GAME_SETUP,
//   }
// }

export const DEBUG_CONFIG: DebugConfig | undefined = undefined;