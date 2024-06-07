// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

// Реализуйте геттер allBooks, который возвращает текущий список книг.

// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.

class Library {
  #books = [];

  constructor(list) {
    if (!this.checkUnique(list)) throw new Error("Найдены повторяющиеся книги");
    this.#books = list;
  }

  get allBooks() {
    return this.#books;
  }

  set addLibrary(list) {
    if (!this.checkUnique(list)) throw new Error("Найдены повторяющиеся книги");
    this.#books = list;
  }

  addBook(title) {
    if (this.#books.includes(title))
      new Error("Такая книга уже существует в библиотеке");
    this.#books.push(title);
    return this.#books;
  }

  removeBook(title) {
    if (!this.#books.includes(title))
      throw new Error("Такой книги нет в библиотеке");
    const indexOfTitle = this.#books.indexOf(title);
    this.#books.splice(indexOfTitle, 1);
    return this.#books;
  }

  hasBook(title) {
    const flag = this.#books.includes(title) ? true : false;
    return flag;
  }

  checkUnique(listOFBooks) {
    for (let i = 0; i < listOFBooks.length - 1; i++) {
      for (let j = i + 1; j < listOFBooks.length; j++) {
        if (listOFBooks[i] === listOFBooks[j]) return false;
      }
    }
    return true;
  }
}

const newLibrary = new Library([]);
console.log(newLibrary.allBooks);

const bookList = ["Hungry", "Voice", "Wind"];
newLibrary.addLibrary = bookList;
console.log(newLibrary.allBooks);

// const bookListError = ["Hungry", "Voice", "Wind", "Wind"];
// newLibrary.addLibrary = bookListError;
// console.log(newLibrary.allBooks);

newLibrary.addBook("City");
console.log(newLibrary.allBooks);

// newLibrary.addBook("Wind");
// console.log(newLibrary.allBooks);

newLibrary.removeBook("Wind");
console.log(newLibrary.allBooks);

// newLibrary.removeBook("Wind");
// console.log(newLibrary.allBooks);

console.log(newLibrary.hasBook("City"));
console.log(newLibrary.hasBook("Wind"));
