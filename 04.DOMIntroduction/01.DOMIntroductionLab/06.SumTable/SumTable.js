function sumTable() {
    const sum = document.getElementById('sum');
    const trNumbers = document.querySelectorAll('tr:not(:first-child):not(:last-child) td:last-child');

    const result = Array.from(trNumbers)
    .reduce((acc, num) => {
        num = Number(num.textContent);
        return acc += num;
    }, 0);

    sum.textContent = result;
}