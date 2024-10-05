function solve(input) {
    let heroes = [];

    for (const line of input) {
        let [name, level, items] = line.split(' / ');

        if (!name) {
            continue;
        }
        
        items = items ? items.split(', ') : [];

        const hero = {
            name,
            level: Number(level),
            items: items,
        }

        heroes.push(hero);
    }

    console.log(JSON.stringify(heroes));
}

solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);
solve(['Jake / 1000 / Gauss, HolidayGrenade']);