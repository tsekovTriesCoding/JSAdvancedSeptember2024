function solve(n, k) {
    let sequence = [1];

    for (let i = 1; i < n; i++) {
        let sum = 0;
        for (let y = i - k; y < i; y++) {
            const currentPrevNumber = sequence[y];

            if (currentPrevNumber) {
                sum += currentPrevNumber;
            }
        }
        sequence[i] = sum;
    }

    return sequence;
}

solve(6, 3);
solve(8, 2);