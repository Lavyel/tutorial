<template>
  <div>
      <h1>Koszyk</h1>
      <table>
          <tr>
            <th>Nazwa produktu</th>
            <th>Cena</th>
            <th>Ilość sztuk</th>
            <th>Łączna cena</th>
          </tr>
          <tr v-for="p in filteredProducts" :key="p.id">
              <td>{{ p.name }}</td>
              <td>{{ p.price }}</td>
              <td>{{ p.quantity }}</td>
              <td>{{ p.quantity*p.price }}</td>
          </tr>
      </table>
      <p>Wartość koszyka: {{ state.combinedValue }}</p>
  </div>
</template>

<script setup>
    import products from '../data.js'
    import state from '../state.js'
    import { computed, ref } from 'vue'

    const filteredProducts = computed(() => products.value.filter(p => p.quantity > 0))
</script>