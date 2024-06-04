// • Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

// • Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:

// {
// title: "Название альбома",
// artist: "Исполнитель",
// year: "Год выпуска"
// }

// • Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
// • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)

const musicCollection = [
  { title: "Hip-Hop", artist: "Jay-Z", year: 1990 },
  { title: "Opera", artist: "Lucano Paworotty", year: 1985 },
  { title: "Rap", artist: "Eminem", year: 2005 },
];

musicCollection[Symbol.iterator] = function () {
  return {
    current: 0,
    to: this.length,
    next() {
      return this.current < this.to
        ? { done: false, value: musicCollection[this.current++] }
        : { done: true };
    },
  };
};

for (let albom of musicCollection) {
  console.log(
    `Название: ${albom.title} - исполнитель: ${albom.artist} (${albom.year})`
  );
}
