import { GameScene } from "../GameScene";

enum TrackName {
  TITLE = 'song-title',
}

type SoundPlayer = Phaser.Sound.NoAudioSound | Phaser.Sound.HTML5AudioSound | Phaser.Sound.WebAudioSound;

type TrackList = {
  [key in TrackName]: SoundPlayer
}

export class AudioManager {
  private scene: GameScene;

  private tracklist: TrackList;

  constructor(scene: GameScene) {
    this.scene = scene;
    this.tracklist = {} as TrackList;
  }
  preload() {
    // this.getTrackNames().forEach((trackName) => {
    //   this.scene.load.audio(trackName, [`assets/audio/${trackName}.mp3`,]);
    // });
  }

  createTrackList() {
    const playRandomTrack = this.playRandomTrack.bind(this);
    this.getTrackNames().forEach((trackName) => {
      this.tracklist[trackName] = this.scene.sound.add(trackName).on('complete', playRandomTrack);
    });
  }

  getTrackNames(): TrackName[] {
    return Object.values(TrackName);
  }

  isMuted(): boolean {
    return this.scene.game.sound.mute;
  }

  // NOTE: muting does not pause the track, those should just always be playing
  setMute(isMuted: boolean) {
    this.scene.game.sound.mute = isMuted;
  }

  toggleMute(): void {
    this.setMute(!this.isMuted());
  }

  playRandomTrack() {
    const trackNames = this.getTrackNames();
    const randomTrack = trackNames[Math.floor(Math.random() * trackNames.length)]!;
    this.tracklist[randomTrack].play();
  }

  playTrack(track?: TrackName) {
    if (!track) {
      this.playRandomTrack();
      return;
    }
    this.tracklist[track].play();
  }
}
