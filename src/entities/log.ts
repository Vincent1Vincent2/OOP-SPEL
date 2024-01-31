class Log extends GameEntity {
  private logImage: p5.Image;

  constructor(
    x: number,
    y: number,
    speed: number,
    width: number,
    height: number,
    logImage: p5.Image,
  ) {
    super(x, y, speed, width, height, logImage);
    this.logImage = logImage;
  }
}
