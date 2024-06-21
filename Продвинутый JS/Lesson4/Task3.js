/*1. Вы создаете веб-страницу для отображения списка статей. Каждая статья состоит из заголовка и
текста. Вам необходимо использовать Bootstrap для стилизации элементов.
2. Используйте Bootstrap, чтобы стилизовать элементы:
a. Заголовок статьи (<h2>)
b. Текст статьи (<p>)
c. Кнопки "Добавить статью", "Удалить" и "Редактировать".
3. Создайте начальный список статей, который будет загружаться при загрузке страницы. Используйте
JSON-данные для определения заголовков и текстов статей.
4. Позвольте пользователю добавлять новые статьи. При нажатии на кнопку "Добавить статью" должна
появиться новая статья с заголовком "Новая статья" и текстом "Введите содержание статьи...".
5. Реализуйте функциональность удаления статей. При нажатии на кнопку "Удалить" соответствующая
статья должна быть удалена из списка.
6. Реализуйте функциональность редактирования статей. При нажатии на кнопку "Редактировать"
пользователь должен иметь возможность изменить заголовок и текст статьи. Используйте
всплывающее окно или prompt для ввода новых данных.
7. Все изменения (добавление, удаление, редактирование) должны быть сохранены в локальное
хранилище браузера, чтобы они сохранялись после перезагрузки страницы.
 */

// const initialJSON = JSON.stringify([
//   {
//     id: Date.now(),
//     title: "Заголовок статьи 1",
//     content: "Содержание статьи 1",
//   },
//   {
//     id: Date.now(),
//     title: "Заголовок статьи 2",
//     content: "Содержание статьи 2",
//   },
//   {
//     id: Date.now(),
//     title: "Заголовок статьи 3",
//     content: "Содержание статьи 3",
//   },
// ]);

const listArticles = document.querySelector(".articles");

const initialJSON =
  '[{"id":1718912326639,"title":"Заголовок статьи 1","content":"Содержание статьи 1"},{"id":1718912326640,"title":"Заголовок статьи 2","content":"Содержание статьи 2"},{"id":1718912326641,"title":"Заголовок статьи 3","content":"Содержание статьи 3"}]';

const localStorageKey = "articles";

if (!localStorage.getItem(localStorageKey)) {
  localStorage.setItem(localStorageKey, initialJSON);
}

const articlesData = JSON.parse(localStorage.getItem(localStorageKey));

function createArticle(article) {
  const result = `
    <li class="item" id="${article.id}">
        <h2>${article.title}</h2>
        <p>${article.content}</p>
        <button class="delete">Удалить статью</button>
        <button class="change">Редактировать статью</button>
    </li>`;

  return result;
}
listArticles.innerHTML = articlesData.map(createArticle).join("");

listArticles.addEventListener("click", ({ target }) => {
  const liItem = target.closest("li");
  if (target.closest(".delete")) {
    liItem.remove();

    const articleIndex = articlesData.findIndex(
      (art) => art.id === +liItem.getAttribute("id")
    );
    articlesData.splice(articleIndex, 1);
    localStorage.setItem(localStorageKey, JSON.stringify(articlesData));
  } else if (target.closest(".change")) {
    const title = prompt("Введите название статьи");
    const text = prompt("Введите содержание статьи");

    if (!text || !title) {
      alert("Вы не заполнили данные");
      return;
    }

    const article = articlesData.find(
      (art) => art.id === +liItem.getAttribute("id")
    );
    article.title = title;
    article.content = text;

    localStorage.setItem(localStorageKey, JSON.stringify(articlesData));

    liItem.querySelector("h2").textContent = title;
    liItem.querySelector("p").textContent = text;
  }
});

const addButton = document.querySelector(".add");
addButton.addEventListener("click", () => {
  const title = prompt("Введите название статьи");
  const text = prompt("Введите содержание статьи");

  if (text && title) {
    const newArticle = {
      id: Date.now(),
      title,
      text,
    };
    articlesData.push(newArticle);
    localStorage.setItem(localStorageKey, JSON.stringify(articlesData));
    listArticles.insertAdjacentHTML("beforeend", createArticle(newArticle));
  } else {
    alert("Вы не заполнили данные");
  }
});

// console.log("hello");
