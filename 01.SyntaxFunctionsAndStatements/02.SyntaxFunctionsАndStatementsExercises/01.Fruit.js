function solve(fruit, weightInGrams, pricePerKilogram) {
    const kilograms = weightInGrams / 1000;
    const totalPrice = kilograms * pricePerKilogram;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${fruit}.`);
}

solve('orange', 2500, 1.80 );
solve('apple', 1563, 2.35 );