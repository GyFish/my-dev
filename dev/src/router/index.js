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
    meta: { title: '接口', icon: 'example' },
    alwaysShow: true,
    hidden: true,
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
    path: 'ops',
    component: Layout,
    alwaysShow: true,
    hidden: true,
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

  // wiki
  {
    path: '/wiki',
    component: Layout,
    alwaysShow: false,
    name: 'wiki',
    meta: { title: 'wiki', icon: 'message' },
    children: [
      {
        path: 'shelf',
        name: 'Wiki-Shelf',
        component: () => import('@/views/wiki-shelf/index'),
        meta: { title: 'Wiki', icon: 'message' }
      },
    ]
  },
  {
    path: '/wiki',
    component: Layout,
    alwaysShow: false,
    hidden: true,
    name: 'wiki',
    meta: { title: 'wiki', icon: 'message' },
    children: [
      {
        path: 'book',
        name: 'Wiki-Book',
        component: () => import('@/views/wiki-book/index'),
        meta: { title: 'editor', icon: 'star' }
      },
    ]
  },

  // auth
  {
    path: '/auth',
    component: Layout,
    alwaysShow: false,
    name: 'Auth',
    meta: { title: 'Auth', icon: 'lock' },
    redirect: '/auth/main',
    children: [
      {
        path: 'main',
        name: 'Auth',
        component: () => import('@/views/auth/index'),
        meta: { title: 'Auth', icon: 'lock' }
      }
    ]
  },

  // FlowStack
  {
    path: '/flow',
    component: Layout,
    alwaysShow: false,
    name: 'FlowStack',
    meta: { title: 'FlowStack', icon: 'drag' },
    redirect: '/flow/main',
    children: [
      {
        path: 'main',
        name: 'FlowStack',
        component: () => import('@/views/flow/index'),
        meta: { title: 'FlowStack', icon: 'drag' }
      }
    ]
  },

  // git
  {
    path: '/links',
    component: Layout,
    alwaysShow: false,
    name: 'Links',
    meta: { title: 'Links', icon: 'bug' },
    redirect: '/gitlab/main',
    children: [
      {
        path: 'main',
        name: 'Links',
        component: () => import('@/views/links/index'),
        meta: { title: 'Links', icon: 'international' }
      }
    ]
  },

  // util
  {
    path: '/util',
    component: Layout,
    alwaysShow: false,
    name: 'Util',
    meta: { title: 'Util', icon: 'lock' },
    redirect: '/util/index',
    children: [
      {
        path: 'index',
        name: 'Util',
        component: () => import('@/views/util/index'),
        meta: { title: 'Util', icon: 'zip' }
      }
    ]
  },

  // iframe
  {
    path: '/iframe',
    component: Layout,
    alwaysShow: false,
    name: 'iFrameDemo',
    meta: { title: 'iFrameDemo', icon: 'lock' },
    redirect: '/iframe/demo',
    children: [
      {
        path: 'demo',
        name: 'iFrameDemo',
        component: () => import('@/views/iframe/index'),
        meta: { title: 'iFrameDemo', icon: 'money' }
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

