function editElement(htmlReference, match, replacer) {
    htmlReference.textContent = htmlReference.textContent.replaceAll(match, replacer);
}