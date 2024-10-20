function validate() {
    const emailElement = document.getElementById('email');
    const emailRegEx = /[a-z]+@[a-z]+.[a-z]+/;

    console.log(emailRegEx.test(emailElement.input));
    
    emailElement.addEventListener('change', (event) => {
        if (!emailRegEx.test(event.target.value)) {
            event.target.classList.add('error');
        } else {
            event.target.classList.remove('error');
        }
    });
}