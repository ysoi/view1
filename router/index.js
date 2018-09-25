import Vue from 'vue'
import Router from 'vue-router';

Vue.use(Router);
const components= {
  login: () => import('@/views/login/login'),
  layout:()=>  import('@/views/layout/layout'),
  index: ()=>  import('@/views/index/index'),
  users:()=>   import('@/views/users/index'),
  upload:()=>  import('@/views/upload/upload'),
  userEdit:()=> import('@/views/userEdit/index'),
  addUser:()=>import ('@/views/addUser/index'),
  addSwiper:()=>import ('@/views/addSwiper/index'),
  swiper:()=>import ('@/views/swiper/swiper'),
  addBook:()=>import ('@/views/addBook/index')
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
        },
        {
          path:'upload',
          name:'upload',
          component:components.upload,
          meta:{
            title:'上传'
          }
        },
        {
          path:'userEdit',
          name:'userEdit',
          meta:{
            title:'修改个人信息'
          },
          component:components.userEdit
        },
        {
          path:'addUser',
          name:'addUser',
          meta:{
            title:'添加用户'
          },
          component:components.addUser
        },
        {
          path:'addSwiper',
          name:'addSwiper',
          meta:{
            title:'添加轮播图'
          },
          component:components.addSwiper
        },
        {
          path:'editSwiper',
          name:'editSwiper',
          meta:{
            title:'编辑轮播图'
          },
          component:components.addSwiper
        },
        {
          path:'swiper',
          name:'swiper',
          meta:{
            title:'轮播图列表'
          },
          component:components.swiper
        },
        {
          path:'addBook',
          name:'addBook',
          meta:{
            title:'添加图书'
          },
          component:components.addBook
        }
      ]
    }
  ]
})
