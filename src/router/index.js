import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const view = name => resolve => require(['../components/' + name + '.vue'], resolve);

const routes = new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'TicTacToe',
      component: view('TicTacToe')
    }
  ]
})

export default routes;
