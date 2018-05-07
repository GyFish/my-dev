import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  // home
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    name: 'Home',
    hidden: true,
    children: [{
      path: 'home',
      component: () => import('@/views/home/index')
    }]
  },

  // api
  {
    path: '/api',
    component: Layout,
    redirect: '/api/table',
    name: 'api',
    meta: { title: '接口', icon: 'international' },
    alwaysShow: true,
    children: [
      {
        path: 'table',
        name: 'Api',
        component: () => import('@/views/api-table/index'),
        meta: { title: '外呼系统', icon: 'star' }
      },
      {
        hidden: false,
        path: 'ui',
        name: 'Api-UI',
        component: () => import('@/views/api-ui/index'),
        meta: { title: 'ui', icon: 'star' }
      },
      {
        hidden: false,
        path: 'editor',
        name: 'Api-Editor',
        component: () => import('@/views/api-editor/index'),
        meta: { title: 'editor', icon: 'star' }
      },
    ]
  },

  // wiki
  {
    path: 'wiki',
    component: Layout,
    alwaysShow: true,
    name: 'wiki',
    meta: { title: 'wiki', icon: 'message' },
    children: [
      {
        path: 'table',
        name: 'Api',
        component: () => import('@/views/api-table/index'),
        meta: { title: '外呼系统', icon: 'star' }
      }
    ]
  },

  // ops
  {
    path: 'wiki',
    component: Layout,
    alwaysShow: true,
    name: 'ops',
    meta: { title: '运维', icon: 'dashboard' },
    children: [
      {
        path: 'table',
        name: 'Api',
        component: () => import('@/views/api-table/index'),
        meta: { title: '外呼系统', icon: 'star' }
      }
    ]
  },

  // git
  {
    path: 'wiki',
    component: Layout,
    alwaysShow: true,
    name: 'git',
    meta: { title: 'git', icon: 'bug' },
    children: [
      {
        path: 'table',
        name: 'Api',
        component: () => import('@/views/api-table/index'),
        meta: { title: '外呼系统', icon: 'star' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

