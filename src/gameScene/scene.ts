import { DEBUG_CONFIG } from '../debug';
import { GameManager, Phase } from "./gameManager";
import { GraphicsManager } from './graphicsManager';
import { CutSceneManager } from './cutSceneManager';
import { InteractionManager } from './interactionManager';
import { ObjectManager } from './objectsManager';
import { CameraManager } from './cameraManager/CameraManager';
import { AudioManager } from './audioManager';
import { UIManager } from "./uiManager";

export class GameScene extends Phaser.Scene {
  private gameManager: GameManager;
  private objectManager: ObjectManager;
  private interactionManager: InteractionManager;
  private cutSceneManager: CutSceneManager;
  private cameraManager: CameraManager;
  private uiManager: UIManager;
  private graphicsManager: GraphicsManager;
  private audioManager: AudioManager;

  constructor() {
    super();
    this.gameManager = new GameManager();
    this.graphicsManager = new GraphicsManager(this);
    this.audioManager = new AudioManager(this);
    this.objectManager = new ObjectManager(this);
    this.interactionManager = new InteractionManager(this);
    this.cutSceneManager = new CutSceneManager();
    this.cameraManager = new CameraManager(this);
    this.uiManager = new UIManager(this);
  }

  preload() {
    this.graphicsManager.preload();
    this.audioManager.preload();
  }

  create() {
    this.objectManager.createObjects();
    this.cameraManager.initializeCamera();
    this.uiManager.initializeUI();
    this.interactionManager.createCursorKeys();
    this.graphicsManager.createAnimations();

    // this.audioManager.createTrackList();
    // this.audioManager.setMute(true);
    // this.audioManager.playTrack();

    if (DEBUG_CONFIG?.grid) {
      // this.add.grid(OFFSET, OFFSET, WIDTH, HEIGHT, TILE, TILE, undefined, undefined, 0x057605, 0.1).setOrigin(0);
    }
  }

  update() {
    switch (this.gameManager.getPhase()) {
      case Phase.GAME_START:
        // TODO: do an intro animation 
        this.gameManager.setGamePhase(Phase.GAME_PLAY);
        break;
      case Phase.GAME_PLAY:
        // TODO: play the game
        break;
      case Phase.GAME_END:
        // TODO: start the EndScene
        break;
    }
  }

  getManagers() {
    return {
      interactionManager: this.interactionManager,
      cutSceneManager: this.cutSceneManager,
      graphicsManager: this.graphicsManager,
      objectManager: this.objectManager,
      cameraManager: this.cameraManager,
      gameManager: this.gameManager,
      uiManager: this.uiManager
    }
  }

  getInteractionManager(): InteractionManager {
    return this.interactionManager;
  }

  getCutSceneManager(): CutSceneManager {
    return this.cutSceneManager;
  }

  getGraphicsManager(): GraphicsManager {
    return this.graphicsManager;
  }

  getObjectManager(): ObjectManager {
    return this.objectManager;
  }

  getCameraManager(): CameraManager {
    return this.cameraManager;
  }

  getAudioManager(): AudioManager {
    return this.audioManager;
  }

  getGameManager(): GameManager {
    return this.gameManager;
  }

  getUIManager(): UIManager {
    return this.uiManager;
  }
}