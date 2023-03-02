import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:"/login",
    name:"LoginView",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/register",
    name:"RegisterView",
    component: () => import("../views/RegisterView.vue")
  },
  {
    path: "/products",
    name: "products",
    component: ()=> import("../views/ProductsView.vue")
  },
  {
    path: "/products/:id",
    name:"productView",
    component:()=> import("../views/ProductView.vue"),
    props: true,
  },
  {
    path:"/admin",
    name:"AdminView",
    component:()=> import("../views/AdminView.vue")
  },
  {
    path:"/contact",
    name:"ContactView",
    component: ()=> import("../views/ContactView.vue")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
