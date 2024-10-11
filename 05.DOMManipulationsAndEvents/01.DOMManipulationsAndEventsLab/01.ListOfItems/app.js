function addItem() {
    const itemsUl = document.getElementById('items');
    const newItemText = document.getElementById('newItemText');

    const li = document.createElement('li');
    li.textContent = newItemText.value;

    itemsUl.appendChild(li);
    newItemText.value = '';
}