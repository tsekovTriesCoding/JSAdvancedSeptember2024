window.addEventListener('load', solution);

function solution() {
  const addButton = document.getElementById('add-btn');
  const employeeInput = document.getElementById('employee');
  const categoryInput = document.getElementById('category');
  const urgencyInput = document.getElementById('urgency');
  const teamInput = document.getElementById('team');
  const descriptionInput = document.getElementById('description');
  const previewList = document.querySelector('.preview-list');
  const pendingList = document.querySelector('.pending-list');
  const resolvedList = document.querySelector('.resolved-list');

  addButton.addEventListener('click', onAddClickHandler);

  function onAddClickHandler(e) {
    e.preventDefault();

    const inputs = [
      employeeInput,
      categoryInput,
      urgencyInput,
      teamInput,
      descriptionInput];

    if (inputs.some(input => input.value === '')) {
      return;
    }

    const li = createListElement(employeeInput.value,
      categoryInput.value,
      urgencyInput.value,
      teamInput.value,
      descriptionInput.value);

    previewList.appendChild(li);
    clearInputFields(inputs);
    toggleButton(e.currentTarget);
  }

  function createListElement(employee, category, urgency, team, description) {
    const pFrom = document.createElement('p');
    pFrom.textContent = `From: ${employee}`;
    const pCategory = document.createElement('p');
    pCategory.textContent = `Category: ${category}`;
    const pUrgency = document.createElement('p');
    pUrgency.textContent = `Urgency: ${urgency}`;
    const pAssignedTo = document.createElement('p');
    pAssignedTo.textContent = `Assigned to: ${team}`;
    const pDescription = document.createElement('p');
    pDescription.textContent = `Description: ${description}`;

    const article = document.createElement('article');
    article.appendChild(pFrom);
    article.appendChild(pCategory);
    article.appendChild(pUrgency);
    article.appendChild(pAssignedTo);
    article.appendChild(pDescription);

    const editButton = createButton('edit-btn', 'Edit', onEditClickHandler);
    const continueButton = createButton('continue-btn', 'Continue', onContinueClickHandler);

    const li = document.createElement('li');
    li.classList.add('problem-content');
    li.appendChild(article);
    li.appendChild(editButton);
    li.appendChild(continueButton);

    return li;

    function onEditClickHandler(e) {
      employeeInput.value = employee;
      categoryInput.value = category;
      urgencyInput.value = urgency;
      teamInput.value = team;
      descriptionInput.value = description;

      e.currentTarget.parentElement.remove();
      toggleButton(addButton);
    }

    function onContinueClickHandler() {
      editButton.remove();
      continueButton.remove();

      const resolveButton = createButton('resolve-btn', 'Resolve', onResolveClickHandler);
      li.appendChild(resolveButton);

      pendingList.appendChild(li);

      function onResolveClickHandler() {
        resolveButton.remove();

        const clearButton = createButton('clear-btn', 'Clear', onClearClickHandler);
        li.appendChild(clearButton);

        resolvedList.appendChild(li);

        function onClearClickHandler(e) {
          e.currentTarget.parentElement.remove();

          toggleButton(addButton);
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
    if (button.hasAttribute('disabled')) {
      button.removeAttribute('disabled')
    } else {
      button.setAttribute('disabled', 'disabled');
    }
  }
}




