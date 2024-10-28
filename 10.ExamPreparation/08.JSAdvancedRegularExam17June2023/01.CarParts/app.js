window.addEventListener('load', solve);

function solve() {
        const nextButton = document.getElementById('next-btn');
        const carModelInput = document.getElementById('car-model');
        const carYearInput = document.getElementById('car-year');
        const partNameInput = document.getElementById('part-name');
        const partNumberInput = document.getElementById('part-number');
        const conditionSelect = document.getElementById('condition');
        const infoList = document.querySelector('.info-list');
        const completeImg = document.getElementById('complete-img');
        const completeText = document.getElementById('complete-text');
        const confirmList = document.querySelector('.confirm-list');

        nextButton.addEventListener('click', onNextClickHandler);

        function onNextClickHandler(e) {
                e.preventDefault();
                const inputs = [
                        carModelInput,
                        carYearInput,
                        partNameInput,
                        partNumberInput,
                        conditionSelect
                ];

                if (inputs.some(input => input.value === '') || carYearInput.value < 1980 || carYearInput.value > 2023) {
                        return;
                }

                const li = createListElement(carModelInput.value,
                        carYearInput.value,
                        partNameInput.value,
                        partNumberInput.value,
                        conditionSelect.value);

                infoList.appendChild(li);
                completeImg.style.visibility = 'hidden';
                completeText.textContent = '';
                clearInputFields(inputs);
                toggleButton(e.currentTarget);
        }

        function createListElement(carModel, carYear, partName, partNumber, condition) {
                const pModel = document.createElement('p');
                pModel.textContent = `Car Model: ${carModel}`;
                const pYear = document.createElement('p');
                pYear.textContent = `Car Year: ${carYear}`;
                const pPartName = document.createElement('p');
                pPartName.textContent = `Part Name: ${partName}`;
                const pPartNumber = document.createElement('p');
                pPartNumber.textContent = `Part Number: ${partNumber}`;
                const pCondition = document.createElement('p');
                pCondition.textContent = `Condition: ${condition}`;

                const article = document.createElement('article');
                article.appendChild(pModel);
                article.appendChild(pYear);
                article.appendChild(pPartName);
                article.appendChild(pPartNumber);
                article.appendChild(pCondition);

                const editButton = createButton('edit-btn', 'Edit', onEditClickHandler);
                const continueButton = createButton('continue-btn', 'Continue', onContinueClickHandler);

                const li = document.createElement('li');
                li.classList.add('part-content');

                li.appendChild(article);
                li.appendChild(editButton);
                li.appendChild(continueButton);

                return li;

                function onEditClickHandler(e) {
                        carModelInput.value = carModel;
                        carYearInput.value = carYear;
                        partNameInput.value = partName;
                        partNumberInput.value = partNumber;
                        conditionSelect.value = condition;

                        e.currentTarget.parentElement.remove();
                        toggleButton(nextButton);
                }
        }

        function onContinueClickHandler(e) {
                const liToMove = e.currentTarget.parentElement;
                liToMove.querySelector('.edit-btn').remove();
                liToMove.querySelector('.continue-btn').remove();

                const confirmButton = createButton('confirm-btn', 'Confirm', onConfirmClickHandler);
                const cancelButton = createButton('cancel-btn', 'Cancel', onCancelClickHandler);

                liToMove.appendChild(confirmButton);
                liToMove.appendChild(cancelButton);

                confirmList.appendChild(liToMove);
        }

        function onCancelClickHandler(e) {
                const liToRemove = e.currentTarget.parentElement;
                liToRemove.remove();
                toggleButton(nextButton);
        }

        function onConfirmClickHandler(e) {
                const liToRemove = e.currentTarget.parentElement;

                liToRemove.remove();
                toggleButton(nextButton);
                completeImg.style.visibility = 'visible';
                completeText.textContent = 'Part is Ordered!';
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
};