function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

function createBoxes(amount) {
      // Отримуємо елемент контейнера з ідентефікатором 'boxes' і очищаємо його внутрішній зміст
      const boxesContainer = document.getElementById('boxes');
      boxesContainer.innerHTML = '';
      // Встановлюємо його початкові розміри коробки
      let width = 30;
      let height = 30;
      // Для кожної коробки від 0 до amount
  for (let i = 0; i < amount; i++) {
      // Створюємо новий елемент 'div'
        const box = document.createElement('div');
      // Додаємо йому клас 'box'
        box.classList.add('box');
      // Встановлюємо йому ширину і висоту
        box.style.width = `${width}px`;
        box.style.height = `${height}px`;
      //  Встановлюємо випадковий колір
        box.style.backgroundColor = getRandomHexColor();
      //  Додаємо створену коробку до контейнера
        boxesContainer.appendChild(box);
      //  Збільшуємо розмір кожної наступної коробки на 10рх
        width += 10;
        height += 10;
      }
    }
      // Отримуємо елемент контейнера з ідентифікатором boxes і очищаємо його внутрішній вміст.
    function destroyBoxes() {
      const boxesContainer = document.getElementById('boxes');
      boxesContainer.innerHTML = '';
    }
      // Отримуємо значення з поля введення
    document.querySelector('[data-create]').addEventListener('click', () => {
      const input = document.querySelector('input[type="number"]');
      // Перетворюємо його на ціле число
      const amount = parseInt(input.value);

      // Якщо число в діапазоні від 0 до 100
      if (amount >= 1 && amount <= 100) {
        createBoxes(amount);
        input.value = '';
      // Якщо число не в діапазоні виводимо повідомлення про помилку
      } else {
        alert('Please enter a number between 1 and 100.');
      }
    });
        
    document.querySelector('[data-destroy]').addEventListener('click', () => {
      destroyBoxes();
    });









    // Так багато коментарів,бо дуууже важко іде JS. Це я для себе)))