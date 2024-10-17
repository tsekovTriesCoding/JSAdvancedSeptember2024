function solve() {
    const addButton = document.getElementById('add');
    const taskElement = document.getElementById('task');
    const descriptionElement = document.getElementById('description');
    const dateElement = document.getElementById('date');
    const openSectionDivElement = document.querySelector('.wrapper section:nth-child(2) div:nth-child(2)');
    const divInProgress = document.getElementById('in-progress');
    const completeSectionDivElement = document.querySelector('.wrapper section:last-child div:nth-child(2)');

    addButton.addEventListener('click', onAddButtonClick);

    function onAddButtonClick(e) {
        e.preventDefault();

        if (taskElement.value == '' || descriptionElement.value == '' || dateElement.value == '') {
            return;
        }

        const article = createArticle();
        openSectionDivElement.append(article);
    }

    function createArticle() {
        const article = document.createElement('article');
        const h3Task = document.createElement('h3');
        h3Task.textContent = taskElement.value;

        const pDescription = document.createElement('p');
        pDescription.textContent = `Description: ${descriptionElement.value}`;

        const pDate = document.createElement('p');
        pDate.textContent = `Due Date: ${dateElement.value}`;

        const divClassFlex = document.createElement("div");
        divClassFlex.classList.add('flex');

        const startButton = document.createElement('button');
        startButton.classList.add('green');
        startButton.textContent = 'Start';
        startButton.addEventListener('click', onStartButtonClick);

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('red');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', onDeleteButtonClick);

        divClassFlex.append(startButton);
        divClassFlex.append(deleteButton);

        article.append(h3Task);
        article.append(pDescription);
        article.append(pDate);
        article.append(divClassFlex);

        return article;

        function onStartButtonClick() {
            divClassFlex.innerHTML = '';

            const finishButton = document.createElement('button');
            finishButton.classList.add('orange');
            finishButton.textContent = 'Finish';
            finishButton.addEventListener('click', onFinishButtonClick);

            divClassFlex.append(deleteButton);
            divClassFlex.append(finishButton);

            divInProgress.append(article);
        }

        function onDeleteButtonClick() {
            article.remove();
        }

        function onFinishButtonClick() {
            divClassFlex.remove();
            completeSectionDivElement.append(article);
        }
    }

}