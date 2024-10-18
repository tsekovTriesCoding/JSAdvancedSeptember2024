function solve(array, startIndex, endIndex) {
    if (!Array.isArray(array)) {
        return NaN;
    }
    if (startIndex < 0) {
        startIndex = 0
    }

    if (endIndex > array.length - 1) {
        endIndex = array.length - 1;
    }
    
    const numbersToTake = array.splice(startIndex, endIndex + 1);
    return numbersToTake.reduce((sum, num) => {
        return sum += Number(num);
    }, 0);
}

const res = solve([10, 20, 30, 40, 50, 60], 3, 300);
console.log(res);

