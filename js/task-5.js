function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
// Зберігаємо посилання на тіло документа у змінній body

const body = document.body;

// Знаходимо перший елемент з класом.color на сторінці і зберігає його посилання у змінній colorSpan.

const colorSpan = document.querySelector('.color');

// Знаходимо першу кнопку з класом.change - color на сторінці і зберігає її посилання у змінній changeColorBtn.

const changeColorBtn = document.querySelector('.change-color');

// Додаємо прослуховувач подій до кнопки з класом .change-color. Коли користувач клікає на цю кнопку, викликається функція, яка буде описана всередині.
   
   changeColorBtn.addEventListener('click', function () {
     
//  Генерується випадковий колір у форматі шістнадцяткового коду за допомогою функції getRandomHexColor().
     
     const newColor = getRandomHexColor();
 // Встановлюємо новий колір фону тіла документа на згенерований випадковий колір.
        
        body.style.backgroundColor = newColor;
     
 // Оновлюємо текстовий вміст елементу з класом .color, щоб відображати новий випадковий колір.

  colorSpan.textContent = newColor;
});
