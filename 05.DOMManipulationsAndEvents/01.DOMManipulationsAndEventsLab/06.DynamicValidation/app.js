function validate() {
    const emailInput = document.getElementById('email');
    const emailRegex = /[a-z]+@[a-z]+.[a-z]+/;

    emailInput.addEventListener('change', () => {
        const email = emailInput.value;

        if (email.match(emailRegex) != null) {
            emailInput.classList.remove('error');
        } else {
            emailInput.classList.add('error');
        }
    });
}