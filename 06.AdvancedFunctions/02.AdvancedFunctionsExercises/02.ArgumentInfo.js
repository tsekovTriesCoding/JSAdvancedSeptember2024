function solve(...input) {
    let tally = {};

    input.forEach(line => {
        console.log(`${typeof line}: ${line}`);

        if (!tally.hasOwnProperty(typeof line)) {
            tally[typeof line] = 0;
        }

        tally[typeof line] += 1;
    });

    Object.entries(tally)
        .sort((arr1, arr2) => arr2[1] - arr1[1])
        .forEach(entry => {
            console.log(`${entry[0]} = ${entry[1]}`);
        });
}

solve('cat', 42, function () { console.log('Hello world!'); });
solve({ name: 'bob' }, 3.333, 9.999);