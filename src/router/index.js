import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Paging from '../views/Paging.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // importの書き方は、遅延ローディングというもの。
    // このパスにアクセスした時だけ読み込まれる設定になる
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/count',
    // nameは名前付きルートのためのオプションなのでなくても良い
    // @は、src配下からの相対パスを表すエイリアス
    component: () => import(/* webpackChunkName: "count" */ '@/views/Count.vue')
  },
  {
    path: '/paging/:page',
    // nameは名前付きルートのためのオプションなのでなくても良い
    // @は、src配下からの相対パスを表すエイリアス
    component: Paging
  }
]

const router = new VueRouter({
  mode: 'history',
  // mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
