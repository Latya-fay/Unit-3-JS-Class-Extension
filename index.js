// Your code here
// Define the Polygon class
class Polygon {
    constructor(sides) {
        this.sides = sides;
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        return this.sides.reduce((sum, side) => sum + side, 0);
    }
}

// Define the Triangle class that inherits from Polygon
class Triangle extends Polygon {
    get isValid() {
        if (this.countSides !== 3) return false;
        const [a, b, c] = this.sides;
        return (a + b > c) && (a + c > b) && (b + c > a);
    }
}

// Define the Square class that inherits from Polygon
class Square extends Polygon {
    get isValid() {
        if (this.countSides !== 4) return false;
        return this.sides.every(side => side === this.sides[0]);
    }

    get area() {
        return this.isValid ? this.sides[0] ** 2 : undefined;
    }
}
