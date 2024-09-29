function solve(numbers) {
    const increasingSubsequnceNumbers = numbers.reduce((acumulator, num) => {
        if (acumulator.length < 1) {
            acumulator.push(num);
        } else {
            if (num >= acumulator[acumulator.length - 1]) {
                acumulator.push(num);
            }
        }

        return acumulator;
    }, []);
    
    return increasingSubsequnceNumbers;
}

solve([1,

    3,

    8,

    4,

    10,

    12,

    3,

    2,

    24]);

solve([1,

    2,

    3,

    4]);

solve([20,

    3,

    2,

    15,

    6,

    1]);