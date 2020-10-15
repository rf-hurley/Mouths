class Tile {
    constructor (x, y) {
        this.x = x;
        this.y = y;
        this.size = 100;
        this.index = 0;
        this.index = 0;

    }
    display(){
        this.random = tileArray[Math.floor(Math.random()*tileArray.length)];
        image(this.random, this.x, this.y, this.size, this.size);
        console.log("display");
    }
    update(){

    }
}