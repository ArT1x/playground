class Bubble {
  constructor(x, y, r, colr, colg, colb, transp) {
    this.x = x;
    this.y = y;
    //radius
    this.r = r;
    //color
    this.colr = colr;
    this.colg = colg;
    this.colb = colb;

    this.transp = transp;
  }
  update() {
    this.x = this.x + randomGaussian(0, 4);
    this.y = this.y + randomGaussian(0, 4);

  }
  show() {
    stroke(this.colr, this.colg, this.colb, this.transp);
    strokeWeight(4);
    //noFill();
    fill(this.colr, this.colg, this.colb, this.transp);
    ellipse(this.x, this.y, this.r );
    this.y = this.y + -4;
    //this.transp = this.transp - 2;
    this.r = this.r + -1;
  }
  isFinished() {
    if (this.r <= 0) {
      return true;
    } else {
      return false;
    }
  }
}
