function solve(num1, num2, num3) {
    let largestNumber = Number.MIN_SAFE_INTEGER;

    if (num1 > largestNumber) {
        largestNumber = num1;
    }

    if (num2 > largestNumber) {
        largestNumber = num2;
    }

    if (num3 > largestNumber) {
        largestNumber = num3;
    }

    console.log(`The largest number is ${largestNumber}.`);
}

solve(5, -3, 16);
solve(-3, -5, -22.5);