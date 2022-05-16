<template>
  <div>
      <h1>Lista produktów</h1>
      <table>
          <tr>
            <th>Nazwa produktu</th>
            <th>Cena produktu</th>
            <th>Dodaj do koszyka</th>
            <th>Usuń z koszyka</th>
          </tr>
          <tr v-for="p in products" :key="p.id">
              <td>{{ p.name }}</td>
              <td>{{ p.price }}</td>
              <td><button @click="p.quantity = addProduct(p.quantity, p.price)">Dodaj</button></td>
              <td><button :disabled="deactivate" @click="p.quantity = removeProduct(p.quantity, p.price)">Usuń</button></td>
          </tr>
      </table>
  </div>
</template>

<script setup>
    import products from '../data.js'
    import state from '../state.js'
    import { computed, ref } from 'vue'

    const filteredProducts = computed(() => products.value.filter(p => p.quantity > 0))
    const deactivate = ref(false)

    function addProduct (quantity, price) {
      quantity = quantity + 1
      state.combinedValue = state.combinedValue + price
      return quantity
    }

    function removeProduct (quantity, price) {
      quantity = quantity - 1
      if (quantity < 0) { blocked = true }
      state.combinedValue = state.combinedValue - price
      return quantity
    }
</script>
