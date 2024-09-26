function solve(pieFlavors, flavor1, flavor2) {
    const indexOfFlavor1 = pieFlavors.indexOf(flavor1);
    const indexOfFlavor2 = pieFlavors.indexOf(flavor2);

    const newFlavors = pieFlavors.slice(indexOfFlavor1, indexOfFlavor2 + 1);

    return newFlavors;
}

solve(['Pumpkin Pie',

    'Key Lime Pie',

    'Cherry Pie',

    'Lemon Meringue Pie',

    'Sugar Cream Pie'],

    'Key Lime Pie',

    'Lemon Meringue Pie');
solve(['Apple Crisp',

    'Mississippi Mud Pie',

    'Pot Pie',

    'Steak and Cheese Pie',

    'Butter Chicken Pie',

    'Smoked Fish Pie'],

    'Pot Pie',

    'Smoked Fish Pie');