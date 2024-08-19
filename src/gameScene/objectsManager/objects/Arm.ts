import { GameScene } from '../../GameScene';

  // TODO: This is kinda a triple pendulum, where the user can control a point
  // TODO: https://github.com/christophmark/pendulum?tab=readme-ov-file
  // https://www.myphysicslab.com/pendulum/double-pendulum-en.html

  // see about this too https://github.com/mikewesthad/phaser-matter-collision-plugin

  // Best physics example: https://labs.phaser.io/view.html?src=src%5Cphysics%5Cmatterjs%5Cchain.js

// An arm is not really a game object, it wraps a graphics game object
export class Arm {
  // private scene: GameScene;

  // pendulum
  private basePoint: Phaser.GameObjects.GameObject; // no gravity, fixed
  private controlPoint1: MatterJS.BodyType; // this one pendulums back and forth constantly
  // private controlPoint2: MatterJS.BodyType; // this one can be reeled in and out to catch fish
  // private endPoint: MatterJS.BodyType; // no user control, pendulum at the far end swings wildly

  // TODO: if a fish touches the front side then it get's caught
  // if a fish touches the back side then it flees
  // private frontSide: Phaser.GameObjects.Graphics;
  // private backSide: Phaser.GameObjects.Graphics;

  constructor(scene: GameScene) { // index: number
    // this.scene = scene;
    // const graphicsManager = this.scene.getGraphicsManager();
    // this.frontSide = graphicsManager.createGraphicsGameObject();
    // this.backSide = graphicsManager.createGraphicsGameObject();

    console.log('add base');
    this.basePoint = scene.matter.add.sprite(300, 0, '', undefined, { ignoreGravity: true, mass: 500 });

    console.log('add control point 1');
    this.controlPoint1 = scene.matter.add.circle(300, 100, 0, { mass: 0.4 });
    console.log('add joint');
    scene.matter.add.joint(this.basePoint.body as MatterJS.BodyType, this.controlPoint1, 100, 0.8);


    // this.controlPoint2 = scene.matter.add.circle(300, 200, 0);
    // scene.matter.add.joint(this.controlPoint1, this.controlPoint2);

    // this.endPoint = scene.matter.add.circle(300, 300, 0);
    // scene.matter.add.joint(this.controlPoint2, this.endPoint);

    console.log('add spring');
    scene.matter.add.mouseSpring();
    console.log('done')
  }
    
  
  // Each point has a maximum distance between each other, the user controls 
  // As the control points move, if the endPoint is too far then it snaps back into place
}
