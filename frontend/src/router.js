import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
    mode:'history',
    routes:[
      {
        path:'/',
        component: Home
      },
      {
        path:'/cataloge',
        component: ()=> import('@/views/Cataloge')
      },
      {
        path:'/profile',
        component: ()=> import('@/views/Profile')
      },
      {
        path:'/students',
        component: ()=> import('@/views/Students')
      },
      {
        path:'/students/pass',
        component: ()=> import('@/views/StudentsPass')
      },
      {
        path:'/students/cafe',
        component: ()=> import('@/views/StudentsCafes')
      },
      {
        path:'/students/transport',
        component: ()=> import('@/views/StudentsTransports')
      },
      {
        path:'/students/studentcataloge',
        component: ()=> import('@/views/StudentCataloge')
      },
      {
        path:'/commerce',
        component: ()=> import('@/views/Commerce')
      },

    ]
  })
  