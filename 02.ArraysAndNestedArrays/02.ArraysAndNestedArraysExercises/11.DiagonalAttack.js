function solve(input) {
    const numbers = input.map(row => row.split(' ').map(Number));

    const firstDiagonalSum = getFirstDiagonalSum(numbers);
    const secondDiagonalSum = getSecondDiagonalSum(numbers);

    const hasEqualSumsOfDiagonals = firstDiagonalSum == secondDiagonalSum;

    if (hasEqualSumsOfDiagonals) {
        changeMatrixNonDiagonalValues(numbers, firstDiagonalSum);
    }

    printMatrix(numbers);

    function printMatrix(matrix) {
        for (let row = 0; row < matrix.length; row++) {
            const currentRow = numbers[row];

            console.log(currentRow.join(' '));
        }
    }


    function changeMatrixNonDiagonalValues(numbers, sum) {
        for (let row = 0; row < numbers.length; row++) {
            const currentRow = numbers[row];

            for (let col = 0; col < currentRow.length; col++) {
                if (row != col && col != currentRow.length - 1 - row) {
                    numbers[row][col] = sum;
                }
            }

        }
    }

    function getFirstDiagonalSum(numbers) {
        let sum = 0;
        for (let row = 0; row < numbers.length; row++) {
            for (let col = row; col < row + 1; col++) {
                sum += numbers[row][col];
            }
        }

        return sum;
    }

    function getSecondDiagonalSum(numbers) {
        let sum = 0;
        for (let row = 0; row < numbers.length; row++) {
            const currentRow = numbers[row];

            for (let col = currentRow.length - 1 - row; col > currentRow.length - 1 - row - 1; col--) {
                sum += numbers[row][col];
            }
        }

        return sum;
    }
}

solve(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']);
solve(['1 1 1',
    '1 1 1',
    '1 1 0']);