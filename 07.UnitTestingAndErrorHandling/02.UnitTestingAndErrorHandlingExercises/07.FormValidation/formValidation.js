function validate() {
    const usernameElement = document.getElementById('username');
    const emailElement = document.getElementById('email');
    const passwordElement = document.getElementById('password');
    const confirmPasswordElement = document.getElementById('confirm-password');
    const companyElement = document.getElementById('company');
    const companyInfoElement = document.getElementById('companyInfo');
    const companyNumber = document.getElementById('companyNumber');
    const submitButtonElement = document.getElementById('submit');
    const validDivElement = document.getElementById('valid');
    const inputs = document.querySelectorAll('.pairContainer input');

    const usernamePattern = /^[A-Za-z0-9]+$/;
    const passwordPattern = /^\w+$/;
    const emailPattern = /^[^@.]+@[^@]*\.[^@]*$/;

    submitButtonElement.addEventListener('click', onSubmitClick);

    function onSubmitClick(e) {
        e.preventDefault();

        validateFields();
        const hasInvalidFields = Array.from(inputs).some(x => x.style.borderColor == 'red');

        if (!hasInvalidFields) {
            validDivElement.style.display = 'block';
        }
    }

    companyElement.addEventListener('change', () => {
        if (companyElement.checked) {
            companyInfoElement.style.display = 'block';
        } else {
            companyInfoElement.style.display = 'none';
        }
    });

    function validateFields() {
        if (usernameElement.value.length < 3 || usernameElement.value.length > 20 || !usernamePattern.test(usernameElement.value)) {
            usernameElement.style.borderColor = 'red';
        }

        if (passwordElement.value.length < 5 || passwordElement.value.length > 15 || !passwordPattern.test(passwordElement.value)) {
            passwordElement.style.borderColor = 'red';
        }

        if (confirmPasswordElement.value.length < 5 || confirmPasswordElement.value.length > 15 || !passwordPattern.test(passwordElement.value)) {
            confirmPasswordElement.style.borderColor = 'red';
        }

        if (passwordElement.value !== confirmPasswordElement.value) {
            passwordElement.style.borderColor = 'red';
            confirmPasswordElement.style.borderColor = 'red';
        }

        if (!emailPattern.test(emailElement.value)) {
            emailElement.style.borderColor = 'red';
        }

        if (companyInfoElement.style.display == 'block') {
            if (companyNumber.value < 1000 || companyNumber.value > 9999) {
                companyNumber.style.borderColor = 'red';
            }
        }
    }
}
