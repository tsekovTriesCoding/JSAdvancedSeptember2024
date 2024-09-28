function solve(array, number) {
    let nthElements = [];
    for (let i = 0; i < array.length; i += number) {
        nthElements.push(array[i]);
    }

    return nthElements;
}

solve(['5',

    '20',

    '31',

    '4',

    '20'],

    2);

solve(['dsa',

    'asd',

    'test',

    'tset'],

    2);

solve(['1',

    '2',

    '3',

    '4',

    '5'],

    6);