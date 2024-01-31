/// <reference path="./gameEntity.ts" />

class Truck extends GameEntity {
  private truckImage: p5.Image; // Instansvariabel för att lagra truckens bild

  constructor(
    x: number,
    y: number,
    speed: number,
    width: number,
    height: number,
    truckImage: p5.Image // Lägg till en parameter för truckens bild
  ) {
    super(x, y, speed, width, height, truckImage);
    this.truckImage = truckImage; // Spara den specificerade bilden i instansvariabeln
  }
}

  // public update() {}

  // public draw() {
  //   image(this.img, this.x, this.y);
  // }

