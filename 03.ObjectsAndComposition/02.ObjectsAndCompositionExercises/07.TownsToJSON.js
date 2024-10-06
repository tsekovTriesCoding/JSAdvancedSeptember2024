function solve(input) {
    let towns = [];
    input.shift();

    for (let line of input) {
        line = line.split('|');

        const town = line[1].trim();
        const latitude = Number(line[2].trim());
        const longitude = Number(line[3].trim());

        towns.push({
            Town: town,
            Latitude: Number(latitude.toFixed(2)),
            Longitude: Number(longitude.toFixed(2)),
        });

    }

    console.log(JSON.stringify(towns));
}

// solve(['| Town | Latitude | Longitude |',

//     '| Sofia | 42.696552 | 23.32601 |',

//     '| Beijing | 39.913818 | 116.363625 |']);
solve(['| Town | Latitude | Longitude |',

    '| Veliko Turnovo | 43.0757 | 25.6172 |',

    '| Monatevideo | 34.50 | 56.11 |']);