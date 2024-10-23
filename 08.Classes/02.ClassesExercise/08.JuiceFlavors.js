function solve(input) {
    let juices = new Map;
    let juiceBottles = new Map;

    for (let line of input) {
        let [juice, quantity] = line.split(' => ');

        if (!juices.has(juice)) {
            juices.set(juice, 0);
        }

        juices.set(juice, juices.get(juice) + Number(quantity));

        if (juices.get(juice) >= 1000) {
            const juiceBottle = parseInt(juices.get(juice) / 1000);

            if (!juiceBottles.has(juice)) {
                juiceBottles.set(juice, 0);
            }

            juiceBottles.set(juice, juiceBottles.get(juice) + juiceBottle);
            juices.set(juice, juices.get(juice) - juiceBottle * 1000);
        }
    }

    for (const [juice, bottlesCount] of juiceBottles) {
        console.log(`${juice} => ${bottlesCount}`);
    }
}

solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']);

solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']);