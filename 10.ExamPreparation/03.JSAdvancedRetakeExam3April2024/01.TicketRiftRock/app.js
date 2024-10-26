window.addEventListener("load", solve);

function solve() {
    const purchaseButton = document.getElementById('purchase-btn');
    const numberOfTicketsInput = document.getElementById('num-tickets');
    const seatingPreferenceInput = document.getElementById('seating-preference');
    const fullNameInput = document.getElementById('full-name');
    const emailInput = document.getElementById('email');
    const phoneNumberInput = document.getElementById('phone-number');
    const ticketPreviewList = document.getElementById('ticket-preview');
    const ticketPurchaseList = document.getElementById('ticket-purchase');
    const bottomContentElement = document.querySelector('.bottom-content');

    purchaseButton.addEventListener('click', onPurchaseClickHandler);

    function onPurchaseClickHandler(e) {
        const inputs = [
            numberOfTicketsInput,
            seatingPreferenceInput,
            fullNameInput,
            emailInput,
            phoneNumberInput];

        if (inputs.some(input => input.value === '')) {
            return;
        }

        const liTicketPurchase = createListElement(numberOfTicketsInput.value,
            seatingPreferenceInput.value,
            fullNameInput.value,
            emailInput.value,
            phoneNumberInput.value);

        ticketPreviewList.appendChild(liTicketPurchase);
        clearInputFields(inputs);
        toggleButton(e.currentTarget);
    }

    function createListElement(numberOfTickets, seatingPreference, fullName, email, phoneNumber) {
        const pTicketsCount = document.createElement('p');
        pTicketsCount.textContent = `Count: ${numberOfTickets}`;
        const pPreference = document.createElement('p');
        pPreference.textContent = `Preference: ${seatingPreference}`;
        const pTo = document.createElement('p');
        pTo.textContent = `To: ${fullName}`;
        const pEmail = document.createElement('p');
        pEmail.textContent = `Email: ${email}`;
        const pPhoneNumber = document.createElement('p');
        pPhoneNumber.textContent = `Phone Number: ${phoneNumber}`;

        const article = document.createElement('article');
        article.appendChild(pTicketsCount);
        article.appendChild(pPreference);
        article.appendChild(pTo);
        article.appendChild(pEmail);
        article.appendChild(pPhoneNumber);

        const editButton = createButtonElement('edit-btn', 'Edit', onEditButtonClickHandler);
        const nextButton = createButtonElement('next-btn', 'Next', onNextButtonClickHandler);

        const divButtonContainer = document.createElement('div');
        divButtonContainer.classList.add('btn-container');
        divButtonContainer.appendChild(editButton);
        divButtonContainer.appendChild(nextButton);

        const li = document.createElement('li');
        li.classList.add('ticket-purchase');
        li.appendChild(article);
        li.appendChild(divButtonContainer);

        return li;

        function onEditButtonClickHandler() {
            numberOfTicketsInput.value = numberOfTickets;
            seatingPreferenceInput.value = seatingPreference;
            fullNameInput.value = fullName;
            emailInput.value = email;
            phoneNumberInput.value = phoneNumber;

            li.remove();
            toggleButton(purchaseButton);
        }

        function onNextButtonClickHandler() {
            let liElement = document.createElement("li");
            liElement.setAttribute("class", "ticket-purchase");

            let articleElementNew = document.createElement("article");
            articleElementNew = article;

            let buyButton = createButtonElement('buy-btn', 'buy', onBuyButtonClickHandler);
    
            articleElementNew.appendChild(buyButton);
            liElement.appendChild(articleElementNew);

            li.remove();

            ticketPurchaseList.appendChild(liElement);
        }

        function onBuyButtonClickHandler(e) {
            e.currentTarget.closest('.ticket-purchase').remove();

            const h2ThankYou = document.createElement('h2');
            h2ThankYou.textContent = 'Thank you for your purchase!';

            const backButton = createButtonElement('back-btn', 'Back', onBackButtonClickHandler);
            bottomContentElement.appendChild(h2ThankYou);
            bottomContentElement.appendChild(backButton);

            function onBackButtonClickHandler() {
                location.reload();
            }
        }
    }

    function createButtonElement(className, text, eventHandler) {
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
        if (button.hasAttribute('disabled')) {
            button.removeAttribute('disabled');
        } else {
            button.setAttribute('disabled', 'disabled');
        }
    }
}