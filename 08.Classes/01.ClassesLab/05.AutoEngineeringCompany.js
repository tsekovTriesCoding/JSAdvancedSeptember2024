function solve(input) {
    class Car {
        constructor(brand, model) {
            this.brand = brand;
            this.model = model;
        }

        toString() {
            const modelsWithProducedTotalCars = Object.entries(this.model)
                .map(entry => {
                    return `###${entry[0]} -> ${entry[1]}\n`
                }).join('');
            return `${this.brand}\n${modelsWithProducedTotalCars}`;
        }
    }

    let cars = [];

    input.forEach(car => {
        let [brand, model, producedCars] = car.split(' | ');
        const carBrandExists = cars.some(car => car.brand === brand);

        if (!carBrandExists) {
            const carModelWithProducedeCars = {
                [model]: Number(producedCars),
            }

            const car = new Car(brand, carModelWithProducedeCars);
            cars.push(car);
        } else {
            let car = cars.find(car => car.brand === brand);

            if (!car.model.hasOwnProperty(model)) {
                car.model[model] = 0;
            }

            car.model[model] += Number(producedCars);
        }
    });

    console.log(cars.join(''));
}

solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);