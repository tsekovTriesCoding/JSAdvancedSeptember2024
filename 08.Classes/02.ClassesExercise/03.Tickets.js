function solve(input, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }

        static sort(tickets, criteria) {
            criteria == 'price' ? tickets.sort((a, b) => a[criteria] - b[criteria]) : tickets.sort((a, b) => a[criteria].localeCompare(b[criteria]));
        }
    }

    let tickets = [];
    for (const line of input) {
        [destination, price, status] = line.split('|');

        const ticket = new Ticket(destination, Number(price), status);
        tickets.push(ticket);
    }

    Ticket.sort(tickets, criteria);
    return tickets;
}

solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination');