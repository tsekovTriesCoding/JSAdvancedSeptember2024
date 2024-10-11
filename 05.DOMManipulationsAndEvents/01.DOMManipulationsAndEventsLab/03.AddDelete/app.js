function addItem() {
    const itemsUl = document.getElementById('items');
    const newItemText = document.getElementById('newItemText');

    const li = document.createElement('li');
    li.textContent = newItemText.value;
    const deleteLink = document.createElement('a');
    deleteLink.textContent = '[Delete]';
    deleteLink.href = '#';
    deleteLink.addEventListener('click', () => {
        li.remove();
    });

    li.appendChild(deleteLink);

    itemsUl.appendChild(li);
    newItemText.value == '';
}