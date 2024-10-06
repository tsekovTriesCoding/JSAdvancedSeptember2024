function rectangle(width, height, color) {
    return {
        width: Number(width),
        height: Number(height),
        color: capitalize(color),
        calcArea: function () {
            return this.width * this.height;
        }
    }

    function capitalize(s) {
        return s[0].toUpperCase() + s.slice(1);
    }
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea()); 