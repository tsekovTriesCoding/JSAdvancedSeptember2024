function solve(array) {
    let initialNumber = 1;
    let numbers = [];
    array.forEach(command => {
        if (command == 'add') {
            numbers.push(initialNumber);
        } else {
            numbers.pop();
        }

        initialNumber++;
    });

    if (numbers.length < 1) {
        console.log('Empty');
    } else {
        numbers.forEach(num => console.log(num));
    }
}

solve(['add',

    'add',

    'add',

    'add']);

solve(['add',

    'add',

    'remove',

    'add',

    'add']);

solve(['remove',

    'remove',

    'remove']);