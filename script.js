document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. ЛОГИКА КАРТОЧЕК ---
    const buttons = document.querySelectorAll('.nav-btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Достаем значение из data-url
            // JS автоматически превращает data-url в свойство dataset.url
            const targetPage = button.dataset.url;

            if (targetPage) {
                console.log(`Кнопка нажата! Переходим на: ${targetPage}`);
                window.location.href = targetPage;
            } else {
                console.error("У этой кнопки не указан адрес в data-url!");
            }
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