class RefurbishedSmartphones {
    constructor(retailer) {
        this.retailer = retailer;
        this.revenue = 0;
        this.availableSmartphones = [];
        this.soldSmartphones = [];
    }

    addSmartphone(model, storage, price, condition) {
        if (!model) {
            throw new Error('Invalid smartphone!');
        }

        if (!Number.isInteger(storage) || storage < 0) {
            throw new Error('Invalid smartphone!');
        }

        if (price < 0) {
            throw new Error('Invalid smartphone!');
        }

        if (!condition) {
            throw new Error('Invalid smartphone!');
        }

        const newSmartphone = {
            model,
            storage,
            price,
            condition,
        }

        this.availableSmartphones.push(newSmartphone);

        return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`;
    }

    sellSmartphone(model, desiredStorage) {
        const smartphoneToSell = this.availableSmartphones.find(phone => phone.model === model);

        if (!smartphoneToSell) {
            throw new Error(`${model} was not found!`);
        }

        const smartphoneToSellStorage = smartphoneToSell.storage;

        if (smartphoneToSellStorage < desiredStorage) {
            const storageDifference = desiredStorage - smartphoneToSellStorage;

            storageDifference <= 128 ? smartphoneToSell.price *= 0.9 : smartphoneToSell.price *= 0.8;
        }

        this.availableSmartphones.filter(phone => phone.model === model);

        const soldSmartphone = {
            model,
            storage: smartphoneToSellStorage,
            soldPrice: smartphoneToSell.price,
        }

        this.soldSmartphones.push(soldSmartphone);
        this.revenue += soldSmartphone.soldPrice;

        return `${model} was sold for ${soldSmartphone.soldPrice.toFixed(2)}$`;
    }

    upgradePhones() {
        if (this.availableSmartphones.length < 1) {
            throw new Error('There are no available smartphones!');
        }

        let output = ['Upgraded Smartphones:'];
        this.availableSmartphones.forEach(phone => {
            phone.storage *= 2;
            const message = `${phone.model} / ${phone.storage} GB / ${phone.condition} condition / ${phone.price.toFixed(2)}$`;

            output.push(message);
        });

        return output.join('\n');
    }

    salesJournal(criteria) {
        if (criteria !== 'storage' && criteria !== 'model') {
            throw new Error('Invalid criteria!');
        }

        const sorters = {
            'storage': (a, b) => b.storage - a.storage,
            'model': (a, b) => a.model.localeCompare(b.model),
        };

        let output = [`${this.retailer} has a total income of ${this.revenue.toFixed(2)}$`,
        `${this.soldSmartphones.length} smartphones sold:`
        ];

        this.soldSmartphones
            .sort(sorters[criteria])
            .forEach(phone => {
                const message = `${phone.model} / ${phone.storage} GB / ${phone.soldPrice.toFixed(2)}$`;
                output.push(message);
            });

        return output.join('\n');
    }
}

// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// console.log(retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good'));
// console.log(retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect'));
// console.log(retailer.addSmartphone('', 512, 1900, 'good'));

// let retailer = new RefurbishedSmartphones('SecondLife Devices'); 
// retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good'); 
// retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect'); 
// retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect'); 
// console.log(retailer.sellSmartphone('Samsung S20 Ultra', 256)); 
// console.log(retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256)); 
// console.log(retailer.sellSmartphone('Samsung Galaxy A13', 64));

// let retailer = new RefurbishedSmartphones('SecondLife Devices'); 
// retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good'); 
// retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect'); 
// retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect'); 
// console.log(retailer.upgradePhones());

let retailer = new RefurbishedSmartphones('SecondLife Devices');
retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
retailer.sellSmartphone('Samsung S20 Ultra', 256);
retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256);
console.log(retailer.salesJournal('model'));