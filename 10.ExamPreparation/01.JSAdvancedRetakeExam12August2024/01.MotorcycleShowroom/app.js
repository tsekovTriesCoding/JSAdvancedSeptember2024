window.addEventListener("load", solve);

function solve() {
  const colorsSelectElement = document.getElementById('colors');
  const motorcyclesSelectElement = document.getElementById('motorcycles');
  const dateTimeInputElement = document.getElementById('datetime');
  const fullNameInputElement = document.getElementById('full-name');
  const emailInputElement = document.getElementById('email');
  const testRideButton = document.getElementById('test-ride-btn');
  const previewList = document.getElementById('preview-list');
  const completeList = document.getElementById('complete-list');

  testRideButton.addEventListener('click', testRideButtonClickHandler);

  function testRideButtonClickHandler(e) {
    const inputFields = [
      colorsSelectElement,
      motorcyclesSelectElement,
      dateTimeInputElement,
      fullNameInputElement,
      emailInputElement
    ]

    if (inputFields.some(input => input.value === '')) {
      return;
    }

    const li = createListElement(colorsSelectElement.value,
      motorcyclesSelectElement.value,
      dateTimeInputElement.value,
      fullNameInputElement.value,
      emailInputElement.value);

    previewList.appendChild(li);
    clearInputFields(inputFields);
    e.currentTarget.setAttribute('disabled', 'disabled');
  }

  function createListElement(color, model, date, fullName, email) {
    const pColor = document.createElement('p');
    pColor.textContent = `Color: ${color}`;
    const pModel = document.createElement('p');
    pModel.textContent = `Model: ${model}`;
    const pFullName = document.createElement('p');
    pFullName.textContent = `For: ${fullName}`;
    const pContact = document.createElement('p');
    pContact.textContent = `Contact: ${email}`;
    const pDate = document.createElement('p');
    pDate.textContent = `Test Ride On: ${date}`;

    const article = document.createElement('article');
    article.appendChild(pColor);
    article.appendChild(pModel);
    article.appendChild(pFullName);
    article.appendChild(pContact);
    article.appendChild(pDate);

    const editButton = document.createElement('button');
    editButton.classList.add('edit-btn');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', onEditButtonHandler);

    const nextButton = document.createElement('button');
    nextButton.classList.add('next-btn');
    nextButton.textContent = 'Next';
    nextButton.addEventListener('click', onNextButtonClickHandler);

    const divButtonContainer = document.createElement('div');
    divButtonContainer.classList.add('btn-container');
    divButtonContainer.appendChild(editButton);
    divButtonContainer.appendChild(nextButton);

    const li = document.createElement('li');
    li.appendChild(article);
    li.appendChild(divButtonContainer);

    return li;

    function onEditButtonHandler(e) {
      colorsSelectElement.value = color;
      motorcyclesSelectElement.value = model;
      dateTimeInputElement.value = date;
      fullNameInputElement.value = fullName;
      emailInputElement.value = email;

      e.currentTarget.closest('li').remove();
      testRideButton.removeAttribute('disabled');
    }

    function onNextButtonClickHandler(e) {
      const liElement = e.currentTarget.closest('li');
      const buttons = liElement.querySelector('.btn-container');
      buttons.remove();

      const article = liElement.querySelector('article');
      const completeButton = document.createElement('button');
      completeButton.classList.add('complete-btn');
      completeButton.textContent = 'Complete';
      completeButton.addEventListener('click', () => {
        liElement.remove();
        const dataView = document.getElementsByClassName('data-view')[0];

        const confirmButton = document.createElement('button');
        confirmButton.classList.add('confirm-btn');
        confirmButton.textContent = 'Your Test Ride Is Confirmed';
        confirmButton.addEventListener('click', () => {
          location.reload();
        });

        dataView.appendChild(confirmButton);
      });

      article.appendChild(completeButton);
      completeList.appendChild(liElement);
    }
  }

  function clearInputFields(inputFields) {
    inputFields.forEach(input => input.value = '');
  }
}
