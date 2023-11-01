const date = new Date();
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function showCalendar(date) {
    // Определяем текущий месяц и год
    const month = date.getMonth();
    const year = date.getFullYear();
    // Заполняем заголовок текущим месяцем и годом
    const monthHeader = document.getElementById("month-header");
    monthHeader.innerText = `${monthNames[month]} ${year}`;
    // Получаем число дней в месяце
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    // Получаем первый день месяца
    const firstDay = new Date(year, month, 1).getDay();
    // Получаем таблицу, в которую будем вставлять дни месяца
    const calendarBody = document.getElementById("calendar-body");
    calendarBody.innerHTML = "";
    // Создаем строки таблицы
    let row = document.createElement("tr");
    // Заполняем ячейки пустыми элементами до первого дня месяца
    for(let i = 0; i < firstDay; i++) {
            let cell = document.createElement("td");
            cell.innerText = "";
            row.appendChild(cell);
        }
        // Заполняем ячейки днями месяца
        for(let i = 1; i <= daysInMonth; i++) {
            let cell = document.createElement("td");
            cell.innerText = i;
            row.appendChild(cell);
            // Проверяем, является ли текущий день сегодняшним днем
            if(i === date.getDate() && date.getMonth() === month && date.getFullYear() === year) {
                cell.classList.add("today");
            }
            // Если это последний день недели - создаем новую строку
            if(row.cells.length === 7) {
                calendarBody.appendChild(row);
                row = document.createElement("tr");
            }
        }
        // Заполняем последние ячейки таблицы пустыми элементами до конца недели
        if(row.cells.length !== 0) {
            for(let i = row.cells.length; i < 7; i++) {
                let cell = document.createElement("td");
                cell.innerText = "";
                row.appendChild(cell);
            }
            calendarBody.appendChild(row);
        }
    }

    function prevMonth() {
    date.setMonth(date.getMonth() - 1);
    showCalendar(date);
    }
 
function nextMonth() {
    date.setMonth(date.getMonth() + 1);
    showCalendar(date);
}
 
const prevMonthBtn = document.getElementById("prev-month");
prevMonthBtn.addEventListener("click", prevMonth);
 
const nextMonthBtn = document.getElementById("next-month");
nextMonthBtn.addEventListener("click", nextMonth);