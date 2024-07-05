// 1. Создать кнопку "Перевернуть". При клике на кнопку текст кнопки, должен перевернуться и отобразиться в обратном порядке.

const VueApp = {
  data() {
    return {
      name: "Перевернуть",
      right: true,
      listValues: ["red", "blue", "white"],
    };
  },
  methods: {
    nameButton() {
      if (this.right) {
        this.name = "ьтунревереП";
        this.right = false;
      } else {
        this.name = "Перевернуть";
        this.right = false;
      }
    },
    addValue() {
      this.listValues.push("Новый цвет");
    },
    deleteValue() {
      this.listValues.pop();
    },
  },
};

Vue.createApp(VueApp).mount("#app");

// 2. Есть список элементов. Пользователь может добавлять новые элементы списка с текстом “Новый элемент списка” нажав на кнопку "Добавить".
