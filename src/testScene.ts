
export class TestScene extends Phaser.Scene {
  private block: Phaser.Physics.Matter.Sprite;
  private cursors: Phaser.Types.Input.Keyboard.CursorKeys;

  preload() { }

  create() {
    this.block = this.matter.add.sprite(400, 50, '', undefined, { shape: 'circle', mass: 20 });
    this.block.setFixedRotation();

    for (let leg = 0; leg < 8; ++leg) {
      let y = 150;
      let prev = this.block.body as MatterJS.BodyType;
      const length = Math.floor(Math.random() * 8 + 20);

      for (var i = 0; i < length; i++) {
        const ball = this.matter.add.circle(400 + leg * 6, y, 4, { mass: 0.1, gravityScale: { x: 1, y: 1 } });

        this.matter.add.joint(prev, ball,
          i === 0 ? 28 : 8,
          undefined,
          {
            angularStiffness: i < 6 ? 1 : 0.3,
            stiffness: i === 0 ? 1 : 0.2
          }
        );

        prev = ball;
        y += 18;
      }
    }

    this.matter.add.mouseSpring();

    this.cursors = this.input.keyboard!.createCursorKeys();
  }

  update() {
    if (this.cursors.left.isDown) {
      this.block.setVelocityX(-4);
    }
    else if (this.cursors.right.isDown) {
      this.block.setVelocityX(4);
    }
    else {
      this.block.setVelocityX(0);
    }

    if (this.cursors.up.isDown) {
      this.block.setVelocityY(-4);
    }
    else if (this.cursors.down.isDown) {
      this.block.setVelocityY(4);
    }
    else {
      this.block.setVelocityY(0);
    }
  }

}