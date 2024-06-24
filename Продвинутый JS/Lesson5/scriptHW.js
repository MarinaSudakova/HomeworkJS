// Вашей задачей является создание веб-слайдера для отображения изображений на веб-странице. Слайдер должен позволять переключаться между изображениями и отображать их в центре экрана.

// 1. Создайте интерфейс веб-страницы, который включает в себя следующие элементы:

// a. Контейнер для отображения текущего изображения.
// b. Кнопки "Предыдущее изображение" и "Следующее изображение" для переключения между изображениями.
// c. Навигационные точки (индикаторы) для быстрого переключения между изображениями.

// 2. Используйте HTML для создания элементов интерфейса.

// 3. Используйте JavaScript для обработки событий:

// a. При клике на кнопку "Предыдущее изображение" должно отображаться предыдущее изображение.
// b. При клике на кнопку "Следующее изображение" должно отображаться следующее изображение.
// c. При клике на навигационные точки, слайдер должен переключаться к соответствующему изображению.

// 4. Слайдер должен циклически переключаться между изображениями, то есть после последнего изображения должно отображаться первое, и наоборот.

// 5. Добавьте стилизацию для слайдера и элементов интерфейса с использованием CSS для улучшения внешнего вида.

const arrayPictures = [
  "IMG_1092.JPG",
  "photo_2021-06-08_16-03-00.jpg",
  "photo_2021-07-20_12-09-34.jpg",
];

const previousBtn = document.querySelector(".previous");
const nextBtn = document.querySelector(".next");

const pictureDiv = document.querySelector(".box-picture");

const navigationDiv = document.querySelector(".box-navigation");
// const previousBtn = document.querySelector('.previous');

let index = 1;

nextBtn.addEventListener("click", () => {
  if (!arrayPictures[index + 1]) {
    return;
  }
  pictureDiv.style.backgroundImage = `url(${arrayPictures[index + 1]})`;
  index += 1;
});

previousBtn.addEventListener("click", () => {
  if (!arrayPictures[index - 1]) {
    return;
  }

  pictureDiv.style.backgroundImage = `url(${arrayPictures[index - 1]})`;
  index -= 1;
});

navigationDiv.addEventListener("click", ({ target }) => {
  const indexOfPicture = +target.closest("svg").classList[1];
  pictureDiv.style.backgroundImage = `url(${arrayPictures[indexOfPicture]})`;
});
