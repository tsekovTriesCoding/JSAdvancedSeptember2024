function solve(n, m) {
    let sum = 0;
    const num1 = Number(n);
    const num2 = Number(m);

    for (let i = num1; i <= num2; i++) {
        sum += i;
    }

    return sum;
}

const sum = solve('1', '5');
console.log(sum);

solve('1', '5');
solve('-8', '20');