const canvas = 600;
const imgSize = 200;

function preload(){
    expressYourself = loadImage('./abstract/express-yourself.png');
}

function setup() {
    createCanvas(canvas, canvas);
    frameRate(12);
}
  
function draw() {
    background(255, 204, 0);
    drawWelcomeMessage();
    drawTitle();    
}

function drawWelcomeMessage() {
    textSize(15);
    stroke(0);
    fill(0);
    text('arrow keys to move // say something to express yourself', 75, 275);
    text('//click anywhere to continue', 75, 290);
    
}

function drawTitle() {
    image(expressYourself, 50, 50, imgSize * 2, imgSize * 2);
}