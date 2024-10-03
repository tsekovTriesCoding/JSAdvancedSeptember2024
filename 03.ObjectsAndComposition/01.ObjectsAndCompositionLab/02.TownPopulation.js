function solve(input) {
    let towns = {};
    for (const line of input) {
        const [town, population] = line.split(' <-> ');

        if (towns[town]) {
            towns[town] += Number(population);
        } else {
            towns[town] = Number(population);
        }
    }

    Object.keys(towns).forEach(town => {
        console.log(`${town} : ${towns[town]}`);
    });
}

solve(['Sofia <-> 1200000',

    'Montana <-> 20000',

    'New York <-> 10000000',

    'Washington <-> 2345000',

    'Las Vegas <-> 1000000']);

solve(['Istanbul <-> 100000',

    'Honk Kong <-> 2100004',

    'Jerusalem <-> 2352344',

    'Mexico City <-> 23401925',

    'Istanbul <-> 1000']);