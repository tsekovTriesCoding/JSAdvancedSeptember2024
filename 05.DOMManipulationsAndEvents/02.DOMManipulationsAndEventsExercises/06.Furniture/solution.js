function solve() {
  const textarea = document.querySelector('#exercise textarea');
  const generateButton = document.querySelector('#exercise button');
  const tbody = document.querySelector('.table tbody');
  const buyButton = document.querySelector('#exercise button:last-of-type');
  const textareaForBuyButton = document.querySelectorAll('#exercise textarea')[1];

  generateButton.addEventListener('click', onGenerateButtonClickHandler);
  buyButton.addEventListener('click', onBuyButtonClickHandler);

  function onGenerateButtonClickHandler() {
    const furnitures = JSON.parse(textarea.value);

    furnitures.forEach(furniture => {
      const tr = document.createElement('tr');

      const img = document.createElement('img');
      img.src = furniture.img;
      const tdImg = document.createElement('td');
      tdImg.append(img);

      const paragraphName = document.createElement('p');
      paragraphName.textContent = furniture.name;
      const tdName = document.createElement('td');
      tdName.append(paragraphName);

      const paragraphPrice = document.createElement('p');
      paragraphPrice.textContent = Number(furniture.price);
      const tdPrice = document.createElement('td');
      tdPrice.append(paragraphPrice);

      const paragraphDecFactor = document.createElement('p');
      paragraphDecFactor.textContent = Number(furniture.decFactor);
      const tdDecFactor = document.createElement('td');
      tdDecFactor.append(paragraphDecFactor);

      const inputCheckbox = document.createElement('input');
      inputCheckbox.type = 'checkbox';
      const tdInputCheckpox = document.createElement('td');
      tdInputCheckpox.append(inputCheckbox);

      tr.append(tdImg);
      tr.append(tdName);
      tr.append(tdPrice);
      tr.append(tdDecFactor);
      tr.append(tdInputCheckpox);

      tbody.append(tr);
    });
  }

  let boughtFurniture = [];
  let totalPrice = 0;
  let totalDecFactor = 0;
  function onBuyButtonClickHandler() {
    const inputCheckboxes = document.querySelectorAll('.table tbody tr input[type=checkbox]');

    Array.from(inputCheckboxes).filter(c => c.checked)
      .forEach(checkbox => {
        const tr = checkbox.parentElement.parentElement;
        const furnitureName = tr.querySelector('td:nth-child(2) p').textContent;
        const furniturePrice = Number(tr.querySelector('td:nth-child(3) p').textContent);
        const furnitureDecFactor = Number(tr.querySelector('td:nth-child(4) p').textContent);

        boughtFurniture.push(furnitureName);
        totalPrice += furniturePrice;
        totalDecFactor += furnitureDecFactor;
      });

    const avgDecFactor = totalDecFactor / boughtFurniture.length;
    textareaForBuyButton.value = `Bought furniture: ${boughtFurniture.join(', ')}\n`;
    textareaForBuyButton.value += `Total price: ${totalPrice.toFixed(2)}\n`;
    textareaForBuyButton.value += `Average decoration factor: ${avgDecFactor}`;
  }
}