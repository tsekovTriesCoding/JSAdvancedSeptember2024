function solve() {
  const text = document.getElementById('text').value;
  const namingConvention = document.getElementById('naming-convention').value;
  const result = document.getElementById('result');

  switch (namingConvention) {
    case 'Camel Case':
      result.textContent = toCamelCase(text);
      break;
    case 'Pascal Case':
      result.textContent = toPascalCase(text);
      break;
    default:
      result.textContent = 'Error!';
      break;
  }

  function toCamelCase(str) {
    str = str.toLowerCase().split(' ');
    let result = [str.shift()];

    for (const word of str) {
      result.push(capitalizeFirstLetter(word));
    }

    return result.join('');
  }

  function toPascalCase(str) {
    str = str.toLowerCase().split(' ');
    let result = [];

    for (const word of str) {
      result.push(capitalizeFirstLetter(word));
    }

    return result.join('');
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}