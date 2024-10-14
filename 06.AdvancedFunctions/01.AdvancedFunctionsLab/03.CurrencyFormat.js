function currencyFormatter(separator, symbol, symbolFirst, value) {

    let result = Math.trunc(value) + separator;

    result += value.toFixed(2).substr(-2, 2);

    if (symbolFirst) return symbol + ' ' + result;

    else return result + ' ' + symbol;
}

function createFormatter(separator, symbol, symbolFirst, currencyFormatter) {
    return currencyFormatter.bind(null, separator, symbol, symbolFirst);
}

// Function wrapper
function createFormatter2(separator, symbol, symbolFirst) {
    return function (value) {
        return currencyFormatter(separator, symbol, symbolFirst, value)
    }
}

// Function wrapper with arrow function
const createFormatter3 = (separator, symbol, symbolFirst) => (value) =>
    currencyFormatter(separator, symbol, symbolFirst, value);

// Curry currency fomatter
const curryCurrency = separator => symbol => symbolFirst => value => currencyFormatter(separator, symbol, symbolFirst, value);

let dollarFormatter = createFormatter(',', '$', true, currencyFormatter);

console.log(dollarFormatter(5345));   // $ 5345,00 

console.log(dollarFormatter(3.1429)); // $ 3,14 

console.log(dollarFormatter(2.709)); // $ 2,71