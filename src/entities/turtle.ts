/**
 * Represents a turtle in the game.
 * @extends GameEntity
 */
class Turtle extends GameEntity {
  /*   private turtleFrames: p5.Image[];
    private currentImageIndex: number; 
  private animationSpeed: number;
  private tickCount: number; */

  constructor(
    x: number,
    y: number,
    speed: number,
    width: number,
    height: number,
  ) {
    super(x, y, speed, width, height, turtle2Img.turtle2);

    /**
     * Array of turtle frames for animation.
     * @type {p5.Image[]}
     * @private
     */

    /*  
    this.turtleFrames = [

      turtle2Img.turtle2,
      turtle3Img.turtle3,
      turtle4Img.turtle4,
    ];
    this.currentImageIndex = 0; 
    this.animationSpeed = 800;
    this.tickCount = 0;*/
  }

  /**
   * Update the turtle's swimming animation.
   */
  /*
  private updateSwim() {



    this.tickCount += deltaTime;

    const timeForOneFrame = this.animationSpeed / this.turtleFrames.length;
    this.currentImageIndex =
      Math.floor(this.tickCount / timeForOneFrame) % this.turtleFrames.length;

  }

  /**
   * Update function for the turtle.
   */

  public update() {
    super.update();
    /* this.updateSwim(); */
  }

  /**
   * Draw the turtle with optional horizontal flipping.
   */
  public draw() {
    /*     const jumpFrameImage = this.turtleFrames[this.currentImageIndex]; */
    push();
    if (this.speed > 0) {
      scale(-1, 1);
      image(this.img, -this.x, this.y, -this.width, this.height);
    } else image(this.img, this.x, this.y, this.width, this.height);
    pop();
  }
}
