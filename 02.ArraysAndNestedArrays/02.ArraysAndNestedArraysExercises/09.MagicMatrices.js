function solve(matrix) {
    let isMagical = true;
    let rowSums = matrix.map(r => r.reduce((a, b) => a + b));
    let colSums = matrix.reduce((a, b) => a.map((x, i) => x + b[i]));

    for (let i = 0; i < rowSums.length - 1; i++) {
        if (rowSums[i] != rowSums[i + 1]) {
            isMagical = false;
            break;
        }
    }

    for (let i = 0; i < colSums.length - 1; i++) {
        if (colSums[i] != colSums[i + 1]) {
            isMagical = false;
            break;
        }
    }

    console.log(isMagical);
}

solve([[4, 5, 6],

[6, 5, 4],

[5, 5, 5]]);
solve([[11, 32, 45],

[21, 0, 1],

[21, 1, 1]]);
solve([[1, 0, 0],

[0, 0, 1],

[0, 1, 0]]);