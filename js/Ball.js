class Ball {
  constructor() {
    this.r = 40;
    this.x = 80;
    this.y = 480 - this.r / 2;
    this.color = color('blue');
    this.velocity = 0;
    this.gravity = 0.5;
  }
  show() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.r, this.r);
  }
  jump() {
    this.velocity = -8;
  }
  move() {
    this.y += this.velocity;
    this.velocity += this.gravity;
    this.y = constrain(this.y, 0, 480 - this.r / 2);
  }
}
