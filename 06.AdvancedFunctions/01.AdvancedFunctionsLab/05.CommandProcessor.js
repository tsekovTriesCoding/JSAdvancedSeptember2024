function solution() {
    let initialString = '';
    
    return {
        append: function append(string) {
            initialString = initialString += string;
            return initialString;
        },
        removeStart: function removeStart(n) {
            initialString = initialString.slice(n);
            return initialString;
        },

        removeEnd: function removeEnd(n) {
            initialString = initialString.substring(0, initialString.length - n);
            return initialString
        },

        print: function print() {
            console.log(initialString);
        },
    }
}

let firstZeroTest = solution();
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();

let secondZeroTest = solution();
secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print(); 