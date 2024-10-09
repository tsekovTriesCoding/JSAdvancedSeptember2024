function search() {
   const towns = document.querySelectorAll('#towns>li');
   const searchText = document.getElementById('searchText').value;
   const result = document.getElementById('result');
   result.textContent = '';
   Array.from(towns).forEach(town => {
      town.style.textDecoration = 'none';
      town.style.fontWeight = 'normal';
   });

   let count = 0;
   Array.from(towns).forEach(town => {
      if (town.textContent.includes(searchText)) {
         count++;
         town.style.textDecoration = 'underline';
         town.style.fontWeight = 'bold';
      }
   });

   result.textContent = `${count} matches found`;
}
