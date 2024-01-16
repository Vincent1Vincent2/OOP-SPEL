class Game {
  private player: Player;

  constructor() {

    this.carOne = new Car(100, 300, "Blue");
    this.carTwo = new Car(100, 500, "Red");
    this.carOne.start(-2.3);
    this.carTwo.start(-3);

    this.playerOne = new Player("white", 900, 1000, {
      up: 87, // w
      left: 65, // a
      down: 83, // s
      right: 68, // d
    });
  }

  public update() {
    this.player.update();
  }

  public draw() {
    background("black");
    this.player.draw();
  }
}
