class Bubble {
  constructor(x, y,driftx, drifty, r, colr, colg, colb, transp) {

    this.x = x;
    this.y = y;

    this.driftx = driftx;
    this.drifty = drifty;

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
    //this.x = this.x + -4;
    this.x = this.x + this.driftx;
    this.y = this.y + this.drifty;

  }
  show() {
    noStroke();
    //stroke(this.colr, this.colg, this.colb, this.transp);
    //strokeWeight(4);
    //noFill();
    fill(this.colr, this.colg, this.colb, this.transp);
    ellipse(this.x, this.y, this.r );

    this.transp = this.transp - 2;
    this.r = this.r + - 2;
    //this.y = this.y + -4;
  }
  isFinished() {
    if (this.r <= 0) {
      return true;
    } else {
      return false;
    }
  }
}
