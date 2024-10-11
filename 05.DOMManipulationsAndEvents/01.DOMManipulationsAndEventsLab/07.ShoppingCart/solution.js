function solve() {
   const products = document.querySelectorAll('.product');
   const textarea = document.querySelector('.shopping-cart textarea');
   const checkoutButton = document.querySelector('.checkout');

   let totalCost = 0;
   let list = [];
   Array.from(products).forEach(product => {
      console.log(product);

      const addButton = product.querySelector('.product-add');
      const productTitle = product.querySelector('.product-details .product-title');
      const productPrice = product.querySelector('.product-line-price');

      addButton.addEventListener('click', () => {
         textarea.value += `Added ${productTitle.textContent} for ${Number(productPrice.textContent).toFixed(2)} to the cart.\n`;
         totalCost += Number(productPrice.textContent);

         if (!list.includes(productTitle.textContent)) {
            list.push(productTitle.textContent);
         }
      });
   });

   checkoutButton.addEventListener('click', onCheckout);

   function onCheckout(e) {
      textarea.value += `You bought ${list.join(', ')} for ${totalCost.toFixed(2)}.`;
      e.target.setAttribute('disabled', 'disabled');

      const addButtons = e.target.parentElement.querySelectorAll('.add-product');

      Array.from(addButtons).forEach(addButton => addButton.setAttribute('disabled', 'disabled'));
   }
}