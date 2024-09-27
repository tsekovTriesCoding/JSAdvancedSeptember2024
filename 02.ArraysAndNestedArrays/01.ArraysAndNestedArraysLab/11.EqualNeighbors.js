function solve(matrix) {
    let equalPairsCount = 0;
    for (let row = 0; row < matrix.length; row++) {
        const currentRow = matrix[row];

        for (let i = 0; i < currentRow.length - 1; i++) {
            if (currentRow[i] == currentRow[i + 1]) {
                equalPairsCount++;
            }
        }
    }
    
    for (let row = 0; row < matrix.length - 1; row++) {
        const currentRow = matrix[row];
        const nextRow = matrix[row + 1];

        for (let i = 0; i < currentRow.length; i++) {
            if (currentRow[i] == nextRow[i]) {
                equalPairsCount++;
            }
        }
    }

    console.log(equalPairsCount);
}

solve([['2', '3', '4', '7', '0'],

['4', '0', '5', '3', '4'],

['2', '3', '5', '4', '2'],

['9', '8', '7', '5', '4']]);

solve([['test', 'yes', 'yo', 'ho'],

['well', 'done', 'yo', '6'],

['not', 'done', 'yet', '5']]);

solve([['2', '2', '5', '7', '4'],
['4', '0', '5', '3', '4'],
['2', '5', '5', '4', '2']]);