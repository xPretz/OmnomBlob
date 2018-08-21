// Blob information
class Blob {
    constructor(position, initColor, size) {
        this.position = position;
        this.currentColor = initColor;
        this.size = size;
        this.speed = new Vector(2, 2);
        this.maxSpeed = new Vector(4, 4);
    }

    draw() {
        context.beginPath();
        context.arc(this.position.x, this.position.y, this.size / 2, 0, Math.PI * 2);
        context.fillStyle = this.currentColor;
        context.fill();
        context.closePath();
    }
}