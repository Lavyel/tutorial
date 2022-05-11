<template>
  <body> 
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
              <td><button v-bind:disable="deactivate" @click="p.quantity = removeProduct(p.quantity, p.price)">Usuń</button></td>
          </tr>
        </table>
    </div>


    <div>
        <h1>Koszyk</h1>
        <table>
            <tr>
              <th>Nazwa produktu</th>
              <th>Cena za szt.</th>
              <th>Ilość</th>
              <th>Łączna cena</th>
            </tr>
            <tr v-for="p in filteredProducts" :key="p.id">
                <td>{{ p.name }}</td>
                <td>{{ p.price }}</td>
                <td>{{ p.quantity }}</td>
                <td>{{ p.quantity*p.price }}</td>
            </tr>
        </table>
        <p><b>Łączna wartość produktów w koszyku to {{ combinedValue }} zł.</b></p>
    </div>
  </body>
</template>

<script setup>
    import { computed, ref } from 'vue'
    import products from './data.js'

    const filteredProducts = computed(() => products.value.filter(p => p.quantity > 0))
    const combinedValue = ref(0)
    const deactivate = ref(false)
    
    function addProduct (quantity, price) {
      quantity++
      combinedValue.value = combinedValue.value + price
      return quantity
    }

    function removeProduct (quantity, price) {
      if (quantity == 0) {
        deactivate = true
      }
      quantity--
      combinedValue.value = combinedValue.value - price
      return quantity
    }
</script>

<style scoped>
th, td {
  border: 1px solid black;
  text-align:center;
  border-spacing: 30px;
  padding: 15px;
}
</style>