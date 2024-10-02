function solve(numbers) {
    const width = numbers[0];
    const height = numbers[1];
    let x = numbers[2];
    let y = numbers[3];

    let matrix = createMatrix(width, height);

    for (let row = 0; row < width; row++) {
        for (let col = 0; col < height; col++) {
            matrix[row][col] = Math.max(Math.abs(row - x), Math.abs(col - y)) + 1;
        }
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

solve([4, 4, 0, 0]);
solve([5, 5, 2, 2]);
solve([3, 3, 2, 2]);