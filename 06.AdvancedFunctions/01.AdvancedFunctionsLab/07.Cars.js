function solve(input) {
    let objects = {};

    for (const line of input) {
        const info = line.split(' ');
        const name = info[1];

        if (line.includes('inherit')) {
            const parentName = info[3];
            const parentObject = objects[parentName];
            objects[name] = Object.create(parentObject);

        } else if (line.includes('create')) {
            objects[name] = {};

        } else if (line.includes('set')) {
            const key = info[2];
            const value = info[3];

            objects[name][key] = value;
        } else {
            const wantedObject = objects[name];
            const entry = []
            for (const key in wantedObject) {
                entry.push(`${key}:${wantedObject[key]}`)
            }
            console.log(entry.join(","));
        }
    }
}

// function solve(input) {
//     const objects = {}

//     const commands = {
//         create: (n, inherits, n2) =>
//             (objects[n] = inherits ? Object.create(objects[n2]) : {}),
//         set: (n, k, v) => (objects[n][k] = v),
//         print: n => {
//             const entry = []
//             for (const key in objects[n]) {
//                 entry.push(`${key}:${objects[n][key]}`)
//             }
//             console.log(entry.join(", "))
//         },
//     }

//     input.forEach(x => {
//         const [c, n, k, v] = x.split(" ")

//         commands[c](n, k, v)
//     })
// }

solve(['create c1',

    'create c2 inherit c1',

    'set c1 color red',

    'set c2 model new',

    'print c1',

    'print c2']);