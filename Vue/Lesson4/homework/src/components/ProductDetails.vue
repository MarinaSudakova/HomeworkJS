<template>
    <div :data-id="product.id" class="featured__item">
      <a class="featured__cart" :href="product.linkBuy">
        <div class="featured__add">
          <p>Add to Cart</p>
        </div>
      </a>
      <div class="featured__content">
        <img :src="product.image" alt="product" />
        <h3 class="featured__title">{{ product.title }}</h3>
        <p class="featured__price">{{ formattedPrice }}</p>
        <p v-if="product.available">Available</p>
        <p v-else>Out of stock</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductDetails',
    props: {
      product: {
        type: Object,
        required: true
      }
    },
    computed: {
      formattedPrice() {
        return `$${Number(this.product.price).toFixed(2)}`
      }
    }
  }
  </script>
  
  <style scoped lang="css">
  .featured__item {
    display: block;
    position: relative;
    border: 1px solid black;
    transition: border 0.4s, background-color 0.4s;
  }
  .featured__item:hover {
    border: 1px solid #f16d7f;
  }
  .featured__item:hover .featured__cart {
    opacity: 1;
  }
  .featured__cart {
    position: absolute;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    text-align: center;
    top: 30%;
    left: 25%;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    transition: opacity 0.2s;
  }
  .featured__add {
    display: flex;
    fill: white;
    gap: 11px;
    border: 2px solid white;
    justify-content: center;
    align-items: center;
    padding: 11px 13px 9px 13px;
    color: white;
    font-size: 13px;
    line-height: normal;
    font-weight: 700;
    transition: background-color 0.4s;
  }
  .featured__add:hover {
    background-color: #f16d7f;
  }
  .featured__content {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-bottom: 10px;
  }
  .featured__content::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.4s;
  }
  .featured__content:hover::before {
    opacity: 1;
  }
  .featured__title {
    color: black;
    font-size: 13px;
    line-height: normal;
    font-weight: 400;
    padding-left: 18px;
  }
  .featured__price {
    color: #f16d7f;
    font-size: 16px;
    line-height: normal;
    font-weight: 700;
    padding-left: 18px;
    padding-right: 18px;
  }
  </style>