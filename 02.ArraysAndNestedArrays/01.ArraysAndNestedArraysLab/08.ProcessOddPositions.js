function solve(numbers) {
    numbers.filter((num, index) => index % 2 != 0)
        .reverse()
        .forEach(num => {
            num *= 2;
            console.log(num);
        });
}

solve([10, 15, 20, 25]);
solve([3, 0, 10, 4, 7, 3]);