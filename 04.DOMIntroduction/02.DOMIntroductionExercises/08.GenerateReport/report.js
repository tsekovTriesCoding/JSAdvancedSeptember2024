function generateReport() {
    const inputElements = document.querySelectorAll('table tr th input');
    const trElementsInTBody = document.querySelectorAll('table tbody tr');
    const output = document.getElementById('output');

    let result = [];

    Array.from(trElementsInTBody).forEach((tr) => {
        const td = tr.querySelectorAll('td');
        let obj = {};

        Array.from(td).forEach((td, index) => {
            const tableHeadInput = inputElements[index];

            if (tableHeadInput.checked) {
                obj[tableHeadInput.name] = td.textContent;
            }
        });
        result.push(obj);

    });

    output.value = JSON.stringify(result);
}