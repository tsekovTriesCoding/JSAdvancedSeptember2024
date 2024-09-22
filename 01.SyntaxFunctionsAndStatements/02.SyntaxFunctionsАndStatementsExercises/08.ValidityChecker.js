function solve(x1, y1, x2, y2) {

    function isValidDistance(x1, y1, x2, y2) {
        return Number.isInteger(Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2));
    }

    const x1Y1ToZero = isValidDistance(x1, y1, 0, 0);
    const x2Y2ToZero = isValidDistance(x2, y2, 0, 0);
    const x1Y1ToX2Y2 = isValidDistance(x1, y1, x2, y2);

    const result1 = x1Y1ToZero ? 'valid' : 'invalid';
    const result2 = x2Y2ToZero ? 'valid' : 'invalid';
    const result3 = x1Y1ToX2Y2 ? 'valid' : 'invalid';

    console.log(`{${x1}, ${y1}} to {0, 0} is ${result1}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${result2}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${result3}`);
}

solve(3, 0, 0, 4);
solve(2, 1, 1, 1);
