function solve(size = 5) {
    for (i = 0; i < size; i++) {
        const row = '* '.repeat(size);

        console.log(row.trim());
    }
}

solve(1);
solve(2);
solve(5);