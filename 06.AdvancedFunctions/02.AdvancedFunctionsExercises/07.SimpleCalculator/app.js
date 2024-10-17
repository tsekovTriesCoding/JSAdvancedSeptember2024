function calculator() {
    let num1 = null;
    let num2 = null;
    let result = null;

    return {
        init: function (selector1, selector2, resultSelector) {
            num1 = document.getElementById(selector1.split('#')[1]);
            num2 = document.getElementById(selector2.split('#')[1]);
            result = document.getElementById(resultSelector.split('#')[1]);
        },
        add: function () {
            result.value = Number(num1.value) + Number(num2.value);
        },
        subtract: function() {
            result.value = Number(num1.value) - Number(num2.value);
        }
    }
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');
calculate.add();




