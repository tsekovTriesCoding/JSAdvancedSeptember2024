function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searchText = document.getElementById('searchField');
      const tdElements = document.querySelectorAll('tbody>tr>td');

      Array.from(tdElements).forEach(el => {
         const trParentElement = el.parentElement;
         trParentElement.classList.remove('select');
      });

      Array.from(tdElements).forEach(el => {
         if (el.textContent.includes(searchText.value)) {
            const trParentElement = el.parentElement;
            trParentElement.classList.add('select');
         }
      });

      searchText.value = '';
   }
}