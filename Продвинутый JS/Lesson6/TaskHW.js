// Цель: Разработать веб-приложение, которое каждый день будет отображать новое случайное изображение из коллекции Unsplash, давая пользователю возможность узнать больше о фотографе и сделать "лайк" изображению.

// Разработка веб-приложения:

// • Создайте HTML-страницу с элементами: изображение, имя фотографа, кнопка "лайк" и счетчик лайков.
// • Используя JavaScript и ваш API-ключ, получите случайное изображение из Unsplash каждый раз, когда пользователь загружает страницу.
// • Отобразите информацию о фотографе под изображением.
// • Реализуйте функционал "лайка". Каждый раз, когда пользователь нажимает кнопку "лайк", счетчик должен увеличиваться на единицу.

// * Дополнительные задачи (по желанию):

// • Добавьте функцию сохранения количества лайков в локальное хранилище, чтобы при новой загрузке страницы счетчик не сбрасывался.
// • Реализуйте возможность просмотра предыдущих "фото дня" с сохранением их в истории просмотров.

const accessKey = "";
const containerDiv = document.querySelector(".container");
const historyDiv = document.querySelector(".history");
const lsKeyHistory = "likes";
const mainURL = `https://api.unsplash.com/photos/random?count=1&client_id=${accessKey}`;

const fetchPhotos = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Some problem");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

function addPhotoHTML(data) {
  containerDiv.insertAdjacentHTML(
    "afterbegin",
    `
        <div class="picture">
            <img class="new-picture" data-id="${data[0].id}" src="${data[0].urls.full}" alt="${data[0].alt_description}">
        </div>
        <h3 class="author">Автор: ${data[0].user.name}</h3>
        <div class="button-container">
            <button class="like">Нравится</button>
            <p class="like-counter">Лайки: ${data[0].likes}</p>
        </div>`
  );
}

async function run() {
  try {
    const data = await fetchPhotos(mainURL);
    saveHistoryLS(data);
    addPhotoHTML(data);
    fillHistoryPicture();
  } catch (error) {
    const errorMessage = document.createElement("div");
    errorMessage.textContent = error.errorMessage;
    containerDiv.append(errorMessage);
  }
}

window.onload = run();

function saveHistoryLS(data) {
  const newPictureToHistory = {
    link: `${data[0].urls.small}`,
    alt: `${data[0].alt_description}`,
    likes: `${data[0].likes}`,
  };
  localStorage.setItem(data[0].id, JSON.stringify(newPictureToHistory));
}

function fillHistoryPicture() {
  for (const key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      const obj = JSON.parse(localStorage.getItem(key));
      historyDiv.insertAdjacentHTML(
        "beforeend",
        `<a href="${obj.link}">
        <img class="history-picture" data-id="${obj.id}" src="${obj.link}" alt="${obj.alt}">
        </a>`
      );
    }
  }
}

containerDiv.addEventListener("click", ({ target }) => {
  if (target.closest(".like")) {
    const newKey = document.querySelector(".new-picture").dataset.id;
    const obj = JSON.parse(localStorage.getItem(newKey));
    obj.likes = +obj.likes + 1;
    localStorage.setItem(newKey, JSON.stringify(obj));
    const likesInfo = document.querySelector(".like-counter");
    likesInfo.textContent = `Лайки: ${obj.likes}`;
  }
});
