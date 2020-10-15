const canvas = 600;
const imgSize = 100;
let spritedata;
let spritesheet;
let expressYourself;
let tileArray = [];
let xArray = [];
let yArray = [];




// let tile;

function preload(){
  spritedata = loadJSON('abstract/weather.json');
  spritesheet = loadImage('abstract/weather.png');
  expressYourself = loadImage('abstract/express-yourself.png');
}

function createTiles() {
  let tiles = spritedata.frames;
  for (let i = 0; i < tiles.length; i++) {
    let pos = tiles[i].position;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    tileArray.push(img);
  }
  console.log(tileArray);
}
// function createTiles() {
//   let frames = spritedata.frames;
//   for (let i = 0; i < frames.length; i++) {
//     let pos = frames[i].position;
//     let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
//     animation.push(img);
//   }
//   console.log(animation)
// }
// function drawBG() {
//   for (i = 0; i < 50; i++) {
    
//     tile.display();
//     // tile.update();
//   }
// }
function drawBG() {
  for (i = 0; i < 50; i++) {
    const xInit = Math.random() * canvas;
    const yInit = Math.random() * canvas;
    const randTile = tileArray[Math.floor(Math.random()*tileArray.length)]
    image(randTile, xInit, yInit, 25, 25);
  }
}



function setup() {
  createCanvas(canvas, canvas);
  console.log(spritedata)
  createTiles();
  // tile = new Tile();
}

function draw() {
  background(255, 204, 0);
  frameRate(4);
  drawBG();

  image(expressYourself, 0, 200 - height/2, expressYourself.width/2, expressYourself.height/2);
}

