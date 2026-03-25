// Ждем, пока весь HTML загрузится
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Находим все кнопки в карточках
    const buttons = document.querySelectorAll('.card button');

    // 2. Перебираем каждую кнопку и вешаем на нее "слушатель" клика
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            
            // Получаем заголовок именно той карточки, где нажата кнопка
            const cardTitle = button.parentElement.querySelector('h3').innerText;
            
            // Выводим сообщение
            alert(`Вы выбрали: ${cardTitle}\nСкоро здесь будет больше информации!`);

            // Добавим немного интерактива: меняем цвет фона карточки
            button.parentElement.style.backgroundColor = '#e1f5fe';
            button.innerText = 'Выбрано ✅';
        });
    
        // Создадим кнопку переключения темы программно
    const themeBtn = document.createElement('button');
    themeBtn.innerText = 'Сменить тему 🌙';
    themeBtn.style.position = 'fixed';
    themeBtn.style.bottom = '20px';
    themeBtn.style.right = '20px';
    document.body.appendChild(themeBtn);

    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        themeBtn.innerText = document.body.classList.contains('dark-mode') ? 'Светлая тема ☀️' : 'Темная тема 🌙';
});
    });

    // Бонус: Сделаем лог в консоль браузера (F12), чтобы видеть, что JS работает
    console.log("Скрипт успешно запущен! Кнопки готовы к работе.");
});