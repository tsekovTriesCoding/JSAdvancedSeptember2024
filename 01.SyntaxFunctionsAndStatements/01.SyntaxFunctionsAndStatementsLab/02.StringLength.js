function solve(string1, string2, string3) {
    const sumOfLengths = string1.length + string2.length + string3.length;
    const avgLength = Math.floor(sumOfLengths / 3);

    console.log(sumOfLengths);
    console.log(avgLength);
}

solve('chocolate', 'ice cream', 'cake');
solve('pasta', '5', '22.3');