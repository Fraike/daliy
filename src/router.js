import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/today/Today.vue'

Vue.use(Router)

const routes = [
  {
    path: '*',
    redirect: '/home'
  },
  {
    name: 'home',
    component: Home,
    meta:{
      title: 'TODAY'
    }
  },
  {
    name: 'habit',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './views/habit/Habit.vue'),
    meta:{
      title: '日常习惯'
    }
  },
  {
    name: 'more',
    component: () => import('./views/more/More.vue'),
    meta:{
      title: '更多'
    }
  }
];

routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});

const router = new Router({routes})

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export {router} 
