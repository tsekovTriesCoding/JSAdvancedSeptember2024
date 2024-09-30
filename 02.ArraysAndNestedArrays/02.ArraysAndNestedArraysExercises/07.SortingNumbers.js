function solve(numbers) {
    numbers = numbers.sort((a, b) => a - b);
    const leftHalf = numbers.slice(0, numbers.length / 2);
    const rightHalf = numbers.slice(numbers.length / 2);
    let reorderedArray = [];

    while (leftHalf.length || rightHalf.length) {
        if (leftHalf.length) {
            reorderedArray.push(leftHalf.shift());
        }

        if (rightHalf.length) {
            reorderedArray.push(rightHalf.pop());
        }
    }

    return reorderedArray;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
solve([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]);