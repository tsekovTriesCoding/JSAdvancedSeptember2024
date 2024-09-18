function solve(numbers) {
    const sum = numbers.reduce((total, current) => {
        return total + current;
    }, 0);

    const inverseSum = numbers.reduce((total, current) => {
        current = 1 / current;
        return total + current;
    }, 0);

    const concatSum = numbers.join('');

    console.log(sum);
    console.log(inverseSum);
    console.log(concatSum);
}

solve([1, 2, 3]);
solve([2, 4, 8, 16]);