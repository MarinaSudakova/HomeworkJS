// Работа с BOM
// 1. Определение текущего размера окна браузера:
// ○ Напишите функцию, которая будет выводить текущую
// ширину и высоту окна браузера при его изменении.
// 2. Подтверждение закрытия страницы:
// ○ Создайте всплывающее окно или диалоговое окно,
// которое появляется при попытке закрыть вкладку
// браузера и спрашивает пользователя, уверен ли он в
// своем решении закрыть страницу.
// 3. Управление историей переходов:
// ○ Используйте объект history для управления историей
// переходов на веб-странице. Создайте кнопки назад и вперед для движения по истории

const heightWindow = document.querySelector(".height>span");
const widthWindow = document.querySelector(".width>span");
const backButton = document.querySelector(".back");
const forwardButton = document.querySelector(".forward");

heightWindow.textContent = window.innerHeight;
widthWindow.textContent = window.innerWidth;

window.addEventListener("resize", () => {
  heightWindow.textContent = window.innerHeight;
  widthWindow.textContent = window.innerWidth;
});

window.addEventListener("beforeunload", (event) => {
  event.preventDefault();
  alert("Вы пытаетесь покинуть страницу");
});

backButton.addEventListener("click", () => {
  window.history.back();
});

forwardButton.addEventListener("click", () => {
  window.history.forward();
});
