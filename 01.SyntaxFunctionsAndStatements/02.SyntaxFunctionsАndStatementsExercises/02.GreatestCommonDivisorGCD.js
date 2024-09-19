function solve(num1, num2) {
    // Euclidean algorithm:
    function gcd(num1, num2) {
        if (!num2) {
            return num1;
        }

        return gcd(num2, num1 % num2);
    }

    const result = gcd(num1, num2);

    console.log(result);
}

solve(15, 5);
solve(2154, 458);