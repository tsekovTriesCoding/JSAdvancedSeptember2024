function solve(matrix) {
    let biggestNumber = Number.MIN_SAFE_INTEGER;

    for (let row = 0; row < matrix.length; row++) {
        const currentRow = matrix[row];
        for (let col = 0; col < currentRow.length; col++) {
            const currentNumber = currentRow[col];

            if (currentNumber > biggestNumber) {
                biggestNumber = currentNumber;
            }
        }
    }

    return biggestNumber;
}

solve([[20, 50, 10],
[8, 33, 145]]);

solve([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]]);