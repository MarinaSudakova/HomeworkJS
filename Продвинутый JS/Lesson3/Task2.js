const productsList = document.querySelector(".products");

function createListProduct() {
  for (const key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      productsList.insertAdjacentHTML(
        "beforeend",
        `<li class="new-product"><button class="item">${key}</button><button class="delete ${key}">Удалить</button></li>`
      );
    }
  }
}

window.onload = createListProduct();

const buttons = document.querySelectorAll(".item");
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    for (const key in localStorage) {
      if (key === btn.textContent) {
        btn.insertAdjacentHTML("afterend", `<div>${localStorage[key]}</div>`);
      }
    }
  });
});

const buttonsDelete = document.querySelectorAll(".delete");
buttonsDelete.forEach((btn) => {
  btn.addEventListener("click", () => {
    for (const key in localStorage) {
      if (key === btn.classList[1]) {
        localStorage.removeItem(key);
        btn.parentElement.remove();
      }
    }
  });
});
