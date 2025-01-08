document.addEventListener('DOMContentLoaded', (event) => {
  var inputs = Array.from(document.querySelectorAll('.code'));

  inputs.forEach((input, index) => {
    input.addEventListener('input', () => {
      if (input.value.length > 0) {
        if (index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      }
    });

    input.addEventListener('keydown', (event) => {
      if (event.key === 'Backspace' && input.value.length === 0) {
        if (index > 0) {
          inputs[index - 1].focus();
        }
      }
    });
  });

  // Set the focus on the first input field when the page loads
  if (inputs.length > 0) {
    inputs[0].focus();
  }
});