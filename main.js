const display = document.getElementById("display");

function calc(event) {
  const value = event.target.value;
  if (value === "=") {
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = "Error";
    }
  } else if (value === "C") {
    display.value = "0";
  } else {
    display.value = display.value === "0" ? value : display.value + value;
  }
}
