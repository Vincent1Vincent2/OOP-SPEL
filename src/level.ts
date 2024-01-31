class Level {
  public gameEntities: GameEntity[];

  public constructor(id: number, worldMoved: number) {
    const speed = 0.05;
    const lane1Speed = random(speed * 0.5, speed);
    const lane2Speed = random(speed, speed * 2);
    // const lane3Speed = random(speed, speed * 2);
    // const lane4Speed = random(speed, speed * 2);
    // const lane5Speed = random(speed, speed * 2);

    // Flytta entiteterna baserat på level id
    let levelHeight = -600;
    const yOffset = levelHeight * id + worldMoved;

    this.gameEntities = [
      // ---------- Landscape ------------
      new Water(0, 0 + yOffset),
      new FreeZone(0, 250 + yOffset),
      new Road(0, 300 + yOffset),
      new FreeZone(0, 550 + yOffset),
      // ---------- Landscape ------------

      // -------- Moving things Road ----------
      new Car(300, 305 + yOffset, lane1Speed, 100, 50, redCarImg.redCar),
      new Car(width, 358 + yOffset, -lane2Speed, 100, 50, blueCarImg.blueCar),
      new Car(width, 410 + yOffset, -lane1Speed, 100, 50, redCarLeftImg.redCarLeft),

      new Motorcycle(300, 458 + yOffset, lane1Speed, 95, 50, motorcycleImg.motorcycle),
      new Truck(300, 508 + yOffset, lane2Speed, 118, 50, orangeTruckRightImg.orangeTruckRight),
      // -------- Moving things Water ----------
      new Turtle(150, 200 + yOffset, -speed, 50, 50, turtleImg.turtle),
      new Turtle(100, 200 + yOffset, -speed, 50, 50, turtleImg.turtle),
      new Turtle(50, 200 + yOffset, -speed, 50, 50, turtleImg.turtle),
      new Log(100, 150 + yOffset, -lane2Speed, 150, 50, logImg.log),
      new Turtle(50, 100 + yOffset, lane1Speed, 50, 50, turtleRightImg.turtleRight),
      new Turtle(100, 100 + yOffset, lane1Speed, 50, 50, turtleRightImg.turtleRight),
      new Turtle(150, 100 + yOffset, lane1Speed, 50, 50, turtleRightImg.turtleRight),
      new Log(300, 50 + yOffset, -lane1Speed, 150, 50, logImg.log),
      new Log(600, 0 + yOffset, lane1Speed, 150, 50, logRightImg.logRight),
      // ------------- Coins -------------
      new Coin(150, 305 + yOffset, 40, 40),
    ];

    const extraEntities = floor(id / 1);

    for (let i = 0; i < extraEntities; i++) {
      const xOffset = (i + 1) * random(600, 900); // random avstånd per lane om ni vill..
      this.gameEntities.push(
        ...[
          new Car(300 - xOffset, 305 + yOffset, lane1Speed, 100, 50, redCarImg.redCar),
          new Car(width + xOffset, 358 + yOffset, -lane2Speed, 100, 50, blueCarImg.blueCar),
          new Car(width + xOffset, 410 + yOffset, -lane1Speed, 100, 50, redCarLeftImg.redCarLeft),

          new Motorcycle(300 - xOffset, 458 + yOffset, lane1Speed, 95, 50, motorcycleImg.motorcycle),
          new Truck(300 - xOffset, 508 + yOffset, lane2Speed, 118, 50, orangeTruckRightImg.orangeTruckRight),
        ],
      );
    }
  }

  public update() {
    for (let gameEntity of this.gameEntities) {
      gameEntity.update();
    }
    // spawn new entities after delay
  }

  public draw() {
    for (let gameEntity of this.gameEntities) {
      gameEntity.draw();
    }
  }
}
