class OnlineShop {
    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = [];
    }

    loadingStore(product, quantity, spaceRequired) {
        if (spaceRequired >= this.warehouseSpace) {
            throw new Error('Not enough space in the warehouse.');
        }

        const productToAdd = {
            product,
            quantity
        };

        this.products.push(productToAdd);
        this.warehouseSpace -= spaceRequired;


        return `The ${product} has been successfully delivered in the warehouse.`;
    }

    quantityCheck(product, minimalQuantity) {
        const productToCheck = this.products.find(p => p.product === product);

        if (!productToCheck) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }

        if (minimalQuantity < 0) {
            throw new Error('The quantity cannot be zero or negative.');
        }

        if (minimalQuantity <= productToCheck.quantity) {
            return `You have enough from product ${product}.`;
        } else {
            const diff =minimalQuantity - productToCheck.quantity;
            productToCheck.quantity = minimalQuantity;

            return `You added ${diff} more from the ${product} products.`;
        }
    }

    sellProduct(product) {
        const productToSell = this.products.find(p => p.product === product);

        if (!productToSell) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }

        productToSell.quantity--;

        const soldProduct = {
            product,
            quantity: 1
        };

        this.sales.push(soldProduct);

        return `The ${product} has been successfully sold.`;
    }

    revision() {
        if (!this.sales.length) {
            throw new Error('There are no sales today!');
        }

        let output = [
            `You sold ${this.sales.length} products today!`,
            'Products in the warehouse:'
        ];

        this.products
            .forEach(p => {
                const message = `${p.product}-${p.quantity} more left`;
                output.push(message);
            });

            return output.join('\n');
    }
}

// const myOnlineShop = new OnlineShop(500) 
// console.log(myOnlineShop.loadingStore('headphones', 10, 200)); 
// console.log(myOnlineShop.loadingStore('laptop', 5, 200)); 
// console.log(myOnlineShop.loadingStore('TV', 40, 500));

// const myOnlineShop = new OnlineShop(500) 
// console.log(myOnlineShop.loadingStore('headphones', 10, 200)); 
// console.log(myOnlineShop.loadingStore('laptop', 5, 200)); 
// console.log(myOnlineShop.quantityCheck('headphones', 10)); 
// console.log(myOnlineShop.quantityCheck('laptop', 10)); 
// console.log(myOnlineShop.quantityCheck('TV', 40,));

// const myOnlineShop = new OnlineShop(500) 
// console.log(myOnlineShop.loadingStore('headphones', 10, 200)); 
// console.log(myOnlineShop.loadingStore('laptop', 5, 200)); 
// console.log(myOnlineShop.quantityCheck('headphones', 10)); 
// console.log(myOnlineShop.quantityCheck('laptop', 10)); 
// console.log(myOnlineShop.sellProduct('headphones')); 
// console.log(myOnlineShop.sellProduct('laptop')); 
// console.log(myOnlineShop.sellProduct('keyboard'));

const myOnlineShop = new OnlineShop(500) 
console.log(myOnlineShop.loadingStore('headphones', 10, 200)); 
console.log(myOnlineShop.loadingStore('laptop', 5, 200)); 
console.log(myOnlineShop.quantityCheck('headphones', 10)); 
console.log(myOnlineShop.quantityCheck('laptop', 10)); 
console.log(myOnlineShop.sellProduct('headphones')); 
console.log(myOnlineShop.sellProduct('laptop')); 
console.log(myOnlineShop.revision());