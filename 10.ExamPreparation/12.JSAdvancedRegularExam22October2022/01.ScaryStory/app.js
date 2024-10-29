window.addEventListener("load", solve);

function solve() {
  const publishButton = document.getElementById('form-btn');
  const firstNameInput = document.getElementById('first-name');
  const lastNameInput = document.getElementById('last-name');
  const ageInput = document.getElementById('age');
  const storyTitleInput = document.getElementById('story-title');
  const genreSelect = document.getElementById('genre');
  const storyTextarea = document.getElementById('story');
  const previewList = document.getElementById('preview-list');

  publishButton.addEventListener('click', onPublishClickHandler);

  function onPublishClickHandler(e) {
    const inputs = [
      firstNameInput,
      lastNameInput,
      ageInput,
      storyTitleInput,
      storyTextarea
    ];

    if (inputs.some(input => input.value === '')) {
      return;
    }

    const li = createListElement(firstNameInput.value,
      lastNameInput.value,
      ageInput.value,
      storyTitleInput.value,
      genreSelect.value,
      storyTextarea.value);

    previewList.appendChild(li);
    clearInputFields(inputs);
    toggleButton(e.currentTarget);
  }

  function createListElement(firstName, lastName, age, storyTitle, genre, story) {
    const h4Name = document.createElement('h4');
    h4Name.textContent = `Name: ${firstName} ${lastName}`;
    const pAge = document.createElement('p');
    pAge.textContent = `Age: ${age}`;
    const pTitle = document.createElement('p');
    pTitle.textContent = `Title: ${storyTitle}`;
    const pGenre = document.createElement('p');
    pGenre.textContent = `Genre: ${genre}`;
    const pStory = document.createElement('p');
    pStory.textContent = story;

    const article = document.createElement('article');

    article.appendChild(h4Name);
    article.appendChild(pAge);
    article.appendChild(pTitle);
    article.appendChild(pGenre);
    article.appendChild(pStory);

    const saveButton = createButton('save-btn', 'Save Story', OnSaveClickHandler);
    const editButton = createButton('edit-btn', 'Edit Story', OnEditClickHandler);
    const deleteButton = createButton('delete-btn', 'Delete Story', OnDeleteClickHandler);

    const li = document.createElement('li');
    li.classList.add('story-info');

    li.appendChild(article);
    li.appendChild(saveButton);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    return li;

    function OnEditClickHandler() {
      firstNameInput.value = firstName;
      lastNameInput.value = lastName;
      ageInput.value = age;
      storyTitleInput.value = storyTitle;
      genreSelect.value = genre;
      storyTextarea.value = story;

      li.remove();
      toggleButton(publishButton);
    }
  }

  function OnSaveClickHandler(e) {
    const divMain = document.getElementById('main');
    divMain.innerHTML = '';

    const h1 = document.createElement('h1');
    h1.textContent = 'Your scary story is saved!';

    divMain.appendChild(h1);
  }

  function OnDeleteClickHandler(e) {
    e.currentTarget.parentElement.remove();
    toggleButton(publishButton);
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
