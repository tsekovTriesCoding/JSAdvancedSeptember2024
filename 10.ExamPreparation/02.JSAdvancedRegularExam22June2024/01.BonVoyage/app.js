window.addEventListener('load', solve);

function solve() {
    const nextButtonElement = document.getElementById('next-btn');
    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const fromDateInput = document.getElementById('from-date');
    const toDateInput = document.getElementById('to-date');
    const infoListElement = document.querySelector('.info-list');
    const confirmListElement = document.querySelector('.confirm-list');
    const statusElement = document.getElementById('status');

    nextButtonElement.addEventListener('click', onNextButtonClickHandler);

    function onNextButtonClickHandler(e) {
        e.preventDefault();
        const inputs = [firstNameInput, lastNameInput, fromDateInput, toDateInput];

        const fromDateIsBeforeToDate = validateDates(fromDateInput.value, toDateInput.value);

        if (inputs.some(input => input.value === '') || fromDateIsBeforeToDate) {
            return;
        }

        const li = createListElement(firstNameInput.value, lastNameInput.value, fromDateInput.value, toDateInput.value);
        infoListElement.appendChild(li);
        clearInputFields(inputs);
        toggleButton(e.currentTarget);
    }

    function createListElement(firstName, lastName, fromDate, toDate) {
        const h3Name = document.createElement('h3');
        h3Name.textContent = `Name: ${firstName} ${lastName}`;
        const pFromDate = document.createElement('p');
        pFromDate.textContent = `From date: ${fromDate}`;
        const pToDate = document.createElement('p');
        pToDate.textContent = `To date: ${toDate}`;

        const article = document.createElement('article');
        article.appendChild(h3Name);
        article.appendChild(pFromDate);
        article.appendChild(pToDate);

        const editButton = document.createElement('button');
        editButton.classList.add('edit-btn');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', onEditButtonClickHandler);

        const continueButton = document.createElement('button');
        continueButton.classList.add('continue-btn');
        continueButton.textContent = 'Continue';
        continueButton.addEventListener('click', onContinueButtonClickHandler);

        const li = document.createElement('li');
        li.classList.add('vacation-content');
        li.appendChild(article);
        li.appendChild(editButton);
        li.appendChild(continueButton);

        return li;

        function onEditButtonClickHandler() {
            firstNameInput.value = firstName;
            lastNameInput.value = lastName;
            fromDateInput.value = fromDate;
            toDateInput.value = toDate;

            toggleButton(nextButtonElement);
            li.remove();
        }

        function onContinueButtonClickHandler() {
            editButton.remove();
            continueButton.remove();

            const confirmButton = document.createElement('button');
            confirmButton.classList.add('confirm-btn');
            confirmButton.textContent = 'Confirm';
            confirmButton.addEventListener('click', () => {
                li.remove();
                toggleButton(nextButtonElement);
                statusElement.classList.add('vacation-confirmed');
                statusElement.textContent = 'Vacation Requested';
            });

            const cancelButton = document.createElement('button');
            cancelButton.classList.add('cancel-btn');
            cancelButton.textContent = 'Cancel';
            cancelButton.addEventListener('click', () => {
                li.remove();
                toggleButton(nextButtonElement);
                statusElement.classList.add('vacation-cancelled');
                statusElement.textContent = 'Cancelled Vacation';
            });

            li.appendChild(confirmButton);
            li.appendChild(cancelButton);

            confirmListElement.appendChild(li);
        }
    }

    statusElement.addEventListener('click', () => {
        location.reload();
    });

    function validateDates(fromDate, toDate) {
        return new Date(fromDate) > new Date(toDate);
    }

    function clearInputFields(inputs) {
        inputs.forEach(input => input.value = '');
    }

    function toggleButton(button) {
        if (button.hasAttribute('disabled')) {
            button.removeAttribute('disabled');
        } else {
            button.setAttribute('disabled', 'disabled');
        }
    }
}