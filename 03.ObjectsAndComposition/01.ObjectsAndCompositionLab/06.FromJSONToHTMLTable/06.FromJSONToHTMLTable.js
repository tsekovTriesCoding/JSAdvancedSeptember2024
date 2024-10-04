function solve(input) {
    const array = JSON.parse(input);

    let output = ['<table>'];
    const tableHeadings = Object.keys(JSON.parse(input)[0]);

    output.push(createThElement(tableHeadings));
    Object.values(array).forEach((obj) => output.push(createTdElement(obj)));
    output.push('</table>');

    function createThElement(arr) {
        let result = '   <tr>';
        arr.forEach(key => {
            result += `<th>${escapeHtml(key)}</th>`;
        });
        result += '</tr>';
        return result;
    }

    function createTdElement(obj) {
        let result = '   <tr>';
        Object.values(obj).forEach(value => {
            result += `<td>${escapeHtml(value)}</td>`;
        });
        result += '</tr>';
        return result;
    }

    function escapeHtml(str) {
        let entityMap = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': '&quot;',
            "'": '&#39;',
            "/": '&#x2F;'
        };
        return str.toString().replace(/[&<>"'\/]/g, (s) => entityMap[s]);
    }

    return output.join('\n');
}

solve(`[{"Name":"Stamat", "Score":5.5}, 
   {"Name":"Rumen", "Score":6}]` );
solve(`[{"Name":"Pesho", 

    "Score":4, 

    "Grade":8}, 
   {"Name":"Gosho", 

    "Score":5, 

    " Grade":8}, 

   {"Name":"Angel", 

    "Score":5.50, 

    " Grade":10}]`);