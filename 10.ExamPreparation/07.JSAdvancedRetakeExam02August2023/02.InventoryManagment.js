class InventoryManager {
    constructor(capacity) {
        this.capacity = capacity;
        this.items = [];
        this.outOfStock = [];
    }

    addItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error('Quantity must be greater than zero.');
        }

        if (this.items.length === this.capacity) {
            throw new Error('The inventory is already full.');
        }

        if (this.items.some(item => item.itemName === itemName)) {
            this.items.find(item => item.itemName === itemName).quantity += quantity;
        } else {
            const item = {
                itemName,
                quantity
            }

            this.items.push(item);

            return `Added ${quantity} ${itemName}(s) to the inventory.`;
        }
    }

    sellItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error('Quantity must be greater than zero.');
        }

        if (!this.items.some(item => item.itemName === itemName)) {
            throw new Error(`The item ${itemName} is not available in the inventory.`);
        }

        const currentItem = this.items.find(item => item.itemName === itemName);

        if (currentItem.quantity < quantity) {
            throw new Error(`Not enough ${itemName}(s) in stock.`);
        }

        currentItem.quantity -= quantity;

        if (currentItem.quantity === 0) {
            this.items = this.items.filter(item => item.itemName !== itemName);

            this.outOfStock.push(itemName);
        }

        return `Sold ${quantity} ${itemName}(s) from the inventory.`;
    }

    restockItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error('Quantity must be greater than zero.');
        }

        if (this.items.some(item => item.itemName === itemName)) {
            this.items.find(item => item.itemName === itemName).quantity += quantity;
        } else {
            const newItem = {
                itemName,
                quantity
            }

            this.items.push(newItem);
        }

        if (this.outOfStock.includes(itemName)) {
            this.outOfStock = this.outOfStock.filter(item => item.itemName !== itemName);
        }

        return `Restocked ${quantity} ${itemName}(s) in the inventory.`;
    }

    getInventorySummary() {
        let output = ['Current Inventory:'];

        this.items.forEach(item => {
            const message = `${item.itemName}: ${item.quantity}`;

            output.push(message);
        });

        if (this.outOfStock.length) {
            const message = `Out of Stock: ${this.outOfStock.join(', ')}`;
            output.push(message);
        }

        return output.join('\n');
    }
}

// const manager = new InventoryManager(2);
// console.log(manager.addItem("Drill", 10));
// console.log(manager.addItem("Hammer", 5));
// console.log(manager.addItem("Level", 3));

// const manager = new InventoryManager(3); 
// console.log(manager.addItem("Drill", 10)); 
// console.log(manager.addItem("Hammer", 5)); 
// console.log(manager.addItem("Chisel", 3)); 
// console.log(manager.sellItem("Drill", 3));  
// console.log(manager.sellItem("Paintbrush", 2)); 

// const manager = new InventoryManager(3); 
// console.log(manager.addItem("Drill", 10)); 
// console.log(manager.addItem("Hammer", 5)); 
// console.log(manager.addItem("Chisel", 3)); 
// console.log(manager.sellItem("Drill", 3));  
// console.log(manager.restockItem("Drill", 5)); 
// console.log(manager.restockItem("Paintbrush", 1));

const manager = new InventoryManager(3); 
console.log(manager.addItem("Drill", 10)); 
console.log(manager.addItem("Hammer", 5)); 
console.log(manager.addItem("Chisel", 3)); 
console.log(manager.sellItem("Drill", 3)); 
console.log(manager.sellItem("Hammer", 5));  
console.log(manager.restockItem("Drill", 5)); 
console.log(manager.restockItem("Paintbrush", 1)); 
console.log(manager.getInventorySummary());