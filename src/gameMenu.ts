class GameMenu implements IMenu {
  private buttonNewGame: Button;
  private buttonInstructions: Button;
  private buttonLeaderboard: Button;
  private frogImage: p5.Image;
  private menumusic: p5.SoundFile; // Add a private property for the sound file
  /* private volumeSlider: p5.Element; */

  constructor() {
    this.frogImage = loadImage("./assets/images/menuBackground.png");
    this.menumusic = menumusic.menumusic; // Assign the sound file from skets.ts
    this.menumusic.loop(); // Start looping the sound

    /* Create volume-slider */
    /* this.volumeSlider = createSlider(0, 100, 50);
    this.volumeSlider.position(width * 1, height * 0.30);
    this.volumeSlider.style("width", "80px"); */

    // Define button properties
    let buttonWidth = 240;
    let buttonHeight = 40;
    let buttonX = (width - buttonWidth) / 2;

    this.buttonNewGame = new Button(
      buttonX,
      height / 1.76,
      buttonWidth,
      buttonHeight,
      "New Game",
    );
    this.buttonInstructions = new Button(
      buttonX,
      height / 1.76 + 53,
      buttonWidth,
      buttonHeight,
      "Instructions",
    );
    this.buttonLeaderboard = new Button(
      buttonX,
      height / 1.76 + 106,
      buttonWidth,
      buttonHeight,
      "Leaderboard",
    );
  }

  public update() {
    if (this.buttonNewGame.isClicked()) {
      game.setCurrentMenu(new GameBoard());
    }
    if (this.buttonInstructions.isClicked()) {
      game.setCurrentMenu(new InstructionsMenu());
    }
    if (this.buttonLeaderboard.isClicked()) {
      game.setCurrentMenu(new LeaderBoard());
    }
  }

  public draw() {
    imageMode(CORNER);
    image(this.frogImage, 0, 0, width, height);

    // Draw all buttons
    this.buttonNewGame.draw();
    this.buttonInstructions.draw();
    this.buttonLeaderboard.draw();
  }
}