function solve(array) {
    array.sort((a, b) => a - b);

    const firstSmallestNum = array[0];
    const secondSmallestNum = array[1];

    console.log(firstSmallestNum + ' ' + secondSmallestNum);
}

solve([30, 15, 50, 5]);
solve([3, 0, 10, 4, 7, 3]);