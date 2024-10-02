function solve(width, height) {
    let matrix = createMatrix(width, height);
    let row = 0;
    let col = 0;
    let endRow = width - 1;
    let endCol = height - 1;
    let counter = 1;

    while (col <= endCol && row <= endRow) {
        // Top row & middle value (Where col === endCol && row === endRow)
        for (let i = col; i <= endCol; i++) {
            matrix[row][i] = counter;
            counter++;
        }
        row++;

        // end column
        for (let i = row; i <= endRow; i++) {
            matrix[i][endCol] = counter;
            counter++;
        }
        endCol--;

        // end row
        for (let i = endCol; i >= col; i--) {
            matrix[endRow][i] = counter;
            counter++;
        }
        endRow--;

        // First col from end
        for (let i = endRow; i >= row; i--) {
            matrix[i][col] = counter;
            counter++;
        }
        col++;
    }

    printMatrix(matrix);

    function printMatrix(matrix) {
        console.log(matrix.map(row => row.join(' ')).join('\n'));
    }

    function createMatrix(width, height) {
        let matrix = [];

        for (let row = 0; row < width; row++) {
            matrix[row] = [];
            for (let col = 0; col < height; col++) {
                matrix[row][col] = 0;
            }

        }

        return matrix;
    }
}

// solve(5, 5);
solve(3, 3);