type Controls = {
  up: number;
  down: number;
  left: number;
  right: number;
};

class Player {
  private color: string;
  private x: number;
  private y: number;
  private size: number;
  private controls: Controls;
  private lastDirection: string | null;

  constructor(color: string, x: number, y: number, controls: Controls) {
    this.color = color;
    this.x = x;
    this.y = y;
    this.size = 100;
    this.controls = controls;
    this.lastDirection = null;
  }

  public getX() {
    return this.x;
  }
  public getY() {
    return this.y;
  }
  public getSize() {
    return this.size;
  }
  public getLastDirection() {
    return this.lastDirection;
  }

  public update() {
    this.move();
    this.limitToScreen();
  }

  private limitToScreen() {
    if (this.y < 0) {
      this.y = 0;
    }
    if (this.y > height) {
      this.y = height;
    }
    if (this.x < 0) {
      this.x = 0;
    } else if (this.x > width) {
      this.x = width;
    }
  }

  private move() {
    if (keyIsDown(this.controls.up) && !keyIsDown(this.controls.left) && !keyIsDown(this.controls.right)) {
      this.y -= 8;
      this.lastDirection = 'up';
    } else if (keyIsDown(this.controls.down)) {
      this.y += 8;
      this.lastDirection = 'down';
    }

    if (keyIsDown(this.controls.left) && !keyIsDown(this.controls.down)) {
      this.x -= 8;
      this.lastDirection = 'left';
    } else if (keyIsDown(this.controls.right) && !keyIsDown(this.controls.down)) {
      this.x += 8;
      this.lastDirection = 'right';
    }
  }

  public draw() {
    push();
    fill(this.color);
    circle(this.x, this.y, this.size * 0.5);
    pop();
  }
}
