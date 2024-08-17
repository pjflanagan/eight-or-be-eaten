

export enum Phase {
  GAME_START,
  GAME_PLAY, // user plays until they die
  GAME_END, // prompt to restart, back to GAME_SETUP
}
