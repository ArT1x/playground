let bubbles = [];

function setup() {

  createCanvas(900, 400);

  //Slider RED
  textr = createP("red");
  textr.style('color', 'red');
  sliderr = createSlider(0, 255, 100, 10);
  sliderr.style('background-color', 'red');

  //Slider Green
  textg = createP("green");
  textg.style('color', 'green');
  sliderg = createSlider(0, 255, 100, 10);
  sliderg.style('background-color', 'green');

  //Slider BLUE
  textb = createP("blue");
  textb.style('color', 'blue');
  sliderb = createSlider(0, 255, 100, 10);
  sliderb.style('background-color', 'blue');

  //slider SIZE
  createP("size");
  sliders = createSlider(1, 50, 15, 5);

}

function mouseDragged() {

  //bubble size
  let bsize = sliders.value();
  let r = random(bsize * 0.5, bsize * 2);

  let lifetime = 200;
  //colors
  //let colr = random(100, 255)
  let colr = sliderr.value();
  //let colg = random(100, 255);
  let colg = sliderg.value();
  //let colb = random(100, 255);
  let colb = sliderb.value();

  bubbles.push(new Bubble(mouseX, mouseY, r, colr, colg, colb, lifetime));
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
