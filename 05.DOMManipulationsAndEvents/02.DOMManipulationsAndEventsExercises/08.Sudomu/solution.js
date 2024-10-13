function solve() {
    const buttons = document.querySelectorAll('button');
    const quickCheckButton = buttons[0];
    const clearButton = buttons[1];
    const inputElements = document.querySelectorAll('tbody tr td input');
    const table = document.querySelector('#exercise table');
    const paragraphInCheckDiv = document.querySelector('#check p');

    quickCheckButton.addEventListener('click', quickCheckClickHandler);
    clearButton.addEventListener('click', clearClickHandler);

    function quickCheckClickHandler() {
        let hasRightNumbers = checkRowNumbers(inputElements);

        if (hasRightNumbers) {
            hasRightNumbers = checkColNumbers(inputElements);
        }

        if (hasRightNumbers) {
            table.style.border = '2px solid green';
            paragraphInCheckDiv.textContent = 'You solve it! Congratulations!';
            paragraphInCheckDiv.style.color = 'green';
        } else {
            table.style.border = '2px solid red';
            paragraphInCheckDiv.textContent = 'NOP! You are not done yet...';
            paragraphInCheckDiv.style.color = 'red';
        }
    }

    function clearClickHandler() {
        inputElements.forEach(input => input.value = '');
        table.style.border = 'none';
        paragraphInCheckDiv.textContent = '';
    }

    function checkRowNumbers(inputElements) {
        for (let i = 0; i < inputElements.length; i += 3) {
            const firstNum = Number(inputElements[i].value);
            const secondNum = Number(inputElements[i + 1].value);
            const thirdNum = Number(inputElements[i + 2].value);

            if ((firstNum < 1 || firstNum > 3) || (secondNum < 1 || secondNum > 3) || (thirdNum < 1 || thirdNum > 3)) {
                return false;
            }

            if (firstNum == secondNum || firstNum == thirdNum || secondNum == thirdNum) {
                return false;
            }

        }

        return true;
    }

    function checkColNumbers(inputElements) {
        for (let i = 0; i < inputElements.length / 3; i++) {
            const firstNum = Number(inputElements[i].value);
            const secondNum = Number(inputElements[i + 3].value);
            const thirdNum = Number(inputElements[i + 6].value);

            if ((firstNum < 1 || firstNum > 3) || (secondNum < 1 || secondNum > 3) || (thirdNum < 1 || thirdNum > 3)) {
                return false;
            }

            if (firstNum == secondNum || firstNum == thirdNum || secondNum == thirdNum) {
                return false;
            }

        }

        return true;
    }
}