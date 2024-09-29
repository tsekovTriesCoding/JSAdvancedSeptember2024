function solve(names) {
    let index = 1;
    names.sort((a, b) => a.localeCompare(b))
        .forEach(name => {
            console.log(`${index++}.${name}`);
        });
}

solve(["John", "Bob", "Christina", "Ema"]);