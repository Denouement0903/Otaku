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
    path: "/figures",
    name: "figures",
    component: ()=> import("../views/figuresView.vue")
  },
  {
    path: "/figures/:id",
    name:"figureView",
    component:()=> import("../views/figureView.vue"),
    props: true,
  },
  {
    path:"/admin",
    name:"AdminView",
    component:()=> import("../views/AdminView.vue")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
