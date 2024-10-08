function extract(content) {
    const contentParagraph = document.getElementById(content);

    const matchedWords = contentParagraph.textContent.matchAll(/\(([A-Za-z ]+)\)/g);

    return Array.from(matchedWords).map(arr => arr[1]).join('; ');
}

let text = extract("content");
console.log(text);
