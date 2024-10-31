window.addEventListener("load", solve);

function solve() {
  const addActivityButton = document.getElementById('add-activity');
  const typeSelect = document.getElementById('type');
  const intensitySelect = document.getElementById('intensity');
  const caloriesInput = document.getElementById('calories');
  const durationInput = document.getElementById('duration');
  const dateInput = document.getElementById('date');
  const previewActivityUl = document.getElementById('preview-activity');
  const activitiesTable = document.getElementById('activities-table');

  addActivityButton.addEventListener('click', onAddActivityClickHandler);

  function onAddActivityClickHandler(e) {
    console.log(this);
    
    const inputs = [
      typeSelect,
      intensitySelect,
      caloriesInput,
      durationInput,
      dateInput
    ];

    if (inputs.some(input => input.value === '')) {
      return;
    }

    const li = createListElement(typeSelect.value,
      intensitySelect.value,
      caloriesInput.value,
      durationInput.value,
      dateInput.value);

    previewActivityUl.appendChild(li);
    clearInputFields(inputs);
    toggleButton(e.currentTarget);
  }


  function createListElement(type, intensity, calories, duration, date) {
    const pActivity = document.createElement('p');
    pActivity.textContent = `Activity: ${type}`;
    const pIntensity = document.createElement('p');
    pIntensity.textContent = `Intensity: ${intensity}`;
    const pDuration = document.createElement('p');
    pDuration.textContent = `Duration: ${duration}`;
    const pDate = document.createElement('p');
    pDate.textContent = `Date: ${date}`;
    const pCalories = document.createElement('p');
    pCalories.textContent = `Calories: ${calories}`;

    const article = document.createElement('article');
    article.appendChild(pActivity);
    article.appendChild(pIntensity);
    article.appendChild(pDuration);
    article.appendChild(pDate);
    article.appendChild(pCalories);

    const editButton = createButton('edit-btn', 'Edit', onEditClickHAndler);
    const nextButton = createButton('next-btn', 'Next', onNextClickHAndler);

    const divButtonContainer = document.createElement('div');
    divButtonContainer.classList.add('btn-container');

    divButtonContainer.appendChild(editButton);
    divButtonContainer.appendChild(nextButton);

    const li = document.createElement('li');
    li.appendChild(article);
    li.appendChild(divButtonContainer);

    return li;

    function onEditClickHAndler() {
      typeSelect.value = type;
      intensitySelect.value = intensity;
      caloriesInput.value = calories;
      durationInput.value = duration;
      dateInput.value = date;

      li.remove();
      toggleButton(addActivityButton);
    }

    function onNextClickHAndler() {
      li.remove();

      const tableRow = createTr(type, duration, calories, date, intensity);
      activitiesTable.appendChild(tableRow);
      toggleButton(addActivityButton);
    }
  }

  function createTr(type, duration, calories, date, intensity) {
    const tdType = document.createElement('td');
    tdType.classList.add('type-cell');
    tdType.textContent = type;
    const tdDuration = document.createElement('td');
    tdDuration.classList.add('duration-cell');
    tdDuration.textContent = duration;
    const tdCalories = document.createElement('td');
    tdCalories.classList.add('calories-cell');
    tdCalories.textContent = calories;
    const tdDate = document.createElement('td');
    tdDate.classList.add('date-cell');
    tdDate.textContent = date;
    const tdIntensity = document.createElement('td');
    tdIntensity.classList.add('intensity-cell');
    tdIntensity.textContent = intensity;

    const deleteButton = createButton('delete-btn', 'Delete', onDeleteClickHandler);
    const tdButtonCell = document.createElement('td');
    tdButtonCell.classList.add('btn-cell');
    tdButtonCell.appendChild(deleteButton);

    const tr = document.createElement('tr');
    tr.appendChild(tdType);
    tr.appendChild(tdDuration);
    tr.appendChild(tdCalories);
    tr.appendChild(tdDate);
    tr.appendChild(tdIntensity);
    tr.appendChild(tdButtonCell);

    return tr;
  }

  function onDeleteClickHandler(e) {
    e.currentTarget.closest('tr').remove();
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
