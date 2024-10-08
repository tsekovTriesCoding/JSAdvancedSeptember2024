function colorize() {
    const tableRows = document.querySelectorAll('tr');

    Array.from(tableRows).forEach((row, index) => {
        if(index % 2 != 0) {
            row.style.backgroundColor = 'teal';
        }
    });
}