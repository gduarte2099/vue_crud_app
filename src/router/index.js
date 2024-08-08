import { createRouter, createWebHistory } from 'vue-router'

import CreateView from '../views/CreateView.vue'
import ListView from '../views/ListView.vue'
import EditView from '../views/EditView.vue'

const routes = [
  {
    path: '/',
    name: 'list',
    component: ListView
  },
  {
    path: '/create',
    name: 'create',
    component: CreateView
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: EditView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
