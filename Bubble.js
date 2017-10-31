class Bubble {
  constructor(x, y, r, col, life) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.col = col;
    this.life = life;
  }
  update() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }
  show() {
    stroke(this.col, 100, this.col, this.life);
    strokeWeight(4);
    noFill();
    //fill(255);
    ellipse(this.x, this.y, this.r * 2);
    this.y = this.y + -4;
    this.life = this.life - 7;
  }
  isFinished() {
    if (this.life < 0) {
      return true;
    } else {
      return false;
    }
  }
}
