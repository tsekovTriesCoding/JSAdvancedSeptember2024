function solution() {
    let microelements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }

    let recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
    }

    return function managment(input) {
        let [command, argument, quantity] = input.split(' ');
        quantity = Number(quantity)

        if (command === 'restock') {
            microelements[argument] = quantity;
            return 'Success';
        } else if (command === 'prepare') {
            const recipeNeededMicroelements = recipes[argument];
            const [canMake, microelement] = hasAllNeededMicroelementsQuantitites(recipeNeededMicroelements, quantity);

            if (!canMake) {
                return `Error: not enough ${microelement} in stock`;
            }

            for (const microelement in recipeNeededMicroelements) {
                const microelementAmountNeeded = recipeNeededMicroelements[microelement] * quantity;
                microelements[microelement] -= microelementAmountNeeded;
            }

            return 'Success';
        } else {
            return Object.keys(microelements).map(key => {
                return `${key}=${microelements[key]}`
            }).join(' ');
        }

    }

    function hasAllNeededMicroelementsQuantitites(recipeNeededMicroelements, quantity) {
        for (const microelement in recipeNeededMicroelements) {
            const microelementAmountNeeded = recipeNeededMicroelements[microelement] * quantity;

            if (microelementAmountNeeded > microelements[microelement]) {
                unsuffiecientNutrient = microelement;
                return [false, microelement];
            }
        }

        return [true,];
    }
}

// let manager = solution();
// console.log(manager("restock flavour 50")); // Success  
// console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock
// console.log(manager("restock carbohydrate 10"));
// console.log(manager("restock flavour 10 "));
// console.log(manager("prepare apple 1 "));
// console.log(manager("restock fat 10 "));
// console.log(manager("prepare burger 1 "));
// console.log(manager("report"));

let manager = solution();
console.log(manager("prepare turkey 1"));
console.log(manager("restock protein 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("report"));

