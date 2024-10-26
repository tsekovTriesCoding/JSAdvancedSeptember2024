class ShadyCarDealership {
    constructor(dealerName) {
        this.dealerName = dealerName;
        this.availableCars = [];
        this.soldCars = [];
        this.revenue = 0;
    }

    addCar(model, year, mileage, price) {
        if (!model) {
            throw new Error('Invalid car!');
        }

        if (year < 1950) {
            throw new Error('Invalid car!');
        }

        if (mileage < 0) {
            throw new Error('Invalid car!');
        }

        if (price < 0) {
            throw new Error('Invalid car!');
        }

        const car = {
            model,
            year,
            mileage,
            price
        };

        this.availableCars.push(car);

        return `New car added: ${model} (${year}) / ${mileage} km. - ${price.toFixed(2)}$`;
    }

    sellCar(model, desiredYear) {
        let foundCar = this.availableCars.find(car => car.model === model);

        if (!foundCar) {
            return (`${model} was not found!`);
        } else {
            let soldPrice = foundCar.price;
            if (foundCar.year >= desiredYear) {

            } else if (foundCar.year < desiredYear && desiredYear - foundCar.year <= 5) {
                soldPrice *= 0.9;
            } else if (foundCar.year < desiredYear && desiredYear - foundCar.year > 5) {
                soldPrice *= 0.8;
            }

            this.soldCars.push({ model: foundCar.model, year: foundCar.year, mileage: foundCar.mileage, soldPrice });
            this.availableCars = this.availableCars.filter(car => car.model !== model);
            this.revenue += soldPrice;
            return `${model} (${foundCar.year}) was sold for ${soldPrice.toFixed(2)}$`;
        }
    }

    prepareCarForSale(model) {
        const carToPrepare = this.availableCars.find(car => car.model === model);

        if (!carToPrepare) {
            return `${model} was not found for preparation!`;
        }

        carToPrepare.mileage *= 0.5;
        carToPrepare.price *= 1.3;

        return `${model} (${carToPrepare.year}) is prepared for sale with ${carToPrepare.mileage} km. - ${carToPrepare.price.toFixed(2)}$`;
    }

    salesJournal(criteria) {
        if (criteria !== 'year' && criteria !== 'model') {
            throw new Error(`Invalid criteria!`);
        }

        const sorters = {
            'year': (a, b) => b.year - a.year,
            'model': (a, b) => a.model.localeCompare(b.model),
        };

        let output = [`${this.dealerName} has a total income of ${this.revenue.toFixed(2)}$`,
        `${this.soldCars.length} cars sold:`
        ];

        this.soldCars
            .sort(sorters[criteria])
            .forEach(car => {
                const message = `${car.model} (${car.year}) / ${car.mileage} km. / ${car.soldPrice.toFixed(2)}$`;
                output.push(message);
            });

        return output.join('\n');
    }
}

// const dealership = new ShadyCarDealership('Shady Motors'); 
// console.log(dealership.addCar('Honda CR-V', 2010, 120000, 15000)); 
// console.log(dealership.addCar('VW Golf', 2011, 130000, 12000)); 
// console.log(dealership.addCar('BMW X3', 2005, 220000, 9000)); 
// console.log(dealership.addCar('Toyota Yaris', 2015, 80000, 18000));

// const dealership = new ShadyCarDealership('Shady Motors'); 
// console.log(dealership.addCar('Honda CR-V', 2010, 120000, 15000)); 
// console.log(dealership.addCar('VW Golf', 2011, 130000, 12000)); 
// console.log(dealership.addCar('BMW X3', 2005, 220000, 9000)); 
// console.log(dealership.addCar('Toyota Yaris', 2015, 80000, 18000));
// console.log(dealership.prepareCarForSale('Honda CR-V')); 
// console.log(dealership.prepareCarForSale('Honda Jazz')); 

// const dealership = new ShadyCarDealership('Shady Motors'); 
// console.log(dealership.addCar('Honda CR-V', 2010, 120000, 15000)); 
// console.log(dealership.addCar('BMW X3', 2005, 220000, 9000)); 
// console.log(dealership.addCar('Toyota Yaris', 2015, 80000, 18000)); 
// console.log(dealership.prepareCarForSale('Honda CR-V')); 
// console.log(dealership.prepareCarForSale('BMW X3')); 
// console.log(dealership.sellCar('Honda CR-V', 2012)); 
// console.log(dealership.sellCar('BMW X3', 2012)); 
// console.log(dealership.sellCar('Toyota Yaris', 2012));

const dealership = new ShadyCarDealership('Shady Motors');
console.log(dealership.addCar('Honda CR-V', 2010, 120000, 15000));
console.log(dealership.addCar('VW Golf', 2011, 130000, 12000));
console.log(dealership.addCar('BMW X3', 2005, 220000, 9000));
console.log(dealership.prepareCarForSale('Honda CR-V'));
console.log(dealership.prepareCarForSale('BMW X3'));
console.log(dealership.sellCar('Honda CR-V', 2012));
console.log(dealership.sellCar('BMW X3', 2012));
console.log(dealership.salesJournal('model'));