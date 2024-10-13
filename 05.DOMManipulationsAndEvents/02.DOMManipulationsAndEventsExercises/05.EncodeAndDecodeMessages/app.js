function encodeAndDecodeMessages() {
    const buttons = document.querySelectorAll('#main button');
    const textareas = document.querySelectorAll('#main textarea');
    const encodeButton = buttons[0];
    const decodeButton = buttons[1];

    encodeButton.addEventListener('click', onEncodeButtonClickHandler);
    decodeButton.addEventListener('click', onDecodeButtonClickHandler);

    function onEncodeButtonClickHandler() {
        const textarea = textareas[0];
        const message = textarea.value;
        const encodedMessage = encodeMessage(message);

        textareas[1].value = encodedMessage;
        textarea.value = '';
    }

    function onDecodeButtonClickHandler() {
        const textarea = textareas[1];
        const message = textarea.value;
        const decodedMessage = decodeMessage(message);

        textareas[1].value = decodedMessage;
    }

    function encodeMessage(message) {
        let encodedMessage = '';

        for (let i = 0; i < message.length; i++) {
            const currentChar = message[i].charCodeAt(0);
            const newChar = String.fromCharCode(currentChar + 1);
            encodedMessage += newChar;
        }

        return encodedMessage;
    }

    function decodeMessage(message) {
        let decodedMessage = '';

        for (let i = 0; i < message.length; i++) {
            const currentChar = message[i].charCodeAt(0);
            const newChar = String.fromCharCode(currentChar - 1);
            decodedMessage += newChar;
        }

        return decodedMessage;
    }

}