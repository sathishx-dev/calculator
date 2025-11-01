const display = document.getElementById('display');

function buttonClick(value) {
  if (value === 'C') return display.value = '';
  if (value === '⌫') return display.value = display.value.slice(0, -1);
  if (value === '=') {
    display.value = eval(display.value.replace(/\^/g, '**'));
    return;
  }
  if (value === '%') return display.value = parseFloat(display.value) / 100 || '';
  
  display.value = (display.value || '') + value;
}





