import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import EditOrganization from '@/views/EditOrganization'
import OrgUsluga from '@/views/OrgUsluga'
import Organization from '@/views/Organization'

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
        path:'/museums',
        component: ()=> import('@/views/Museums')
      },
      {
        path:'/theatres',
        component: ()=> import('@/views/Theatre')
      },
      {
        path:'/cinemas',
        component: ()=> import('@/views/Cinemas')
      },
      {
        path:'/sports',
        component: ()=> import('@/views/Sports')
      },
      {
        path:'/transport',
        component: ()=> import('@/views/Transport')
      },
      {
        path:'/ecotrips',
        component: ()=> import('@/views/Ecotrips')
      },
      {
        path:'/cafes',
        component: ()=> import('@/views/Cafes')
      },
      {
        path:'/intplace',
        component: ()=> import('@/views/Intplace')
      },
      {
        path:'/reports',
        component: ()=> import('@/views/Reports')
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
      {
        path:'/commerce/organizations',
        component: ()=> import('@/views/CommerceOrganizations')
      },
      {
        path:'/commerce/transactions',
        component: ()=> import('@/views/CommerceTransactions')
      },
      {
        path:'/edit/:orgId',
        name: 'Edit',
        component: EditOrganization,
        props:true
      },
      {
        path:'/usluga/:uId',
        name: 'Usluga',
        component: OrgUsluga,
        props:true
      },
      {
        path:'/organization/:oId',
        name: 'Organization',
        component: Organization,
        props:true
      }
    ]
  })
  