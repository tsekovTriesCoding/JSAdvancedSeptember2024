window.addEventListener("load", solve);

function solve() {
  const submitButtom = document.getElementById('form-btn');
  const firstNameInput = document.getElementById('first-name');
  const lastNameInput = document.getElementById('last-name');
  const ageInput = document.getElementById('age');
  const genderSelect = document.getElementById('genderSelect');
  const taskTextarea = document.getElementById('task');
  const inProgressList = document.getElementById('in-progress');
  const inProgressCount = document.getElementById('progress-count');
  const finishedList = document.getElementById('finished');
  const clearButton = document.getElementById('clear-btn');

  submitButtom.addEventListener('click', onSubmitClickHandler);
  clearButton.addEventListener('click', () => {
    finishedList.innerHTML = '';
  });

  function onSubmitClickHandler() {
    const inputs = [
      firstNameInput,
      lastNameInput,
      ageInput,
      genderSelect,
      taskTextarea
    ]

    if (inputs.some(input => input.value === '')) {
      return;
    }

    const li = createListElement(firstNameInput.value,
      lastNameInput.value,
      ageInput.value,
      genderSelect.value,
      taskTextarea.value);

    inProgressList.appendChild(li);
    clearInputFields(inputs);
    inProgressCount.textContent = Number(inProgressCount.textContent) + 1;
  }

  function createListElement(firstName, lastName, age, gender, task) {
    const h4Name = document.createElement('h4');
    h4Name.textContent = `${firstName} ${lastName}`;
    const pGenderAge = document.createElement('p');
    pGenderAge.textContent = `${gender}, ${age}`;
    const pTask = document.createElement('p');
    pTask.textContent = `Dish description: ${task}`;

    const article = document.createElement('article');

    article.appendChild(h4Name);
    article.appendChild(pGenderAge);
    article.appendChild(pTask);

    const editButton = createButton('edit-btn', 'Edit', OnEditClickHandler);
    const completeButton = createButton('complete-btn', 'Mark as complete', OnCompleteClickHandler);

    const li = document.createElement('li');
    li.classList.add('each-line');

    li.appendChild(article);
    li.appendChild(editButton);
    li.appendChild(completeButton);

    return li;

    function OnEditClickHandler() {
      firstNameInput.value = firstName;
      lastNameInput.value = lastName;
      ageInput.value = age;
      genderSelect.value = gender;
      taskTextarea.value = task;

      li.remove();
      inProgressCount.textContent = Number(inProgressCount.textContent) - 1;
    }
  }

  function OnCompleteClickHandler(e) {
    const li = e.currentTarget.parentElement;
    li.querySelector('.edit-btn').remove();
    e.currentTarget.remove();

    inProgressCount.textContent = Number(inProgressCount.textContent) - 1;

    finishedList.appendChild(li);
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
}
