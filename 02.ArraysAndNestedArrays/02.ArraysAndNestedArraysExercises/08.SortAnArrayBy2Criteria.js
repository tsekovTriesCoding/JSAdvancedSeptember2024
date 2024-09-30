function solve(array) {
    array.sort((a, b) => {
        if (a.length < b.length) return -1;
        if (a.length > b.length) return 1;

        if (a.localeCompare(b) == -1) return -1;
        if (a.localeCompare(b) == 1) return 1;

        return 0;
    });

    array.forEach(name => console.log(name));
}

solve(['alpha',

    'beta',

    'gamma']);
solve(['Isacc',

    'Theodor',

    'Jack',

    'Harrison',

    'George']);
solve(['test',

    'Deny',

    'omen',

    'Default']);