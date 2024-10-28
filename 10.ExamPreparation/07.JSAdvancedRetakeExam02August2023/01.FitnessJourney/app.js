window.addEventListener('load', solve);

function solve() {
    const nextButton = document.getElementById('next-btn');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const contactNumberInput = document.getElementById('contact-number');
    const classTypeInput = document.getElementById('class-type');
    const classTimeInput = document.getElementById('class-time');
    const classInfoList = document.querySelector('.class-info');
    const confirmClassList = document.querySelector('.confirm-class');
    const divMain = document.getElementById('main');
    const body = document.getElementById('body');


    nextButton.addEventListener('click', onNextClickHandler);

    function onNextClickHandler(e) {
        e.preventDefault();

        const inputs = [
            nameInput,
            emailInput,
            contactNumberInput,
            classTypeInput,
            classTimeInput
        ];

        if (inputs.some(input => input.value === '')) {
            return;
        }

        const li = createListElement(nameInput.value,
            emailInput.value,
            contactNumberInput.value,
            classTypeInput.value,
            classTimeInput.value);

        classInfoList.appendChild(li);
        clearInputFields(inputs);
        toggleButton(e.currentTarget);
    }

    function createListElement(name, email, number, classType, classTime) {
        const pName = document.createElement('p');
        pName.textContent = name;
        const pEmail = document.createElement('p');
        pEmail.textContent = email;
        const pNumber = document.createElement('p');
        pNumber.textContent = number;
        const pClassType = document.createElement('p');
        pClassType.textContent = classType;
        const pClassTime = document.createElement('p');
        pClassTime.textContent = classTime;

        const article = document.createElement('article');
        article.classList.add('personal-info');
        article.appendChild(pName);
        article.appendChild(pEmail);
        article.appendChild(pNumber);
        article.appendChild(pClassType);
        article.appendChild(pClassTime);

        const editButton = createButton('edit-btn', 'Edit', onEditClickHandler);
        const continueButton = createButton('continue-btn', 'Continue', onContinueClickHandler);

        const li = document.createElement('li');
        li.classList.add('info-item');
        li.appendChild(article);
        li.appendChild(editButton);
        li.appendChild(continueButton);

        return li;

        function onEditClickHandler(e) {
            nameInput.value = name;
            emailInput.value = email;
            contactNumberInput.value = number;
            classTypeInput.value = classType;
            classTimeInput.value = classTime;

            e.currentTarget.parentElement.remove();
            toggleButton(nextButton);
        }

        function onContinueClickHandler() {
            editButton.remove();
            continueButton.remove();

            const cancelButton = createButton('cancel-btn', 'Cancel', onCancelClickHandler);
            const confirmButton = createButton('confirm-btn', 'Confirm', onConfirmClickHandler);

            li.appendChild(cancelButton);
            li.appendChild(confirmButton);
            li.classList.remove('info-item');
            li.classList.add('continue-item');

            confirmClassList.appendChild(li);

            function onCancelClickHandler(e) {
                e.currentTarget.parentElement.remove();
                toggleButton(nextButton);
            }

            function onConfirmClickHandler() {
                divMain.remove();
                const h1 = document.createElement('h1');
                h1.id = 'thank-you';
                h1.textContent = 'hank you for scheduling your appointment, we look forward to seeing you!';

                const doneButton = document.createElement('button');
                doneButton.id = 'done-btn';
                doneButton.textContent = 'Done';
                doneButton.addEventListener('click', onDoneClickHandler);

                body.appendChild(h1);
                body.appendChild(doneButton);

                function onDoneClickHandler() {
                    window.location.reload();
                }
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
        button.hasAttribute('disabled') ? button.removeAttribute('disabled') : button.setAttribute('disabled', 'disabled');
    }
}