class Obsticle {
  constructor() {
    this.r = 80;
    this.x = 640;
    this.y = int(random(0, 480));
    this.color = color('red');
    this.velocity = 0;
    this.scoreVal = 10;
    this.score = [];
  }
  show() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, 80, 80);
  }

  move() {
    this.x -= 10;
  }
  collide(x, y) {
    if (sqrt((x - this.x) ** 2 + (y - this.y) ** 2) <= 60) {
      noLoop();
      return true;
    }
  }
  scored() {
    if (this.x == 0) {
      return true;
    }
  }
}
