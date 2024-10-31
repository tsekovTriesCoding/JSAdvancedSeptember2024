class Hotel {
    constructor(initialBudget) {
        this.initialBudget = initialBudget;
        this.roomAvailability = {};
        this.supplyStock = {};
    }

    restockSupplies(supplies) {
        let output = [];

        supplies.forEach(supply => {
            let [supplyName, supplyQuantity, supplyTotalPrice] = supply.split(' ');
            supplyQuantity = Number(supplyQuantity);
            supplyTotalPrice = Number(supplyTotalPrice);

            if (supplyTotalPrice <= this.initialBudget) {
                if (this.supplyStock.hasOwnProperty(supplyName)) {
                    this.supplyStock[supplyName] += supplyQuantity;
                    this.initialBudget -= supplyTotalPrice;
                } else {
                    this.supplyStock[supplyName] = supplyQuantity;
                    this.initialBudget -= supplyTotalPrice;
                }
                output.push(`Successfully stocked ${supplyQuantity} ${supplyName}`);
            } else {
                output.push(`There was not enough money to restock ${supplyQuantity} ${supplyName}`);
            }
        });

        return output.join('\n');
    }

    addRoomType(roomType, neededSupplies, pricePerNight) {
        if (!this.roomAvailability.hasOwnProperty(roomType)) {
            this.roomAvailability[roomType] = { neededSupplies, pricePerNight };

            return `Great idea! Now with the ${roomType}, we have ${Object.keys(this.roomAvailability).length} types of rooms available, any other ideas?`;
        }

        return `The ${roomType} is already available in our hotel, try something different.`;
    }

    showAvailableRooms() {
        if (!Object.keys(this.roomAvailability).length) {
            return 'Our rooms are not ready yet, please come back later...';
        }

        return Object.keys(this.roomAvailability)
            .map(key => `${key} - $ ${this.roomAvailability[key]['pricePerNight']}`)
            .join('\n');
    }

    bookRoom(roomType) {
        if (!this.roomAvailability.hasOwnProperty(roomType)) {
            return `There is no ${roomType} available, would you like to book another room?`;
        }

        const currentRoomSupplies = Object.values(this.roomAvailability[roomType])[0];

        for (const roomSupply of currentRoomSupplies) {
            const [supplyName, supplyQuantity] = roomSupply.split(' ');
            if (!this.supplyStock.hasOwnProperty(supplyName) || Number(supplyQuantity) > this.supplyStock[supplyName]) {
                return `We are currently unable to accommodate your request for ${roomType}, sorry for the inconvenience.`;
            }
        }

        return `Your booking for ${roomType} has been confirmed! The price is $${this.roomAvailability[roomType]['pricePerNight']} per night.`;
    }
}

// let hotel = new Hotel(500);
// console.log(hotel.restockSupplies(["Soap 100 50", "Towels 20 100", "Shampoo 50 75"]));

// let hotel = new Hotel(500);
// console.log(hotel.restockSupplies(["Soap 100 50", "Towels 20 100", "Shampoo 50 75"]));
// console.log(hotel.addRoomType("Deluxe Suite", ["Soap 5", "Towels 2"], 200));
// console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));
// console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));

// let hotel = new Hotel(500);
// console.log(hotel.restockSupplies(["Soap 100 50", "Towels 20 100", "Shampoo 50 75"]));
// console.log(hotel.addRoomType("Deluxe Suite", ["Soap 5", "Towels 2"], 200));
// console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));
// console.log(hotel.showAvailableRooms());

let hotel = new Hotel(500);
console.log(hotel.restockSupplies(["Soap 2 50", "Towels 20 100", "Shampoo 50 75"]));
console.log(hotel.addRoomType("Deluxe Suite", ["Soap 5", "Towels 2"], 200));
console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));
console.log(hotel.showAvailableRooms());
console.log(hotel.bookRoom("Apartment"));
console.log(hotel.bookRoom("Deluxe Suite"));