window.addEventListener('load', solve);

function solve() {
    const nextButton = document.getElementById('next-btn');
    const firstNameInput = document.getElementById('first-name')
    const lastNameInput = document.getElementById('last-name')
    const dateInInput = document.getElementById('date-in')
    const dateOutInput = document.getElementById('date-out')
    const peopleCountInput = document.getElementById('people-count')
    const infoList = document.querySelector('.info-list');
    const confirmList = document.querySelector('.confirm-list');
    const h1Verification = document.getElementById('verification');

    nextButton.addEventListener('click', onNextClickHandler);

    function onNextClickHandler(e) {
        e.preventDefault();

        const inputs = [
            firstNameInput,
            lastNameInput,
            dateInInput,
            dateOutInput,
            peopleCountInput
        ];

        if (inputs.some(input => input.value === '') || isInvalidDate(dateInInput.value, dateOutInput.value)) {
            return;
        }

        const li = createListElement(firstNameInput.value,
            lastNameInput.value,
            dateInInput.value,
            dateOutInput.value,
            peopleCountInput.value);

        infoList.appendChild(li);
        clearInputFields(inputs);
        toggleButton(e.currentTarget);
    }

    function createListElement(firstName, lastName, dateIn, dateOut, peopleCount) {
        const h3Name = document.createElement('h3');
        h3Name.textContent = `Name: ${firstName} ${lastName}`;
        const pFromDate = document.createElement('p');
        pFromDate.textContent = `From date: ${dateIn}`;
        const pToDate = document.createElement('p');
        pToDate.textContent = `To date: ${dateOut}`;
        const pPeopleCount = document.createElement('p');
        pPeopleCount.textContent = `For ${peopleCount} people`;

        const article = document.createElement('article');

        article.appendChild(h3Name);
        article.appendChild(pFromDate);
        article.appendChild(pToDate);
        article.appendChild(pPeopleCount);

        const editButton = createButton('edit-btn', 'Edit', OnEditClickHandler);
        const continueButton = createButton('continue-btn', 'Continue', OnContinueClickHandler);

        const li = document.createElement('li');
        li.classList.add('reservation-content');

        li.appendChild(article);
        li.appendChild(editButton);
        li.appendChild(continueButton);

        return li;

        function OnEditClickHandler() {
            firstNameInput.value = firstName;
            lastNameInput.value = lastName;
            dateInInput.value = dateIn;
            dateOutInput.value = dateOut;
            peopleCountInput.value = peopleCount;

            li.remove();
            toggleButton(nextButton);
        }
    }

    function OnContinueClickHandler(e) {
        const li = e.currentTarget.parentElement;
        li.querySelector('.edit-btn').remove();
        e.currentTarget.remove();

        const confirmButton = createButton('confirm-btn', 'Confirm', onConfirmClickHandler);
        const cancelButton = createButton('cancel-btn', 'Cancel', onCancelClickHandler);

        li.appendChild(confirmButton);
        li.appendChild(cancelButton);

        confirmList.appendChild(li);
    }

    function onConfirmClickHandler(e) {
        e.currentTarget.parentElement.remove();
        toggleButton(nextButton);

        h1Verification.textContent = 'Confirmed.';
        h1Verification.classList.add('reservation-confirmed');
    }

    function onCancelClickHandler(e) {
        e.currentTarget.parentElement.remove();
        toggleButton(nextButton);

        h1Verification.textContent = 'Cancelled.';
        h1Verification.classList.add('reservation-cancelled');
    }

    function createButton(className, text, eventHandler) {
        const button = document.createElement('button');
        button.classList.add(className);
        button.textContent = text;
        button.addEventListener('click', eventHandler);

        return button;
    }

    function clearInputFields(inputs) {
        inputs.forEach(input => input.value = '');
    }

    function toggleButton(button) {
        button.hasAttribute('disabled') ? button.removeAttribute('disabled') : button.setAttribute('disabled', 'disabled');
    }

    function isInvalidDate(dateIn, dateOut) {
        return new Date(dateIn) > new Date(dateOut);
    }
}







