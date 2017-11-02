let bubbles = [];
let canvas;

function setup() {

  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');

  //Slider RED
  textr = createP("red");
  textr.style('color', 'red');
  sliderr = createSlider(0, 255, 200, 10);
  sliderr.style('background-color', 'red');

  //Slider Green
  textg = createP("green");
  textg.style('color', 'green');
  sliderg = createSlider(0, 255, 70, 10);
  sliderg.style('background-color', 'green');

  //Slider BLUE
  textb = createP("blue");
  textb.style('color', 'blue');
  sliderb = createSlider(0, 255, 150, 10);
  sliderb.style('background-color', 'blue');

  //slider SIZE
  texts = createP("size");
  texts.style('color', 'white');
  sliders = createSlider(10, 100, 40, 5);
  sliders.style('background-color', 'white');

  //slider Transparenz
  textt = createP("transparency");
  textt.style('color', 'white');
  slidert = createSlider(0, 255, 200, 10);
  slidert.style('background-color', 'white');

  //slider x
  textx = createP("x");
  textx.style('color', 'white');
  sliderx = createSlider(-25, 25, 0, 1);
  sliderx.style('background-color', 'white');

  //slider y
  texty = createP("y");
  texty.style('color', 'white');
  slidery = createSlider(-25, 25, 0, 1);
  slidery.style('background-color', 'white');

}

function mouseDragged() {

  //bubble size
  let bsize = sliders.value();
  let r = random(bsize * 0.5, bsize * 2);

  let transp = slidert.value();
  //colors
  //let colr = random(100, 255)
  let colr = sliderr.value();
  //let colg = random(100, 255);
  let colg = sliderg.value();
  //let colb = random(100, 255);
  let colb = sliderb.value();

  let driftx = sliderx.value();
  let drifty = slidery.value();

  bubbles.push(new Bubble(mouseX, mouseY, driftx, drifty, r, colr, colg, colb, transp));
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
