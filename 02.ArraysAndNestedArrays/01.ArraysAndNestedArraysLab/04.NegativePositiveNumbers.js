function solve(input) {
    const orderedArray = [];
    input.forEach(num => {
        if (num < 0) {
            orderedArray.unshift(num);
        } else {
            orderedArray.push(num);
        }
    });

    orderedArray.forEach(num => console.log(num));
}

solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);