window.addEventListener("load", solve);

function solve() {
    const gemNameInputElement = document.getElementById('gem-name');
    const colorInputElement = document.getElementById('color');
    const caratsInputElement = document.getElementById('carats');
    const priceInputElement = document.getElementById('price');
    const typeInputElement = document.getElementById('type');
    const addButtonElement = document.getElementById('add-btn');
    const previewListElement = document.getElementById('preview-list');
    const collectionElement = document.getElementById('collection');

    addButtonElement.addEventListener('click', onAddButtonClickHandler);

    function onAddButtonClickHandler(e) {
        const inputs = [gemNameInputElement,
            colorInputElement,
            caratsInputElement,
            priceInputElement,
            typeInputElement];

        if (inputs.some(input => input.value == '')) {
            return;
        }

        const li = createListItemElement(gemNameInputElement.value,
            colorInputElement.value,
            caratsInputElement.value,
            priceInputElement.value,
            typeInputElement.value);

        previewListElement.appendChild(li);
        clearInputFields(inputs);
        e.currentTarget.setAttribute('disabled', 'disabled');
    }

    function createListItemElement(name, color, carats, price, type) {
        const h4Name = document.createElement("h4");
        h4Name.textContent = name;
        const pColor = document.createElement("p");
        pColor.textContent = `Color: ${color}`;
        const pCarats = document.createElement("p");
        pCarats.textContent = `Carats: ${carats}`;
        const pPrice = document.createElement("p");
        pPrice.textContent = `Price: ${price}$`;
        const pType = document.createElement("p");
        pType.textContent = `Type: ${type}`;

        const article = document.createElement('article');
        article.appendChild(h4Name);
        article.appendChild(pColor);
        article.appendChild(pCarats);
        article.appendChild(pPrice);
        article.appendChild(pType);

        const saveButton = document.createElement('button');
        saveButton.classList.add('save-btn');
        saveButton.textContent = 'Save to Collection';
        saveButton.addEventListener('click', onSaveButtonClickHandler);

        const editButton = document.createElement('button');
        editButton.classList.add('edit-btn');
        editButton.textContent = 'Edit Information';
        editButton.addEventListener('click', onEditButtonClickHandler);

        const cancelButton = document.createElement('button');
        cancelButton.classList.add('cancel-btn');
        cancelButton.textContent = 'Cancel';
        cancelButton.addEventListener('click', (e) => {
            e.currentTarget.parentElement.remove();
            addButtonElement.removeAttribute('disabled');
        });

        const li = document.createElement('li');
        li.classList.add('gem-info');

        li.appendChild(article);
        li.appendChild(saveButton);
        li.appendChild(editButton);
        li.appendChild(cancelButton);

        return li;

        function onEditButtonClickHandler(e) {
            gemNameInputElement.value = name;
            colorInputElement.value = color;
            caratsInputElement.value = carats;
            priceInputElement.value = price;
            typeInputElement.value = type;

            addButtonElement.removeAttribute('disabled');
            e.currentTarget.parentElement.remove();
        }

        function onSaveButtonClickHandler(e) {
            const pElement = document.createElement('p');
            pElement.classList.add('collection-item');
            const text = `${h4Name.textContent} - ${pColor.textContent}/ ${pCarats.textContent}/ ${pPrice.textContent}/ ${pType.textContent}`;
            pElement.textContent = text;

            const li = document.createElement('li');
            li.appendChild(pElement);

            collectionElement.appendChild(li);
            e.currentTarget.parentElement.remove();
            addButtonElement.removeAttribute('disabled');
        }
    }

    function clearInputFields(inputs) {
        inputs.forEach(input => input.value = '');
    }
}
