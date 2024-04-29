let img;
let pointSize = 10;
let colorScheme = ['#F9ED25', '#029BAE', '#82C886'];
let hoverActive = false;

function preload() {
  img = loadImage('assets/albatros_kometsalefwhiteArtboard 1.png');
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent('sketch-container');
}

function draw() {
  background(255);
  image(img, 0, 0);

  for (let col = 0; col < img.width; col += pointSize) {
    for (let row = 0; row < img.height; row += pointSize) {
      let c = img.get(col, row);
      let alphaValue = alpha(c);

      if (alphaValue > 0) {
        let randomColor = hoverActive ? random(colorScheme) : '#000000'; // Change color only if hover is active
        stroke(randomColor);
        strokeWeight(10);
        point(col, row);
      }
    }
  }
}

function mouseMoved() {
  if (mouseX >= 0 && mouseX < width && mouseY >= 0 && mouseY < height) {
    hoverActive = true;
  } else {
    hoverActive = false;
  }
}
