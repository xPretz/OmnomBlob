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

    // Draw blobs
    for (let i = 0; i < blobs.length; i++) {
        blobs[i].draw();
    }

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
    let maxSize = 100;
    let minSize = 10;

    for (let i = 0; i < 100; i++)
    {
        // Generate size of blob
        let blobSize = (Math.random() * (maxSize - minSize)|0) + minSize;

        // Generate location of blob
        let blobXPosition = (Math.random() * (canvas.width - (blobSize / 2))|0) + (blobSize / 2);
        let blobYPosition = (Math.random() * (canvas.height - (blobSize / 2))|0) + (blobSize / 2);
        let blobPositionVector = new Vector(blobXPosition, blobYPosition);

        // Generate random color of blob
        let color = "#";
        for (let k = 0; k < 3; k++) {
            color += ("0" + (Math.random() * 256 | 0).toString(16)).substr(-2);
        }

        blobs[i] = new Blob(blobPositionVector, color, blobSize);
    }
}

// Player
let player = new Player(new Vector(canvas.width / 2, canvas.height / 2), "#FF0000");

// Blobs
let blobs = [];
generateBlobs();

// Creates game loop
setInterval(loop, 10);

// Event handlers
window.onmousemove = mouseMoveEvent;
