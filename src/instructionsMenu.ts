class InstructionsMenu implements IMenu {
  private goBackButton: Button;
  private InstructionsImage: p5.Image;

  constructor() {
    this.InstructionsImage = loadImage ("./assets/images/Instructions.png")

    this.goBackButton = new Button(
      windowWidth * 0.03,
      windowHeight * 0.05,
      130,
      35,
      "Go Back",
    );
  }

  public update(): void {
    if (this.goBackButton.isClicked()) {
      game.setCurrentMenu(new GameMenu());
    }
  }

  public draw() {
    push()
    background("lightblue");
    image(
      this.InstructionsImage,
      width / 2 - this.InstructionsImage.width / 2.1,
      height / 4 - this.InstructionsImage.height / 4.3,
    );
    this.goBackButton.draw();
    pop();
  }
}
