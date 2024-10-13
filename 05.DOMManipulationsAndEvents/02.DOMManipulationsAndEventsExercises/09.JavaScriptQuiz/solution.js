function solve() {
  const sections = document.querySelectorAll('#quizzie section');
  const correctAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
  const resultsH1Element = document.querySelector('#results h1');

  let correctAnswersCount = 0;
  sections.forEach(section => {
    const buttons = section.querySelectorAll('.answer-text');
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        section.classList.add('hidden');
        section.style.display = 'none';

        if (correctAnswers.includes(button.textContent)) {
          correctAnswersCount++;
        }

        const nextSection = section.nextElementSibling;
        nextSection.classList.remove('hidden');
        nextSection.style.display = 'block';

        if (nextSection.id === 'results') {
          nextSection.style.display = 'block';

          if (correctAnswersCount == 3) {
            resultsH1Element.textContent = 'You are recognized as top JavaScript fan!';
          } else {
            resultsH1Element.textContent = `You have ${correctAnswersCount} right answers`
          }
        }
      });
    });
  });

}
