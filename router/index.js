import Vue from 'vue'
import Router from 'vue-router';

Vue.use(Router);
const components= {
  login: () => import('@/views/login/login'),
  layout:()=>  import('@/views/layout/layout'),
  index: ()=>  import('@/views/index/index'),
  users:()=>   import('@/views/users/index')

}
export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/login'
    },

    {
      path:'/login',
      component: components.login
    },

    {
      path:'/layout',
      name:'layout',
      component:components.layout,
      redirect:'/layout/index',

      children:[
        {
          path:'index',
          name:'index',
          component:components.index,

        },
        {
          path:'users',
          name:'users',
          component:components.users,
          meta:{
            title:'用户'
          }
        }

      ]
    }
  ]
})