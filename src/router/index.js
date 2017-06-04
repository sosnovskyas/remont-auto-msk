import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

// route-level code splitting
const createListView = id => () => import('../views/CreateListView').then(m => m.default(id));
const ItemView = () => import('../views/ItemView.vue');
const UserView = () => import('../views/UserView.vue');
const Main = () => import('../components/Main.vue');


export function createRouter() {
  return new Router({
    mode: 'history',
    scrollBehavior: () => ({y: 0}),
    routes: [
      {path: '/main/', },
      {path: '/top/:page(\\d+)?', component: createListView('top')},
      {path: '/item/:id(\\d+)', component: ItemView},
      {path: '/user/:id', component: UserView},
      // {path: '/', redirect: '/main'}
      {path: '/', component: Main}
    ]
  })
}
