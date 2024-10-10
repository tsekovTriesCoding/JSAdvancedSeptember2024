function solve() {
    const selectMenuTo = document.getElementById('selectMenuTo');
    selectMenuTo.innerHTML = '';

    const option1 = document.createElement('option');
    option1.textContent = 'Binary';
    option1.value = 'binary';
    const option2 = document.createElement('option');
    option2.textContent = 'Hexadecimal';
    option2.value = 'hexadecimal';

    selectMenuTo.appendChild(option1);
    selectMenuTo.appendChild(option2);

    const convertItButton = document.querySelector('#container>button');
    convertItButton.addEventListener('click', () => {
        const resultInput = document.getElementById('result');
        const inputNumber = Number(document.getElementById('input').value);
        const selectedNumTypeToConvertTo = selectMenuTo.options[selectMenuTo.selectedIndex].textContent;

        if (selectedNumTypeToConvertTo == 'Binary') {
            const convertedNumber = inputNumber.toString(2);
            resultInput.value = convertedNumber;
        } else if (selectedNumTypeToConvertTo == 'Hexadecimal') {
            const convertedNumber = inputNumber.toString(16);
            resultInput.value = convertedNumber.toUpperCase();
        }
    });
}