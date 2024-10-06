function solve(input) {
    let products = {}

    for (const line of input) {
        let [product, price] = line.split(' : ');
        price = Number(price);
        const startingLetter = product.charAt(0);

        if (!products.hasOwnProperty(startingLetter)) {
            products[startingLetter] = {};
        }

        products[startingLetter][product] = price;
    }

    let sortedProductLetters = Object.entries(products).sort((arr1, arr2) => arr1[0].localeCompare(arr2[0]));

    for (const [key, products] of sortedProductLetters) {
        console.log(key);

        Object.entries(products).sort((arr1, arr2) => arr1[0].localeCompare(arr2[0]))
            .forEach(entry => console.log(`  ${entry[0]}: ${entry[1]}`));
    }
}

solve(['Appricot : 20.4',

    'Fridge : 1500',

    'TV : 1499',

    'Deodorant : 10',

    'Boiler : 300',

    'Apple : 1.25',

    'Anti-Bug Spray : 15',

    'T-Shirt : 10']);