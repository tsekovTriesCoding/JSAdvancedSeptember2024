function solve(input) {
    const evenPositionNumbers = input.filter((num, index) => index % 2 == 0);

    console.log(evenPositionNumbers.join(' '));
}

solve(['20', '30', '40', '50', '60']);
solve(['5', '10'] );