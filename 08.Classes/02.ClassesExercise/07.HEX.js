function solve() {
    class Hex {
        constructor(value) {
            this.value = value;
        }

        valueOf() {
            return this.value;
        }

        toString() {
            return '0x' + this.value.toString(16).toUpperCase();
        }

        plus(number) {
            return typeof number == 'number' ? new Hex(this.value + number) : new Hex(this.value + number.value);
        }

        minus(number) {
            return typeof number == 'number' ? new Hex(this.value - number) : new Hex(this.value - number.value);
        }

        parse(string) {
            return parseInt(string, 16);
        }
    }

    // let FF = new Hex(255);
    // console.log(FF.toString());
    // FF.valueOf() + 1 == 256;
    // let a = new Hex(10);
    // let b = new Hex(5);
    // console.log(a.plus(b).toString());
    // console.log(a.plus(b).toString() === '0xF');
    // console.log(FF.parse('AAA'));

    let a = new Hex(10);
    let b = new Hex(5);
    let c = new Hex(155);
    let act2 = a.plus(c).toString();
    let exp2 = "0xA5";
    let act3 = a.minus(b).toString();
    let exp3 = "0x5";
}

solve();