// Вы разрабатываете веб-страницу для отображения расписания занятий в спортивном клубе. Каждое занятие имеет название, время проведения, максимальное количество участников и текущее количество записанных участников.

// 1. Создайте веб-страницу с заголовком "Расписание занятий" и областью для отображения занятий.

// 2. Загрузите информацию о занятиях из предоставленных JSON-данных. Каждое занятие должно отображаться на странице с указанием его названия, времени проведения, максимального количества участников и текущего количества записанных участников.

// 3. Пользователь может нажать на кнопку "Записаться" для записи на занятие. Если максимальное количество участников уже достигнуто, кнопка "Записаться" становится неактивной.

// 4. После успешной записи пользователя на занятие, обновите количество записанных участников и состояние кнопки "Записаться".

// 5. Запись пользователя на занятие можно отменить путем нажатия на кнопку "Отменить запись". После отмены записи, обновите количество записанных участников и состояние кнопки.

// 6. Все изменения (запись, отмена записи) должны сохраняться и отображаться в реальном времени на странице.

// 7. При разработке используйте Bootstrap для стилизации элементов.

const localStorageKey = "lessons";
const lessonJSON = `[{"id":1,"name":"Математика","date":"12.12.2024 17:45","studentcount":20,"studentin":10},{"id":2,"name":"Физика","date":"10.12.2024 10:00","studentcount":20,"studentin":5},{"id":3,"name":"Химия","date":"15.12.2024 09:30","studentcount":20,"studentin":19}]`;
const listLessons = document.querySelector(".my-list");

if (!localStorage.getItem(localStorageKey)) {
  localStorage.setItem(localStorageKey, lessonJSON);
}

const lessonsData = JSON.parse(localStorage.getItem(localStorageKey));
function createListLessons(lesson) {
  const result = `
    <div class="accordion-item">
      <h2 class="accordion-header">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
              aria-expanded="true" aria-controls="collapseOne">
              ${lesson.name}
          </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div class="accordion-body ${lesson.id}">
              <strong>Время проведения занятия ${lesson.date}</strong>
              Количество мест на занятии ${lesson.studentcount}, <span class="my-studentcount">количество записавшихся ${lesson.studentin}</span>
              <button class="my-registration">Записаться на занятия</button>
              <button class="my-cancellation" disabled>Отменить запись</button>
          </div>
      </div>
    </div>`;

  return result;
}

listLessons.innerHTML = lessonsData.map(createListLessons).join("");

function changeStudentsCount(
  lessonsData,
  lesson,
  num,
  localStorageKey,
  studentInformation
) {
  lesson.studentin += num;
  localStorage.setItem(localStorageKey, JSON.stringify(lessonsData));
  studentInformation.textContent = `количество записавшихся ${lesson.studentin}`;
}

let counterRegistration = 0;

listLessons.addEventListener("click", ({ target }) => {
  const divItem = target.closest("div");
  const studentInformation = divItem.querySelector(".my-studentcount");
  const lesson = lessonsData.find((ls) => ls.id === +divItem.classList[1]);

  if (target.closest(".my-registration")) {
    changeStudentsCount(
      lessonsData,
      lesson,
      1,
      localStorageKey,
      studentInformation
    );
    const cancellation = divItem.querySelector(".my-cancellation");
    cancellation.removeAttribute("disabled");
    counterRegistration++;
    if (lesson.studentcount === lesson.studentin) {
      target.setAttribute("disabled", "");
      target.textContent = "Запись заполнена";
    }
  } else if (target.closest(".my-cancellation")) {
    if (counterRegistration > 0) {
      changeStudentsCount(
        lessonsData,
        lesson,
        -1,
        localStorageKey,
        studentInformation
      );
      counterRegistration -= 1;
      const registration = divItem.querySelector(".my-registration");
      if (registration.hasAttribute("disabled")) {
        registration.removeAttribute("disabled");
        registration.textContent = "Записаться на занятие";
      }
    } else {
      target.setAttribute("disabled", "");
    }
  }
});
