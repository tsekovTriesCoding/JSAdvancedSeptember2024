function focused() {
    const inputElements = document.querySelectorAll('div>input');

    Array.from(inputElements).forEach(el => {
       el.addEventListener('focus', (e) => {
        const divElement = e.target.parentElement;
        divElement.classList.add('focused');
       });

       el.addEventListener('blur', (e) => {
        const divElement = e.target.parentElement;
        divElement.classList.remove('focused');
       })
    });
}