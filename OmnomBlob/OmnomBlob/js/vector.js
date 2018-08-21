class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    set(x, y) {
        this.x = x;
        this.y = y;
    }

    direction(otherX, otherY) {
        return new Vector(otherX - this.x, otherY - this.y);
    }

    distance(otherX, otherY) {
        let vectorDirection = this.direction(otherX, otherY);
        let distance = Math.sqrt((vectorDirection.x * vectorDirection.x) + (vectorDirection.y * vectorDirection.y));
        return distance;
    }

    magnitude() {
        let length = Math.sqrt((this.x * this.x) + (this.y * this.y));
        return length;
    }

    normalize() {
        let vectorMagnitude = this.magnitude();
        return new Vector(this.x / vectorMagnitude, this.y / vectorMagnitude);
    }

    add(otherX, otherY) {
        return new Vector(this.x + otherX, this.y + otherY);
    }

    add(value) {
        if (value instanceof Vector) {
            return new Vector(this.x + value.x, this.y + value.y);
        }
        else {
            return new Vector(this.x + value, this.y + value);
        }
    }

    multiply(otherX, otherY) {
        return new Vector(this.x * otherX, this.y * otherY);
    }

    multiply(value) {
        if (value instanceof Vector) {
            return new Vector(this.x * value.x, this.y * value.y);
        }
        else {
            return new Vector(this.x * value, this.y * value);
        }
    }
}