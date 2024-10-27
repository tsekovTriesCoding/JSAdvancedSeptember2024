class FlightBookingSystem {
    constructor(agencyName) {
        this.agencyName = agencyName;
        this.flights = [];
        this.bookings = [];
        this.bookingsCount = 0;
    }

    addFlight(flightNumber, destination, departureTime, price) {
        if (this.flights.some(flight => flight.flightNumber === flightNumber)) {
            return `Flight ${flightNumber} to ${destination} is already available.`;
        }

        const flight = {
            flightNumber,
            destination,
            departureTime,
            price
        };

        this.flights.push(flight);

        return `Flight ${flightNumber} to ${destination} has been added to the system.`;
    }

    bookFlight(passengerName, flightNumber) {
        if (!this.flights.some(flight => flight.flightNumber === flightNumber)) {
            return `Flight ${flightNumber} is not available for booking.`
        }

        const booking = {
            passengerName,
            flightNumber
        };

        this.bookings.push(booking);
        this.bookingsCount++;

        return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`;
    }

    cancelBooking(passengerName, flightNumber) {
        if (!this.bookings.some(booking => booking.passengerName === passengerName && booking.flightNumber === flightNumber)) {
            throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`);
        }

        this.bookings = this.bookings.
            filter(booking => booking.passengerName !== passengerName && booking.flightNumber !== flightNumber);

        this.bookingsCount--;

        return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
    }

    showBookings(criteria) {
        if (!this.bookings.length) {
            throw new Error(`No bookings have been made yet.`);
        }

        let output = [];
        if (criteria === 'all') {
            output.push(`All bookings(${this.bookingsCount}):`);

            this.bookings.forEach(booking => {
                const message = `${booking.passengerName} booked for flight ${booking.flightNumber}.`;

                output.push(message);
            });
        } else if (criteria === 'cheap') {
            const cheapBookings = this.bookings.filter(booking => {
                const flight = this.flights.find(f => f.flightNumber === booking.flightNumber);
                return flight.price <= 100;
            });

            if (!cheapBookings.length) {
                output.push('No cheap bookings found.');
            } else {
                output.push('Cheap bookings:');
                cheapBookings.forEach(booking => {
                    const message = `${booking.passengerName} booked for flight ${booking.flightNumber}.`;
                    output.push(message);
                });
            }
        } else if (criteria === 'expensive') {
            const expensiveBookings = this.bookings.filter(booking => {
                const flight = this.flights.find(f => f.flightNumber === booking.flightNumber);
                return flight.price > 100;
            });

            if (!expensiveBookings.length) {
                output.push('No expensive bookings found.');
            } else {
                output.push('Expensive bookings:');
                expensiveBookings.forEach(booking => {
                    const message = `${booking.passengerName} booked for flight ${booking.flightNumber}.`;
                    output.push(message);
                });
            }
        }

        return output.join('\n');
    }
}

// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.addFlight("CC303", "Chicago", "11:45 AM", 120));
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250)); 

// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.bookFlight("Alice", "AA101"));
// console.log(system.bookFlight("Bob", "BB202"));
// console.log(system.bookFlight("Charlie", "CC303")); 

// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.bookFlight("Alice", "AA101"));
// console.log(system.bookFlight("Bob", "BB202"));
// console.log(system.cancelBooking("Alice", "AA101"));

// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.bookFlight("Alice", "AA101"));
// console.log(system.bookFlight("Bob", "BB202"));
// console.log(system.showBookings("all"));

const system = new FlightBookingSystem("TravelWorld");
console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
console.log(system.bookFlight("Alice", "AA101"));
console.log(system.bookFlight("Bob", "BB202"));
console.log(system.showBookings("expensive"));
console.log(system.showBookings("cheap"));