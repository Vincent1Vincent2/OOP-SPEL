/// <reference path="./gameEntity.ts" />

class Car extends GameEntity {
  private carImage: p5.Image;

  constructor(
    x: number,
    y: number,
    speed: number,
    width: number,
    height: number,
    carImage: p5.Image,
  ) {
    super(x, y, speed, width, height, carImage);
    this.carImage = carImage;
  }
}