function solve() {
    const onScreenButton = document.querySelector('#container button');
    const inputs = document.querySelectorAll('#container input');
    const nameInput = inputs[0];
    const hallInput = inputs[1];
    const ticketPriceInput = inputs[2];
    const moviesUl = document.querySelector('#movies ul')
    const archiveUl = document.querySelector('#archive ul')
    const clearButton = document.querySelector('#archive button')

    onScreenButton.addEventListener('click', onOnScreenButtonclick);
    clearButton.addEventListener('click', () => {
        archiveUl.innerHTML = '';
    });

    function onOnScreenButtonclick(e) {
        e.preventDefault();

        if (nameInput.value.trim() == '' || hallInput.value.trim() == '' || ticketPriceInput.value.trim() == '' || !Number(ticketPriceInput.value)) {
            return;
        }

        const li = createListElement();
        moviesUl.append(li);

        clearInputFieds();
    }

    function createListElement() {
        const li = document.createElement('li');
        const spanNameElement = document.createElement('span');
        spanNameElement.textContent = nameInput.value;
        const strongHallElement = document.createElement('strong');
        strongHallElement.textContent = `Hall: ${hallInput.value}`;

        const divContainer = document.createElement('div');
        const strongPriceElement = document.createElement('strong');
        strongPriceElement.textContent = Number(ticketPriceInput.value).toFixed(2);

        const inputElement = document.createElement('input');
        inputElement.setAttribute('placeholder', 'Tickets Sold');

        const archiveButtonElement = document.createElement('button');
        archiveButtonElement.textContent = 'Archive';
        archiveButtonElement.addEventListener('click', onArchiveClick);

        divContainer.append(strongPriceElement);
        divContainer.append(inputElement);
        divContainer.append(archiveButtonElement);

        li.append(spanNameElement);
        li.append(strongHallElement);
        li.append(divContainer);

        return li;

        function onArchiveClick() {
            if (inputElement.value.trim() !== '' && !isNaN(Number(inputElement.value))) {
                strongHallElement.remove();
                const totalAmount = Number(strongPriceElement.textContent) * Number(inputElement.value);
                divContainer.remove();

                const strongTotalCostElement = document.createElement('strong');
                strongTotalCostElement.textContent = `Total amount: ${totalAmount.toFixed(2)}`;
                const deleteButtonElement = document.createElement("button");
                deleteButtonElement.textContent = 'Delete';
                deleteButtonElement.addEventListener('click', () => {
                    li.remove();
                });

                li.append(strongTotalCostElement);
                li.append(deleteButtonElement);

                archiveUl.append(li);
            }

        }

    }

    // function onArchiveClick(e) {
    //     const li = e.target.parentNode.parentNode;
    //     const div = e.target.parentNode;
    //     const input = div.children[1];

    //     if (input.value.trim() !== '' &&
    //         !isNaN(Number(input.value))) {
    //         const span = document.createElement('span');

    //         const name = li.children[0].textContent;
    //         span.textContent = name;

    //         const strong = document.createElement('strong');
    //         const price = +div.children[0].textContent;

    //         const totalPrice = price * Number(input.value)

    //         strong.textContent = `Total amount: ${totalPrice.toFixed(2)}`;

    //         const deleteButton = document.createElement('button');
    //         deleteButton.textContent = 'Delete';
    //         deleteButton.addEventListener('click', (e) => {
    //             e.target.parentNode.remove();
    //         });

    //         const resultLi = document.createElement('li');
    //         resultLi.appendChild(span);
    //         resultLi.appendChild(strong);
    //         resultLi.appendChild(deleteButton);

    //         archiveUl.appendChild(resultLi);

    //         li.remove();
    //     }

    // }

    function clearInputFieds() {
        nameInput.value = '';
        hallInput.value = '';
        ticketPriceInput.value = '';
    }
}