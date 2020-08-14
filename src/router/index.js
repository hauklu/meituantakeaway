import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '@/views/list/List.vue'
import HomeFootNav from '@/views/FootNav.vue'
import Menu from '@/views/menu/Menu.vue'
import MenuConfirmmenu from '@/views/menu/components/Confirmmenu.vue'
import City from '@/views/city/City.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeFootNav',
    component: HomeFootNav
  },
  {
    path: '/list',
    name: 'List',
    component: List
  },
  {
    path: '/menu/:id',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/confirmmenu',
    name: 'MenuConfirmmenu',
    component: MenuConfirmmenu
  },
  {
    path: '/city',
    name: 'City',
    component: City
  }
]

const router = new VueRouter({
  routes,
  // 每次通过router进行页面跳转时, 初始化页面scroll的位置
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
