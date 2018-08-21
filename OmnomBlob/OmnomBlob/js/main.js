// Set canvas up first
let canvas = document.getElementById("GameCanvas");
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;

// 2D rendering context
let context = canvas.getContext("2d");

// Mouse position
let mousePosition = new Vector(canvas.width / 2, canvas.height / 2);

function update() {
    // Move player by following mouse
    player.updatePlayerLocation(mousePosition.x, mousePosition.y);
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    // Draw player
    player.draw();
}

function loop() {
    update();
    draw();
}

function mouseMoveEvent(e) {
    e = event || window.event;
    mousePosition = new Vector(e.clientX, e.clientY);
}

function generateBlobs() {
    var maxSize = 100;
    var minSize = 10;

    for (var i = 0; i < 100; i++)
    {

    }
}

// Player
let player = new Player(new Vector(canvas.width / 2, canvas.height / 2), "#FF0000");

// Creates game loop
setInterval(loop, 10);

// Event handlers
window.onmousemove = mouseMoveEvent;
