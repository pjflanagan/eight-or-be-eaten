

export enum Phase {
  GAME_START = 0, // Welcome to Octopus
  GAME_SETUP,
  GAME_PLAY, // user plays until they die
  GAME_END, // prompt to restart, back to GAME_SETUP
}
