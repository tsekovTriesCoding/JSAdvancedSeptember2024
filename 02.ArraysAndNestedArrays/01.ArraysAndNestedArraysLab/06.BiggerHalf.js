function solve(array) {
    const halfSize = Math.floor(array.length / 2);
    const halfSortedArray = array.sort((a, b) => a - b).slice(halfSize, array.length);

    return halfSortedArray;
}

solve([4, 7, 2, 5]);
solve([3, 19, 14, 7, 2, 19, 6]);