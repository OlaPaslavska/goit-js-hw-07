            // Цей рядок встановлює прослуховувач подій, який очікує події "DOMContentLoaded". 
document.addEventListener('DOMContentLoaded', function () {
    
           // Знаходимо перший елемент форми з класом.login - form на сторінці і зберігає його посилання у змінній form.
    
    const form = document.querySelector('.login-form');

            // Додаємо прослуховувач подій для події "submit" форми.Коли користувач надсилає форму(натискає на кнопку "submit"), викликається функція
    
    form.addEventListener('submit', function (event) {
            // Викликаємо метод для запобігання перезавантажування сторінки(скасування дії браузера)
        event.preventDefault();

        const emailInput = form.elements['email'];
        const passwordInput = form.elements['password'];
           // Значення елементів форми (поля email та password) зчитуються, вони очищуються від зайвих пробілів з країв за допомогою методу trim()
        const emailValue = emailInput.value.trim();
        const passwordValue = passwordInput.value.trim();
            // Якщо при сабміті у формі є незаповнені поля, виводь alert з попередженням
        if (emailValue === '' || passwordValue === '') {
            alert('All form fields must be filled in');
        } else {
            // Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт з двома властивостями, де ключ — це ім'я інпутів, а значення — відповідні значення цих інпутів, очищені від пробілів по краях.
            const formData = {
                email: emailValue,
                password: passwordValue
            };

            console.log(formData);
            //  Після сабміту елементи форми очищаємо,за допомогою reset
            form.reset();
        }
    });
    });
