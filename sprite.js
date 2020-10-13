class Sprite {
    constructor(animation, x, y, speed) {
        this.animation = animation;
        this.x = x;
        this.y = y;
        this.len = this.animation.length;
        this.speed = speed;
        this.index = 0;
    }

    show() {
        image(this.animation[this.index % this.len], this.x, this.y);
    }

    animate() {
        this.index += this.speed;
    }
}