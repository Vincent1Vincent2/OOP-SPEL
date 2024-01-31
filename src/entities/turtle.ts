class Turtle extends GameEntity {
  private turtleImage: p5.Image;

  constructor(
    x: number,
    y: number,
    speed: number,
    width: number,
    height: number,
    turtleImage: p5.Image
  ) {
    super(x, y, speed, width, height, turtleImage);
    this.turtleImage = turtleImage;
  }
}
