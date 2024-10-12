function create(words) {
   const contentElement = document.getElementById('content');

   words.forEach(word => {
      const divElement = document.createElement('div');
      const pElement = document.createElement('p');
      pElement.textContent = word;
      pElement.style.display = 'none';

      divElement.append(pElement);
      divElement.addEventListener('click', () => {
         pElement.style.display = 'block';
      });

      contentElement.append(divElement);
   });
}