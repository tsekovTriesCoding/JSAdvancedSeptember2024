function extractText() {
    const itemsUl = document.getElementById('items');
    const resultTextarea = document.getElementById('result');
    let result = [];

    Array.from(itemsUl.children).forEach(child => result.push(child.textContent));
    resultTextarea.value = result.join('\n');
}