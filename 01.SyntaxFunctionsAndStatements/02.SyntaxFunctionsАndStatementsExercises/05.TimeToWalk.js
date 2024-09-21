function solve(stepsCount, footprintLength, speed) {
    const metersWalked = stepsCount * footprintLength;
    const bonusMinutes = Math.floor(metersWalked / 500);
    const time = (metersWalked / 1000) / speed;

    const totalTime = ((time * 3600) +(bonusMinutes * 60 )).toFixed(2);

    let hours = totalTime / 3600;
    let wholeHours = Math.floor(hours);

    let minutes = (hours - wholeHours) * 60;
    let wholeMinutes = Math.floor(minutes);

    let seconds = Math.round((minutes - wholeMinutes) * 60);

    wholeHours = wholeHours < 10 ? '0' + wholeHours : wholeHours;
    wholeMinutes = wholeMinutes < 10 ? '0' + wholeMinutes : wholeMinutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    console.log(`${wholeHours}:${wholeMinutes}:${seconds}`);
}

solve(4000, 0.60, 5);
solve(2564, 0.70, 5.5);