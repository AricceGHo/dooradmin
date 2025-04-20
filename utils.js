export function getJsonFromUrlParam(paramName) {
       const params = new URLSearchParams(window.location.search);
       const data = params.get(paramName);
       console.log("Полученные данные для параметра:", paramName, "->", data);

       return data ? JSON.parse(data) : [];
   }

// Функция для создания выпадающего меню
// utils.js
export const createDropdown = (dataArray, selectId, columnName, defaultOptionText = "Выберите вариант", onChange) => {
    const select = document.getElementById(selectId);

    // Очищаем предыдущее содержимое
    select.innerHTML = '';

    // Добавляем первоначальную опцию по умолчанию
    const defaultOption = document.createElement('option');
    defaultOption.textContent = defaultOptionText;
    defaultOption.value = ''; // Опция без значения
    select.appendChild(defaultOption);

    // Проверяем, есть ли данные в массиве
    if (dataArray.length === 0) {
        const option = document.createElement('option');
        option.textContent = "Нет доступных компаний";
        option.value = ''; // Опция без значения
        select.appendChild(option);
    } else {
        // Заполняем опции из данных
        dataArray.forEach(item => {
            const option = document.createElement('option');
            option.value = item.id; // Здесь предполагается, что у объектов есть свойство id
            option.textContent = item[columnName] ? item[columnName] : "Значение отсутствует"; // Выводим значение второго поля
            select.appendChild(option);
        });
    }

    // Устанавливаем обработчик события
    select.addEventListener('change', () => {
        const selectedValue = select.value; // Получаем текущее выбранное значение

        // Вызываем callback, если он передан
        if (onChange) {
            onChange(selectedValue);
        }

        console.log("Выбранный вариант:", selectedValue); // Выводим выбранное значение в консоль
    });
};
