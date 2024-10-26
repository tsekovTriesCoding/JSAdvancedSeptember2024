class BikeRentalService {
    constructor(name, location) {
        this.name = name;
        this.location = location;
        this.availableBikes = [];
    }

    addBikes(bikes) {
        let addedBrands = [];

        bikes.forEach(bikeInfo => {
            const [brand, quantity, price] = bikeInfo.split('-');

            const availableBike = this.availableBikes.find(b => b.brand === brand);

            if (availableBike) {
                availableBike.quantity += Number(quantity);

                if (availableBike.price < Number(price)) {
                    availableBike.price = Number(price);
                }
            } else {
                const bike = {
                    brand,
                    quantity: Number(quantity),
                    price: Number(price),
                };

                this.availableBikes.push(bike);
                addedBrands.push(brand);
            }
        });

        return `Successfully added ${addedBrands.join(', ')}`;
    }

    rentBikes(selectedBikes) {
        let totalPrice = 0;
        let result = '';

        selectedBikes.forEach(bikeInfo => {
            const [brand, quantity] = bikeInfo.split('-');

            const availableBike = this.availableBikes.find(b => b.brand === brand);

            if (!availableBike || availableBike.quantity < quantity) {
                result = 'Some of the bikes are unavailable or low on quantity in the bike rental service.';
                return;
            }

            totalPrice += availableBike.price * quantity;
            availableBike.quantity -= Number(quantity);
        });

        if (result) {
            return result;
        }

        return `Enjoy your ride! You must pay the following amount $${totalPrice.toFixed(2)}.`;
    }

    returnBikes(returnedBikes) {
        let result = '';

        returnedBikes.forEach(bikeInfo => {
            const [brand, quantity] = bikeInfo.split('-');

            if (!this.availableBikes.some(bike => bike.brand === brand)) {
                result = 'Some of the returned bikes are not from our selection.';
                return;
            }

            this.availableBikes.find(b => b.brand === brand).quantity += Number(quantity);
        });

        if (result) {
            return result;
        }

        return 'Thank you for returning!';
    }

    revision() {
        let output = ['Available bikes:'];

        this.availableBikes
            .sort((a, b) => a.price - b.price)
            .forEach(bike => {
                const message = `${bike.brand} quantity:${bike.quantity} price:$${bike.price}`;
                output.push(message);
            });

        output.push(`The name of the bike rental service is ${this.name}, and the location is ${this.location}.`);

        return output.join('\n');
    }
}

// const rentalService = new BikeRentalService("MyBikes", "CityCenter"); 
// console.log(rentalService.addBikes(["Mountain Bike-5-150", "City Bike-10-100", "Electric Bike-3-200", "Electric Bike-8-400"]));

// const rentalService = new BikeRentalService("MyBikes", "CityCenter");
// console.log(rentalService.addBikes(["Mountain Bike-5-150", "City Bike-10-100", "Electric Bike-3-200", "Electric Bike-8-400"]));
// console.log(rentalService.rentBikes(["Mountain Bike-2", "City Bike-5"]));

// const rentalService = new BikeRentalService("MyBikes", "CityCenter");
// console.log(rentalService.addBikes(["Mountain Bike-5-150", "City Bike-10-100", "Electric Bike-3-200", "Electric Bike-8-400"]));
// console.log(rentalService.rentBikes(["Mountain Bike-2", "City Bike-5", "Stunt Bike-5"]));
// console.log(rentalService.returnBikes(["Mountain Bike-1", "City Bike-3", "Race Bike-5"]));
// console.log(rentalService.revision());

const rentalService = new BikeRentalService("MyBikes", "CityCenter"); 
console.log(rentalService.addBikes(["Mountain Bike-5-150", "City Bike-10-100", "Electric Bike-3-200", "Electric Bike-8-400"])); 
console.log(rentalService.rentBikes(["Mountain Bike-5", "City Bike-5"])); 
console.log(rentalService.returnBikes(["Mountain Bike-1", "City Bike-3"])); 
console.log(rentalService.revision());