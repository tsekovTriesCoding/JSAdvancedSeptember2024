class FashionRetailInventory {
    constructor(storehouse, location) {
        this.storehouse = storehouse;
        this.location = location;
        this.productStock = [];
    }

    addProduct(productName, size, quantity, price) {
        if (this.productStock.some(p => p.productName === productName && p.size === size)) {
            const existingProduct = this.productStock.find(p => p.productName === productName && p.size === size);
            existingProduct.quantity += quantity;

            return `You added ${quantity} more pieces of product ${productName} size ${size}`;
        }

        const product = {
            productName,
            size,
            quantity,
            price
        };

        this.productStock.push(product);

        return `The product ${productName}, size ${size} was successfully added to the inventory`;
    }

    sendProduct(productName, size) {
        if (!this.productStock.some(p => p.productName === productName && p.size === size)) {
            throw new Error(`The product ${productName}, size ${size} is not in the inventory`);
        }

        this.productStock = this.productStock.filter(p => p.productName !== productName && p.size !== size);

        return `The product ${productName}, size ${size} was successfully removed from the inventory`;
    }

    findProductsBySize(size) {
        const wantedProductsBySize = this.productStock.filter(p => p.size === size);

        if (wantedProductsBySize.length) {
            return wantedProductsBySize
                .map(p => {
                    return `${p.productName}-${p.quantity} pieces`;
                })
                .join(', ');
        } else {
            return `There are no products available in that size`;
        }
    }

    listProducts() {
        if (!this.productStock.length) {
            return `${this.storehouse} storehouse is empty`;
        }

        let output = [`${this.storehouse} storehouse in ${this.location} available products:`];

        this.productStock
            .sort((a, b) => a.productName.localeCompare(b.productName))
            .forEach(p => {
                const message = `${p.productName}/Size:${p.size}/Quantity:${p.quantity}/Price:${p.price}$`;
                output.push(message);
            });

        return output.join('\n');
    }
}

// const storeHouse = new FashionRetailInventory("East", "Milano");
// console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("Sweather", "M", 10, 25.0));
// console.log(storeHouse.addProduct("Sweather", "M", 10, 25.0));

// const storeHouse = new FashionRetailInventory("East", "Milano");
// console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
// console.log(storeHouse.sendProduct("T-Shirt", "M"));
// console.log(storeHouse.sendProduct("Sweather", "M"));

// const storeHouse = new FashionRetailInventory("East", "Milano");
// console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
// console.log(storeHouse.findProductsBySize("M"));
// console.log(storeHouse.findProductsBySize("XL"));

const storeHouse = new FashionRetailInventory("East", "Milano");
console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("Shirt", "L", 5, 30.0));
console.log(storeHouse.addProduct("Shoes", "9", 8, 50.0));
console.log(storeHouse.sendProduct("Shoes", "9", 8, 50.0));
console.log(storeHouse.listProducts());