function solve() {
  const inputText = document.getElementById('input').value;
  const output = document.getElementById('output');

  const sentences = inputText.split('.')
    .filter(sentence => sentence);

    const result = sentences
    .filter(sentence => sentence)
    .reduce((result, sentence, i) => {
      const currentIndex = Math.trunc(i / 3);

      if (!result[currentIndex]) {
        result[currentIndex] = [];
      }

      result[currentIndex].push(sentence.trim());

      return result;
    }, [])
    .map(sentences => `<p>${sentences.join('.')}.</p>`)
    .join('\n');

  output.innerHTML = result;
}