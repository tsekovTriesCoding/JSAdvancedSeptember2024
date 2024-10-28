window.addEventListener('load', solve);

function solve() {
    const nextButton = document.getElementById('next-btn');
    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const peopleCountInput = document.getElementById('people-count');
    const fromDateInput = document.getElementById('from-date');
    const daysCountInput = document.getElementById('days-count');
    const ticketInfoList = document.querySelector('.ticket-info-list');
    const confirmTicketList = document.querySelector('.confirm-ticket');
    const divMain = document.getElementById('main');
    const body = document.getElementById('body');

    nextButton.addEventListener('click', onNextClickHandler);

    function onNextClickHandler(e) {
        e.preventDefault();

        const inputs = [
            firstNameInput,
            lastNameInput,
            peopleCountInput,
            fromDateInput,
            daysCountInput
        ];

        if (inputs.some(input => input.value === '')) {
            return;
        }

        const li = createListElement(firstNameInput.value,
            lastNameInput.value,
            peopleCountInput.value,
            fromDateInput.value,
            daysCountInput.value);

        ticketInfoList.appendChild(li);
        clearInputFields(inputs);
        toggleButton(e.currentTarget);
    }

    function createListElement(firstName, lastName, peopleCount, fromDate, daysCount) {
        const h3Name = document.createElement('h3');
        h3Name.textContent = `Name: ${firstName} ${lastName}`;
        const pDate = document.createElement('p');
        pDate.textContent = `From date: ${fromDate}`;
        const pDays = document.createElement('p');
        pDays.textContent = `For ${daysCount} days`;
        const pPeople = document.createElement('p');
        pPeople.textContent = `For ${peopleCount} people`;

        const article = document.createElement('article');

        article.appendChild(h3Name);
        article.appendChild(pDate);
        article.appendChild(pDays);
        article.appendChild(pPeople);

        const editButton = createButton('edit-btn', 'Edit', OnEditClickHandler);
        const continueButton = createButton('continue-btn', 'Continue', OnContinueClickHandler);

        const li = document.createElement('li');
        li.classList.add('ticket');

        li.appendChild(article);
        li.appendChild(editButton);
        li.appendChild(continueButton);

        return li;

        function OnEditClickHandler() {
            firstNameInput.value = firstName;
            lastNameInput.value = lastName;
            peopleCountInput.value = peopleCount;
            fromDateInput.value = fromDate;
            daysCountInput.value = daysCount;

            li.remove();
            toggleButton(nextButton);
        }
    }

    function OnContinueClickHandler(e) {
        const li = e.currentTarget.parentElement;
        li.querySelector('.edit-btn').remove();
        li.querySelector('.continue-btn').remove();

        const confirmButton = createButton('confirm-btn', 'Confirm', onConfirmClickHandler);
        const cancelButton = createButton('cancel-btn', 'Cancel', onCancelClickHandler);

        li.appendChild(confirmButton);
        li.appendChild(cancelButton);

        confirmTicketList.appendChild(li);


    }

    function onConfirmClickHandler() {
        divMain.remove();

        const h1 = document.createElement('h1');
        h1.id = 'thank-you';
        h1.textContent = 'Thank you, have a nice day!';

        const backButton = document.createElement('button');
        backButton.id = 'back-btn';
        backButton.textContent = 'Back';
        backButton.addEventListener('click', onBackClickHandler);

        body.appendChild(h1);
        body.appendChild(backButton);
    }

    function onCancelClickHandler(e) {
        const li = e.currentTarget.parentElement;
        li.remove();
        toggleButton(nextButton);
    }

    function createButton(className, text, eventHandler) {
        const button = document.createElement('button');
        button.classList.add(className);
        button.textContent = text;
        button.addEventListener('click', eventHandler);

        return button;
    }

    function onBackClickHandler() {
        window.location.reload();
    }

    function clearInputFields(inputs) {
        inputs.forEach(input => input.value = '');
    }

    function toggleButton(button) {
        button.hasAttribute('disabled') ? button.removeAttribute('disabled') : button.setAttribute('disabled', 'disabled');
    }
}




