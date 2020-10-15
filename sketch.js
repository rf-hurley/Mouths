const canvas = 600;
const imgSize = 100;
let permissionGiven = false;
let input;
let analyzer;
let spritesheet;
let spritedata;
let expressYourself;
let animation = [];
let mouth;
const initSize = 100;

let x, y;

function initPos() {
x = width/2 - initSize/2;
y = height/2 - initSize/2;
}

function preload(){
  spritedata = loadJSON('./abstract/mouth-sprite.json');
  spritesheet = loadImage('./abstract/mouth-sprite.png');
  expressYourself = loadImage('./abstract/express-yourself.png');

  checkPermissions();
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
  let threshold = 0.02;
  console.log("volume", volume);

  if (volume > threshold) {
    volume = map(volume, 0.001, 0.5, 50, 500);
    // console.log(mouth, volume);
    mouth.show(volume);
    mouth.update();
  }
  else {
    mouth.show();
  }
}

function setup() {
  createCanvas(canvas, canvas);

  initPos();

  frameRate(12);
  newInput();
  makeAnimation();
  // rectMode(CENTER);
  mouth = new Sprite(animation, x, y, initSize, 10);
  // mouth2 = new Sprite (animation, x + 100, y, initSize, 2);
}

function draw() {
  console.log(permissionGiven);
  if(!permissionGiven){
    displayWelcomeMessage();
  } else {
    drawGame();
  }
}

function keyPressed(){

  if(keyCode === LEFT_ARROW){
    console.log('left arrow');
    mouth.x -= mouth.speed
  }
  if(keyCode === RIGHT_ARROW){
    console.log('left arrow');
    mouth.x += mouth.speed
  }
  if(keyCode === UP_ARROW){
    console.log('left arrow');
    mouth.y -= mouth.speed
  }
  if(keyCode === DOWN_ARROW){
    console.log('left arrow');
    mouth.y += mouth.speed
  }

}

function drawGame(){
  background(255, 204, 0);
  getThreshold();
  image(expressYourself, 0, 200 - height/2, expressYourself.width/2, expressYourself.height/2);

  // mouth2.show();
  // mouth2.update();
}

function displayWelcomeMessage(){
  background(0);
  textSize(20);
  stroke(255);
  fill(255);
  text('please enable your microphone to continue', 100, 100);
}

function checkPermissions(){
  navigator.permissions.query(
    // { name: 'camera' }
    { name: 'microphone' }
    // { name: 'geolocation' }
    // { name: 'notifications' } 
    // { name: 'midi', sysex: false }
    // { name: 'midi', sysex: true }
    // { name: 'push', userVisibleOnly: true }
    // { name: 'push' } // without userVisibleOnly isn't supported in chrome M45, yet
).then( (permissionStatus) => {

    console.log(permissionStatus.state); // granted, denied, prompt
    console.log(permissionStatus);
    if(permissionStatus.state === 'granted'){
      permissionGiven = true;
    }

    permissionStatus.onchange = function(){
        console.log("Permission changed to " + this.state);
        if(this.state === 'granted'){
          permissionGiven = true;
        }
    }

})
}