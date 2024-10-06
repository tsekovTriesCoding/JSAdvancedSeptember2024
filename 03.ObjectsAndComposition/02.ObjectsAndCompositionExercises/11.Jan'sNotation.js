function solve(input) {
    let numbers = [];
    const operations = {
        '+': function (num1, num2) {
            return num1 + num2;
        },
        '-': function (num1, num2) {
            return num1 - num2;
        },
        '*': function (num1, num2) {
            return num1 * num2;
        },
        '/': function (num1, num2) {
            return num1 / num2;
        },

    }

    let element = input.shift();
    while (element != undefined) {
        if (typeof element == 'number') {
            numbers.push(Number(element));
        } else {
            if (numbers.length > 1) {
                let lastNum1 = numbers.pop();
                let lastNum2 = numbers.pop();

                const res = operations[element](lastNum2, lastNum1);
                numbers.push(res);
            } else {
                console.log('Error: not enough operands!');
                return;
            }
        }

        element = input.shift();
    }

    if (numbers.length > 1) {
        console.log('Error: too many operands! ');
    } else {
        console.log(numbers.join(''));
    }

}

// solve([3,

//     4,

//     '+']);
// solve([5,

//     3,

//     4, '*',

//     '-']);

// solve([7,

//     33,

//     8,

//     '-']);
solve([15,

    '/']);