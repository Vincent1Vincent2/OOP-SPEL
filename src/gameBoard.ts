type Controls = {
  up: number;
  left: number;
  down: number;
  right: number;
};

class Player {
  private x: number;
  private y: number;
  private size: number;
  private controls: Controls;
  private color: string;

  constructor(x: number, y: number, controls: Controls, color: string) {
    this.x = x;
    this.y = y;
    this.size = 100;
    this.controls = controls;
    this.color = color;
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

  public update() {
    this.move();
    this.limitToScreen();
  }

  private limitToScreen() {
    if (this.x < 0) {
      this.x = 0;
    }
    if (this.x > width) {
      this.x = width;
    }
    if (this.y < 0) {
      this.y = 0;
    }
    if (this.y > height) {
      this.y = height;
    }
  }

  private move() {
    if (keyIsDown(this.controls.up)) {
      this.y -= 10;
    }
    if (keyIsDown(this.controls.down)) {
      this.y += 10;
    }
    if (keyIsDown(this.controls.left)) {
      this.x -= 10;
    }
    if (keyIsDown(this.controls.right)) {
      this.x += 10;
    }
  }

  public draw() {
    push();
    fill(this.color);
    circle(this.x, this.y, this.size * 2);
    pop();
  }
}
