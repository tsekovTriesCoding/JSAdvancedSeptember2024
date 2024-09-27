function solve(matrix) {
    let mainDiagonalSum = 0;
    for (let i = 0; i < matrix.length; i++) {

        const row = matrix[i];
        const mainDiagonalNum = row[i];
        mainDiagonalSum += mainDiagonalNum;
    }

    let secondaryDiagonalSum = 0;
    for (let i = 0; i < matrix.length; i++) {

        const row = matrix[i];
        const secondaryDiagonalNum = row[row.length - 1 - i];
        secondaryDiagonalSum += secondaryDiagonalNum;
    }

    console.log(mainDiagonalSum + ' ' + secondaryDiagonalSum);
}

solve([[20, 40],
[10, 60]]);

solve([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]);