const canvas = 600;
const imgSize = 100;

let input;
let analyzer;
let spritesheet;
let spritedata;
let expressYourself;
let animation = [];
let mouth;

let x = 172;
let y = 172;

function preload(){
  spritedata = loadJSON('./abstract/mouth-sprite.json');
  spritesheet = loadImage('./abstract/mouth-sprite.png');
  expressYourself = loadImage('./abstract/express-yourself.png');
}

function makeAnimation() {
  let frames = spritedata.frames;
  for (let i = 0; i < frames.length; i++) {
    let pos = frames[i].position;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    animation.push(img);
  }
}

function newInput(){
  input = new p5.AudioIn();
  input.start();
}

function getThreshold(){
  let volume = input.getLevel();
  let threshold = 0.1;
  if (volume > threshold) {
    mouth.show();
    mouth.animate();
  }
  else {
    mouth.show();
  }
}


function setup() {
  createCanvas(canvas, canvas);
  frameRate(12);
  newInput();
  makeAnimation();
  mouth = new Sprite(animation, x, y, 1);
}

function draw() {
  background(255, 204, 0);
  image(expressYourself, 0, 200 - height/2, expressYourself.width/2, expressYourself.height/2);
  getThreshold();
}
