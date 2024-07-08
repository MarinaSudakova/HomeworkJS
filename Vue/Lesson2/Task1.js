// Вы разрабатываете приложение для отображения и сортировки списка товаров. У вас есть массив объектов products, где каждый объект представляет товар с его названием и ценой. Вам необходимо отобразить список товаров и предоставить пользователю возможность сортировать товары по цене (по возрастанию и по убыванию).

const VueApp = {
  data() {
    return {
      listProducts: [
        {
          name: "Молоко",
          price: 10,
        },
        {
          name: "Хлеб",
          price: 3,
        },
        {
          name: "Мясо",
          price: 8,
        },
      ],
      sortAscending: true,
    };
  },

  methods: {
    sortProducts() {
      this.listProducts.sort((a, b) => {
        if (this.sortAscending) {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });
      this.sortAscending = !this.sortAscending;
    },

    sortProductsUp() {
      this.listProducts.sort((a, b) => {
        return b.price - a.price;
      });
    },

    sortProductsDown() {
      this.listProducts.sort((a, b) => {
        return a.price - b.price;
      });
    },
  },
};
Vue.createApp(VueApp).mount("#app");
