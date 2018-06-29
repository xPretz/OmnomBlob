// Set canvas up first
var canvas = document.getElementById("GameCanvas");
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;

// 2D rendering context
var context = canvas.getContext("2d");

// Mouse position
var mousePosition = { x: canvas.width / 2, y: canvas.height / 2 };

// Player information
class Player {
    constructor(posX, posY, initColor) {
        this.position = { x: posX, y: posY };
        this.currentColor = initColor;
        this.size = 20;
        this.speed = { x: 5, y: 5 };
    }

    updatePlayerLocation(mouseX, mouseY) {
        this.position = { x: mouseX, y: mouseY };
    }

    drawPlayer() {
        context.beginPath();
        context.arc(this.position.x, this.position.y, this.size / 2, 0, Math.PI * 2);
        context.fillStyle = this.currentColor;
        context.fill();
        context.closePath();
    }
}

function update() {
    // Move player by following mouse
    player.updatePlayerLocation(mousePosition.x, mousePosition.y);
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    // Draw player
    player.drawPlayer();
}

function loop() {
    update();
    draw();
}

function mouseMoveEvent(e) {
    e = event || window.event;
    mousePosition = { x: e.clientX, y: e.clientY };
    console.log("Current Mouse Position: " + mousePosition);
}

// Player
let player = new Player(canvas.width / 2, canvas.height / 2, "#FF0000");

// Creates game loop
setInterval(loop, 10);

// Event handlers
window.onmousemove = mouseMoveEvent;
