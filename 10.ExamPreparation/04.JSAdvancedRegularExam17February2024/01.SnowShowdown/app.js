window.addEventListener("load", solve);

function solve() {
  const addButtonElement = document.querySelector('.add-btn');
  const snowmanNameInput = document.getElementById('snowman-name');
  const snowmanHeightInput = document.getElementById('snowman-height');
  const locationInput = document.getElementById('location');
  const creatorNameInput = document.getElementById('creator-name');
  const specialAttributeSelect = document.getElementById('special-attribute');
  const snowmanPreviewList = document.querySelector('.snowman-preview');
  const snowList = document.querySelector('.snow-list');
  const heroMain = document.getElementById('hero');
  const backImg = document.getElementById('back-img');
  const body = document.querySelector('.body');

  addButtonElement.addEventListener("click", onAddClickHandler);

  function onAddClickHandler(e) {
    e.preventDefault();

    const inputs = [
      snowmanNameInput,
      snowmanHeightInput,
      locationInput,
      creatorNameInput,
      specialAttributeSelect];

    if (inputs.some(input => input.value === '')) {
      return;
    }

    const li = createListElement(snowmanNameInput.value,
      snowmanHeightInput.value,
      locationInput.value,
      creatorNameInput.value,
      specialAttributeSelect.value,
      'snowman-info');

    snowmanPreviewList.appendChild(li);
    clearInputFields(inputs);
    toggleButton(e.currentTarget);
  }

  function createListElement(name, height, location, creator, specialAttribute, className) {
    const pName = document.createElement('p');
    pName.textContent = `Name: ${name}`;
    const pHeight = document.createElement('p');
    pHeight.textContent = `Height: ${height}`;
    const pLocation = document.createElement('p');
    pLocation.textContent = `Location: ${location}`;
    const pCreator = document.createElement('p');
    pCreator.textContent = `Creator: ${creator}`;
    const pAttribute = document.createElement('p');
    pAttribute.textContent = `Attribute: ${specialAttribute}`;

    const article = document.createElement('article');
    article.appendChild(pName);
    article.appendChild(pHeight);
    article.appendChild(pLocation);
    article.appendChild(pCreator);
    article.appendChild(pAttribute);

    const editButton = createButton('edit-btn', 'Edit', onEditClickHandler);
    const nextButton = createButton('next-btn', 'Next', onNextClickHandler);

    const divButtonContainer = document.createElement('div');
    divButtonContainer.classList.add('btn-container');
    divButtonContainer.appendChild(editButton);
    divButtonContainer.appendChild(nextButton);

    const li = document.createElement('li');
    li.classList.add(className);

    li.appendChild(article);
    li.appendChild(divButtonContainer);

    return li;

    function onEditClickHandler() {
      snowmanNameInput.value = name;
      snowmanHeightInput.value = height;
      locationInput.value = location;
      creatorNameInput.value = creator;
      specialAttributeSelect.value = specialAttribute;

      li.remove();
      toggleButton(addButtonElement);
    }

    function onNextClickHandler() {
      const sendButton = createButton('send-btn', 'Send', onSendClickHandler);
      divButtonContainer.remove();

      article.appendChild(sendButton);
      li.classList.remove('snowman-info');
      li.classList.add('snowman-content');

      snowList.appendChild(li);
    }

    function onSendClickHandler() {
      li.remove();
      heroMain.remove();

      backImg.hidden = false;

      const backButton = createButton('back-btn', 'Back', onBackClickHandler);
      body.appendChild(backButton);

      function onBackClickHandler() {
        window.location.reload();
      }
    }
  }

  function createButton(className, text, handler) {
    const button = document.createElement('button');

    button.classList.add(className);
    button.textContent = text;
    button.addEventListener("click", handler);

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
