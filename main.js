const display = document.getElementById("display");

function calc(event) {
  const value = event.target.value;
  if (value === "=") {
    display.value = eval(display.value);
  } else if (value === "AC") {
    display.value = 0;
  } else if (value === "DEL") {
    display.value = display.value.toString().slice(0, -1);
  } else if (display.value === "0") {
    display.value = event.target.value;
  } else {
    display.value += event.target.value;
  }
}
