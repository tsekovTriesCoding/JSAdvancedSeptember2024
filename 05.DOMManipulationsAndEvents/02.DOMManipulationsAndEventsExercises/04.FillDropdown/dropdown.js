function addItem() {
    const selectElement = document.getElementById('menu');
    const newItemTextInput = document.getElementById('newItemText');
    const newItemValueInput = document.getElementById('newItemValue');

    const option = document.createElement('option');
    option.textContent = newItemTextInput.value;
    option.value = newItemValueInput.value;

    selectElement.append(option);

    newItemTextInput.value = '';
    newItemValueInput.value = '';
}