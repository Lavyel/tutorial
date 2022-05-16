import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/products',
      name: 'Products',
      component: () => import('./views/Products.vue')
    },
    {
        path: '/basket',
        name: 'Basket',
        component: () => import('./views/Basket.vue')
      },
      {
        path: '/product/:id',
        name: 'Product',
        component: () => import('./views/Product.vue')
      },
  ]
})