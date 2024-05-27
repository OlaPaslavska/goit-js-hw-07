    
    const nameInput = document.querySelector('#name-input');
    const nameOutput = document.querySelector('#name-output');

          // Очищення значення від пробілів по краях
nameInput.addEventListener('input', () => {
      const trimmedValue = nameInput.value.trim(); 

    if (trimmedValue === '') {
          // Якщо інпут порожній або містить лише пробіли
        nameOutput.textContent = 'Anonymous'; 
    } else {
         // Якщо є введене ім'я
        nameOutput.textContent = trimmedValue;
      }
    });
