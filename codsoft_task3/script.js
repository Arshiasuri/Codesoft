const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');
    switch (value) {
      case 'C':
        clearDisplay();
        break;
      case 'CE':
        clearEntry();
        break;
      case '=':
        calculateResult();
        break;
      case '√':
        calculateSquareRoot();
        break;
      case '1/x':
        calculateReciprocal();
        break;
      default:
        addToDisplay(value);
    }
  });
});

function clearDisplay() {
  display.value = '';
}

function clearEntry() {
  display.value = display.value.slice(0, -1);
}

function addToDisplay(value) {
  display.value += value;
}

function calculateResult() {
  try {
    const result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}

function calculateSquareRoot() {
  try {
    const result = Math.sqrt(display.value);
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}

function calculateReciprocal() {
  try {
    const result = 1 / display.value;
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}