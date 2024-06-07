// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.

// обработка JSON с помощью ассинхронного запроса,  работает по принципу "обещание"
const url = "./reviews.json";

// начинаем работать с ассинхроном
async function fetchData(url) {
  try {
    // ожидаем ответ от сервера или можем получить 404
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`ошибка ${error}`);
  }
}

const data = await fetchData(url);
console.log(data);

// const userRewies = JSON.parse(data);

const button = document.querySelector("button");
const answer = document.querySelector(".content");
const inp = document.querySelector("input");

function fillAnswersHtml(answersArr) {
  answersArr.forEach((element) => {
    answer.insertAdjacentHTML(
      "afterbegin",
      `<p>${element.reviews[0].text}</p>`
    );
  });
}
fillAnswersHtml(data);

button.addEventListener("click", function (e) {
  try {
    const inpElement = inp.value;
    if (inpElement.length < 50 || inpElement.length > 500) {
      throw new Error("Ваш отзыв меньше 50 или больше 500 символов");
    }
    answer.insertAdjacentHTML("beforeend", `<p>${inp.value}</p>`);
  } catch (error) {
    answer.textContent = error.message;
  }
});
