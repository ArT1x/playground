class Bubble {
  constructor(x, y, r, colr, colg, colb, lifetime) {
    this.x = x;
    this.y = y;
    //radius
    this.r = r;
    //color
    this.colr = colr;
    this.colg = colg;
    this.colb = colb;

    this.lifetime = lifetime;
  }
  update() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }
  show() {
    stroke(this.colr, this.colg, this.colb, this.lifetime);
    strokeWeight(4);
    //noFill();
    fill(this.colr, this.colg, this.colb, this.lifetime);
    ellipse(this.x, this.y, this.r * 2);
    this.y = this.y + -4;
    this.lifetime = this.lifetime - 7;
  }
  isFinished() {
    if (this.lifetime < 0) {
      return true;
    } else {
      return false;
    }
  }
}
