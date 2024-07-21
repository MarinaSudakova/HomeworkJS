<template>
    <section class="featured center">
      <div class="featured__items">
        <product-details v-for="product in products" :key="product.id" :product="product" />
      </div>
    </section>
  </template>
  
  <script>
  import ProductDetails from './ProductDetails.vue'
  
  export default {
    name: 'ProductList',
    components: {
      ProductDetails
    },
    data() {
      return {
        products: [
          {
            id: 1,
            linkBuy: '#',
            image: '/img/product1.png',
            title: 'beatiful interior',
            price: '52.00',
            available: false
          },
          {
            id: 2,
            linkBuy: '#',
            image: '/img/product2.png',
            title: 'beatiful interior',
            price: '62.00',
            available: true
          },
          {
            id: 3,
            linkBuy: '#',
            image: '/img/product3.png',
            title: 'beatiful interior',
            price: '72.00',
            available: false
          },
          {
            id: 4,
            linkBuy: '#',
            image: '/img/product4.png',
            title: 'beatiful interior',
            price: '42.00',
            available: true
          },
          {
            id: 5,
            linkBuy: '#',
            image: '/img/product5.png',
            title: 'beatiful interior',
            price: '32.00',
            available: false
          },
          {
            id: 6,
            linkBuy: '#',
            image: '/img/product6.png',
            title: 'beatiful interior',
            price: '92.00',
            available: true
          },
          {
            id: 7,
            linkBuy: '#',
            image: '/img/product7.png',
            title: 'beatiful interior',
            price: '57.00',
            available: false
          },
          {
            id: 8,
            linkBuy: '#',
            image: '/img/product8.png',
            title: 'beatiful interior',
            price: '46.00',
            available: true
          }
        ]
      }
    }
  }
  </script>
  
  <style scoped lang="css">
  .featured {
    margin-top: 100px;
  }
  .featured__items {
    margin-top: 60px;
    display: grid;
    grid-template-columns: repeat(4, 261px);
    gap: 32px;
  }
  </style>