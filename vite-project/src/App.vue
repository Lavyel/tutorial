<template>
  <body>
  <div class="wrapper">
    <router-link :to="{ name: 'Home' }">Strona domowa</router-link>&nbsp;
    <router-link :to="{ name: 'Products' }">Produkty</router-link>&nbsp;
    <router-link :to="{ name: 'Basket' }">Koszyk</router-link>
    <br/>
    <router-view></router-view>
  </div>
  </body>
</template>

<script setup>
  //import ProductsList from './components/ProductsList.vue'
  //import MyBasket from './components/MyBasket.vue'
</script>


<style>
body {
    font-family: Tahoma, Verdana, sans-serif;
}
th, td {
  border: 1px solid black;
  text-align:center;
  border-spacing: 30px;
  padding: 15px;
}
</style>