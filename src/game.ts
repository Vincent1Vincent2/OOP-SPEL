class Game {
  private player: Player;

  constructor() {
    this.player = new Player(
      200,
      200,
      {
        up: 87, // w
        left: 65, // a
        down: 83, // s
        right: 68, // d
      },
      "red",
    );
  }

  public update() {
    this.player.update();
  }

  public draw() {
    background("black");
    this.player.draw();
  }
}
