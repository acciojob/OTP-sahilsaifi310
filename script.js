 let inputBoxes = document.querySelectorAll('.code');

        inputBoxes.forEach((input, index) => {
            //
            input.addEventListener('input', function() {
                if (input.value.length == 1 && index < inputBoxes.length - 1) {
                    inputBoxes[index + 1].focus();  
                }
            });

            
            input.addEventListener('keydown', function(e) {
                if (e.key === 'Backspace' && input.value.length === 0 && index > 0) {
                    inputBoxes[index - 1].focus();  
                }
            });
        });