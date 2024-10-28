class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle(wineName, wineType, price) {
        if (this.wines.length >= this.space) {
            throw new Error('Not enough space in the cellar.');
        }

        const wine = {
            wineName,
            wineType,
            price,
            paid: false
        };

        this.wines.push(wine);

        return `You reserved a bottle of ${wineName} ${wineType} wine.`;
    }

    payWineBottle(wineName, price) {
        const wineToPay = this.wines.find(w => w.wineName === wineName);

        if (!wineToPay) {
            throw new Error(`${wineName} is not in the cellar.`);
        }

        if (wineToPay.paid) {
            throw new Error(`${wineName} has already been paid.`);
        }

        wineToPay.paid = true;
        this.bill += price;

        return `You bought a ${wineName} for a ${price}$.`;
    }

    openBottle(wineName) {
        const wineToOpen = this.wines.find(w => w.wineName === wineName);

        if (!wineToOpen) {
            throw new Error('The wine, you\'re looking for, is not found.');
        }

        if (!wineToOpen.paid) {
            throw new Error(`${wineName} need to be paid before open the bottle.`);
        }

        this.wines = this.wines.filter(w => w.wineName !== wineName);

        return `You drank a bottle of ${wineName}.`;
    }

    cellarRevision(wineType) {
        let output = [];
        if (!wineType) {
            output.push(`You have space for ${this.space - this.wines.length} bottles more.`);
            output.push(`You paid ${this.bill}$ for the wine.`);

            this.wines
                .sort((a, b) => a.wineName.localeCompare(b.wineName))
                .forEach(w => {
                    const paidOrNot = w.paid ? 'Has Paid' : 'Not Paid';

                    const message = `${w.wineName} > ${w.wineType} - ${paidOrNot}.`;
                    output.push(message);
                });
        } else {
            const winesOfType = this.wines.filter(w => w.wineType === wineType);

            if (!winesOfType.length) {
                throw new Error(`There is no ${wineType} in the cellar.`);
            }

            output = winesOfType.map(w => {
                const paidOrNot = w.paid ? 'Has Paid' : 'Not Paid';
                return `${w.wineName} > ${w.wineType} - ${paidOrNot}.`;
            });
        }

        return output.join('\n');
    }
}

// const selection = new WineSelection(2) 
// console.log(selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50)); 
// console.log(selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120)); 
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144)); 

// const selection = new WineSelection(2) 
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White',50); 
// console.log(selection.payWineBottle('Sauvignon Blanc Marlborough', 120)); 
// console.log(selection.payWineBottle('Bodegas Godelia Mencía', 144)); 

// const selection = new WineSelection(2) 
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50); 
// selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120); 
// selection.payWineBottle('Sauvignon Blanc Marlborough', 50); 
// console.log(selection.openBottle('Sauvignon Blanc Marlborough')); 
// console.log(selection.openBottle('Cabernet Sauvignon Napa Valley')); 

// const selection = new WineSelection(2) 
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));  
// console.log(selection.cellarRevision('Rose')); 

const selection = new WineSelection(5)
selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection.cellarRevision()); 