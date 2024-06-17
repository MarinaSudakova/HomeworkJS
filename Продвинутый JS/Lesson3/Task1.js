// Создайте интерактивную веб-страницу для оставления и просмотра отзывов о продуктах. Пользователи могут добавлять отзывы о различных продуктах и просматривать добавленные отзывы.

// Страница добавления отзыва:

// Поле для ввода названия продукта.
// Текстовое поле для самого отзыва.
// Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.

// Страница просмотра отзывов:

// Показывает список всех продуктов, о которых были оставлены отзывы.
// При клике на название продукта отображается список всех отзывов по этому продукту.
// Возможность удаления отзыва (при нажатии на кнопку "Удалить" рядом с отзывом, данный отзыв удаляется из LocalStorage).

const nameProduct = document.querySelector(".input-name");
const reviewProduct = document.querySelector(".input-review");
const saveBtn = document.querySelector(".save-btn");
const loadBtn = document.querySelector(".load-btn");
const clearBtn = document.querySelector(".clear-btn");
const text = document.querySelector(".saved-text");

saveBtn.addEventListener("click", () => {
  if (localStorage.hasOwnProperty(nameProduct.value)) {
    const arrayReviews = JSON.parse(localStorage.getItem(nameProduct.value));
    arrayReviews.push(reviewProduct.value);
    localStorage.setItem(nameProduct.value, JSON.stringify(arrayReviews));
  } else {
    const arrayReviews = [reviewProduct.value];
    localStorage.setItem(nameProduct.value, JSON.stringify(arrayReviews));
  }
  alert("Ваш отзыв сохранен");
});

clearBtn.addEventListener("click", () => {
  localStorage.clear();
  alert("Все отзывы удалены");
});
