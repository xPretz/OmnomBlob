// Player information
class Player extends Blob {
    constructor(position, initColor) {
        super(position, initColor, 50)
        this.baseAcceleration = 2;
        this.maxAcceleration = 4;
        this.accelerationIncrease = .01;
        this.currentAcceleration = this.baseAcceleration;
    }

    updateAcceleration() {
        if (this.currentAcceleration < this.maxAcceleration) {
            this.currentAcceleration += this.accelerationIncrease;
        }
    }

    resetAcceleration() {
        this.currentAcceleration = this.baseAcceleration;
    }

    updatePlayerLocation(mouseX, mouseY) {
        let distance = this.position.distance(mouseX, mouseY);
        let direction = this.position.direction(mouseX, mouseY);
        if (distance <= 1) {
            this.resetAcceleration();
            this.position = new Vector(mouseX, mouseY);
        }
        else {
            this.updateAcceleration();
            let directionVector = new Vector(direction.x / distance, direction.y / distance);
            directionVector = directionVector.multiply(this.currentAcceleration);
            this.position = this.position.add(directionVector);
        }
    }
}