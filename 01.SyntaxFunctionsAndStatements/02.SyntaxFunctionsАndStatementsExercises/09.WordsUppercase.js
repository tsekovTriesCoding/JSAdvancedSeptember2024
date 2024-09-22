function solve(input) {
    const words = input.match(/\w+/g);

    console.log(words.join(', ').toUpperCase());
}

solve('Hi, how are you?');
solve('hello');