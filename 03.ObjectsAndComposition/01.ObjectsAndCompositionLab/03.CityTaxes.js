function cityTaxes(name, population, treasury) {

    return {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += Math.floor(this.population * this.taxRate);
        },
        applyGrowth(percentage) {
            this.population += Math.floor(this.population * (percentage / 100));
        },
        applyRecession(percentage) {
            this.treasury -= Math.floor(this.treasury * (percentage / 100))
        }
    };
}

const city1 =

    cityTaxes('Tortuga',

        7000,

        15000);

console.log(city1);

const city2 =

    cityTaxes('Tortuga',

        7000,

        15000);

city2.collectTaxes();

console.log(city2.treasury);

city2.applyGrowth(5);

console.log(city2.population);
