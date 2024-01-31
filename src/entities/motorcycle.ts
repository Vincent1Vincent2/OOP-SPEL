/// <reference path="./gameEntity.ts" />

class Motorcycle extends GameEntity {
  private motorcycleImage: p5.Image;
  
  constructor(
    x: number, 
    y: number, 
    speed: number,
    width: number,
    height: number,
    motorcycleImage: p5.Image,) 
    {
    super(x, y, speed, width, height, motorcycleImage);
    this.motorcycleImage = motorcycleImage;
  }
}
