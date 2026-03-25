document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. ЛОГИКА КАРТОЧЕК ---
    const buttons = document.querySelectorAll('.card button');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const cardTitle = button.parentElement.querySelector('h3').innerText;
            alert(`Вы выбрали: ${cardTitle}`);
            
            button.parentElement.style.backgroundColor = '#e1f5fe';
            button.innerText = 'Выбрано ✅';
        });
    });

    // --- 2. ЛОГИКА ТЕМЫ (вынесена из цикла) ---
    const themeBtn = document.createElement('button');
    themeBtn.innerText = 'Сменить тему 🌙';
    // Добавим класс для стилизации через CSS, чтобы не писать стили в JS
    themeBtn.classList.add('theme-toggle'); 
    document.body.appendChild(themeBtn);

    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        themeBtn.innerText = document.body.classList.contains('dark-mode') ? 'Светлая тема ☀️' : 'Темная тема 🌙';
    });

    console.log("Скрипт загружен: кнопка темы создана один раз, кнопки карточек активны.");
});