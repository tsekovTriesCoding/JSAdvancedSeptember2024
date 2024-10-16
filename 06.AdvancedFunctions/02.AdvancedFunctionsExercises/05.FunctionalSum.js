function add(num) {
    let result = num;

    function sum(num) {
        result += num;
        return sum;
    }

    sum.toString = () => result;
    return sum;
}

console.log(add(1)(6)(-3).toString());
