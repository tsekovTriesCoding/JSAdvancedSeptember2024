function solve(num) {
    const sumOfDigits = num.toString().split('')
        .reduce((total, current) => {
            current = Number(current);
            return total + current;
        }, 0);

    const hasSameNumbers = function (number) {
        let numberDigits = number.toString().split('');
        const digit = numberDigits[0];

        return digit * numberDigits.length == sumOfDigits ? true : false;
    }

    console.log(hasSameNumbers(num));
    console.log(sumOfDigits);
}

solve(2222222);
solve(1234);
solve(1);
solve(111);