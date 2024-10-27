window.addEventListener('load', solve);

function solve() {
    const addButton = document.getElementById('add-btn');
    const timeInput = document.getElementById('time');
    const dateInput = document.getElementById('date');
    const placeInput = document.getElementById('place');
    const eventNameInput = document.getElementById('event-name');
    const emailInput = document.getElementById('email');
    const checkList = document.getElementById('check-list');
    const upcomingList = document.getElementById('upcoming-list');
    const finishedList = document.getElementById('finished-list');

    addButton.addEventListener('click', onAddClickHandler);

    function onAddClickHandler(e) {
        const inputs = [timeInput,
            dateInput,
            placeInput,
            eventNameInput,
            emailInput];

        if (inputs.some(input => input.value === '')) {
            return;
        }

        const li = createListElement(timeInput.value,
            dateInput.value,
            placeInput.value,
            eventNameInput.value,
            emailInput.value);

        checkList.appendChild(li);
        clearInputFields(inputs);
        toggleButton(e.currentTarget);
    }

    function createListElement(time, date, place, event, email) {
        const pDateAndTime = document.createElement('p');
        pDateAndTime.textContent = `Begins: ${date} at: ${time}`;
        const pPlace = document.createElement('p');
        pPlace.textContent = `In: ${place}`;
        const pEvent = document.createElement('p');
        pEvent.textContent = `Event: ${event}`;
        const pContact = document.createElement('p');
        pContact.textContent = `Contact: ${email}`;

        const article = document.createElement('article');
        article.appendChild(pDateAndTime);
        article.appendChild(pPlace);
        article.appendChild(pEvent);
        article.appendChild(pContact);

        const editButton = createButton('edit-btn', 'Edit', onEditClickHandler);
        const continueButton = createButton('continue-btn', 'Continue', onContinueClickHandler);

        const li = document.createElement('li');
        li.classList.add('event-content');
        li.appendChild(article);
        li.appendChild(editButton);
        li.appendChild(continueButton);

        return li;

        function onEditClickHandler(e) {
            timeInput.value = time;
            dateInput.value = date;
            placeInput.value = place;
            eventNameInput.value = event;
            emailInput.value = email;

            e.currentTarget.parentElement.remove();
            toggleButton(addButton);
        }

        function onContinueClickHandler() {
            editButton.remove();
            continueButton.remove();

            const finishedButton = createButton('finished-btn', 'Move to Finished', onFinishClickHandler);
            li.appendChild(finishedButton);

            upcomingList.appendChild(li);
            toggleButton(addButton);

            function onFinishClickHandler() {
                finishedButton.remove();

                finishedList.appendChild(li);
                const clearButton = finishedList.parentElement.querySelector('#clear');

                clearButton.addEventListener('click', () => {
                    li.remove();
                });
            }
        }
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
        if (button.hasAttribute('disabled')) {
            button.removeAttribute('disabled');
        } else {
            button.setAttribute('disabled', 'disabled');
        }
    }
}




