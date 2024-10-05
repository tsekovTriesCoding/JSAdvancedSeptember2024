function solve(car) {
    let resultCar = {
        model: car.model,
        engine: undefined,
        carriage: undefined,
        wheels: undefined,
    }

    const engineEnum = {
        smallEngine: { power: 90, volume: 1800 },
        normalEngine: { power: 120, volume: 2400 },
        monsterEngine: { power: 200, volume: 3500 },
    }

    if (car.power <= 90) {
        resultCar.engine = engineEnum.smallEngine;
    } else if (car.power <= 120) {
        resultCar.engine = engineEnum.normalEngine;
    } else {
        resultCar.engine = engineEnum.monsterEngine;
    }

    if (car.carriage == 'hatchback') {
        resultCar.carriage = { type: 'hatchback', color: car.color }
    } else if (car.carriage == 'coupe') {
        resultCar.carriage = { type: 'coupe', color: car.color }
    }

    if (car.wheelsize % 2 == 0) {
        car.wheelsize -= 1;
    }

    resultCar.wheels = new Array(4).fill(car.wheelsize);

    return resultCar;
}

console.log(solve({
    model: 'VW Golf II',

    power: 90,

    color: 'blue',

    carriage: 'hatchback',

    wheelsize: 14
}));