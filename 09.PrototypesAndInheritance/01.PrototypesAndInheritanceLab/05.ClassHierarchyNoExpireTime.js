function extendBaseClassFigure() {
    class Figure {
        constructor(units = 'cm') {
            this.units = units;
        }

        get area() {

        }

        changeUnits(newUnits) {

        }

        toString() {
            return `Figures units: ${this.units}`;
        }
    }

    class Circle extends Figure {
        constructor(radius) {
            super();
            this.radius = radius;
        }

        get area() {
            return Math.PI * this.radius ** 2;
        }

        changeUnits(newUnits) {
            if (this.units == 'cm') {
                if (newUnits == 'mm') {
                    this.units = 'mm';
                    this.radius *= 10;
                } else if (newUnits == 'm') {
                    this.units = 'm';
                    this.radius /= 100;
                }
            } else if (this.units == 'mm') {
                if (newUnits == 'cm') {
                    this.units = 'cm';
                    this.radius /= 10;
                } else if (newUnits == 'm') {
                    this.units = 'm';
                    this.radius /= 1000;
                }
            } else if (this.units == 'm') {
                if (newUnits == 'cm') {
                    this.units = 'cm';
                    this.radius *= 100;
                } else if (newUnits == 'mm') {
                    this.units = 'mm';
                    this.radius *= 1000;
                }
            }
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super();
            this.width = width;
            this.height = height;

            this.changeUnits(units);
        }

        get area() {
            return this.width * this.height;
        }

        changeUnits(newUnits) {
            if (this.units == 'cm') {
                if (newUnits == 'mm') {
                    this.units = 'mm';
                    this.width *= 10;
                    this.height *= 10;
                } else if (newUnits == 'm') {
                    this.units = 'm';
                    this.width /= 100;
                    this.height /= 100;
                }
            } else if (this.units == 'mm') {
                if (newUnits == 'cm') {
                    this.units = 'cm';
                    this.width /= 10;
                    this.height /= 10;
                } else if (newUnits == 'm') {
                    this.units = 'm';
                    this.width /= 1000;
                    this.height /= 1000;
                }
            } else if (this.units == 'm') {
                if (newUnits == 'cm') {
                    this.units = 'cm';
                    this.width *= 100;
                    this.height *= 100;
                } else if (newUnits == 'mm') {
                    this.units = 'mm';
                    this.width *= 1000;
                    this.height *= 1000;
                }
            }
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`
        }
    }

    return { Figure, Circle, Rectangle };
}

let c = new Circle(5);
console.log(c.area); // 78.53981633974483 
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5 
let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200  
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40 
r.changeUnits('cm');
console.log(r.area); // 12 
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4 
c.changeUnits('mm');
console.log(c.area); // 7853.981633974483 
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50 