let bubbles = [];

function setup() {
  createCanvas(1024, 768);
}

function mouseDragged() {
  let r = random(5, 20);
  let life = 200;
  let col = random(100, 255);
  bubbles.push(new Bubble(mouseX, mouseY, r, col, life));
}

function draw() {
  background(0);
  for (let i = bubbles.length - 1; i >= 0; i--) {
    bubbles[i].update();
    bubbles[i].show();
    if (bubbles[i].isFinished()) {
      bubbles.splice(i, 1);
    }
  }
}
