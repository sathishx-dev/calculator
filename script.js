const display=document.getElementById('display')

function buttonClick(value) {


  if (value === "C" ) {
    display.value = "";
  } else if (value === "⌫") {
    display.value = display.value.slice(0, -1); 
  } else if (value === "=") {

    var result = display.value.replace(/\^/g, "**");
    display.value = eval(result);
  } else if (value === "%") {
    display.value = Number(display.value) / 100; 
  } else {
    if (!display.value || display.value === "undefined") {
      display.value = "";
    }
    display.value += value;
  }
}




