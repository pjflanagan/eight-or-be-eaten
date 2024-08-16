import { MainScene } from "../scene";

enum Track {
  LOUNGE_BOSSA = 'lounge-bossa',
  ELEVATOR_DREAMIN = 'elevator-dreamin'
}

const TRACKS: Track[] = [
  Track.LOUNGE_BOSSA,
  Track.ELEVATOR_DREAMIN
];

type SoundPlayer = Phaser.Sound.NoAudioSound | Phaser.Sound.HTML5AudioSound | Phaser.Sound.WebAudioSound;

type TrackList = {
  [key in Track]: SoundPlayer
}

export class AudioManager {
  private scene: MainScene;

  private tracklist: TrackList;

  constructor(scene: MainScene) {
    this.scene = scene;
    this.tracklist = {} as TrackList;
  }
  preload() {
    this.scene.load.audio(Track.LOUNGE_BOSSA, ['assets/audio/lounge-bossa.mp3',]);
    this.scene.load.audio(Track.ELEVATOR_DREAMIN, ['assets/audio/elevator-dreamin.mp3',]);
  }

  createTrackList() {
    const playRandomTrack = this.playRandomTrack.bind(this);
    TRACKS.forEach((track) => {
      this.tracklist[track] = this.scene.sound.add(track).on('complete', playRandomTrack);
    });
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
    const randomTrack = TRACKS[Math.floor(Math.random() * TRACKS.length)]!;
    this.tracklist[randomTrack].play();
  }

  playTrack(track?: Track) {
    if (!track) {
      this.playRandomTrack();
      return;
    }
    this.tracklist[track].play();
  }
}
