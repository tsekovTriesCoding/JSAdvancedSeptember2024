function lockedProfile() {
    const buttons = document.querySelectorAll('.profile button');

    Array.from(buttons).forEach((button, index) => {
        button.addEventListener('click', (e) => {
            const divParentElement = e.target.parentElement;
            const radioElements = divParentElement.querySelectorAll('input[type=radio]');

            if (radioElements[1].checked && e.target.textContent == 'Show more') {
                e.target.textContent = 'Hide it';
                const hiddenFieldsDiv = divParentElement.querySelector(`#user${index + 1}HiddenFields`);
                hiddenFieldsDiv.style.display = 'block';
            } else if (radioElements[1].checked && e.target.textContent == 'Hide it') {
                e.target.textContent = 'Show more';
                const hiddenFieldsDiv = divParentElement.querySelector(`#user${index + 1}HiddenFields`);
                hiddenFieldsDiv.style.display = 'none';
            }
        });
    });
}