function solve(speed, area) {
    const speedLimit = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20,
    }

    const currentAreaSpeedLimit = speedLimit[area];

    if (speed <= currentAreaSpeedLimit) {
        console.log(`Driving ${speed} km/h in a ${currentAreaSpeedLimit} zone`);
    } else {
        let status = null;

        const speedDiff = speed - currentAreaSpeedLimit;

        if (speedDiff <= 20) {
            status = 'speeding';
        } else if (speedDiff <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }

        console.log(`The speed is ${speedDiff} km/h faster than the allowed speed of ${currentAreaSpeedLimit} - ${status}`);
    }
}

solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');