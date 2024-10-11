function deleteByEmail() {
    const email = document.querySelector('input[name=email]');
    const tableBodyRows = document.querySelectorAll('tbody tr');
    const result = document.getElementById('result')

    for (const row of tableBodyRows) {
        const currentEntryEmail = row.querySelector('td:nth-child(2)');

        if (currentEntryEmail.textContent == email.value) {
            row.remove();
            result.textContent = "Deleted";
            return;
        }
    }

    result.textContent = 'Not found.'
}