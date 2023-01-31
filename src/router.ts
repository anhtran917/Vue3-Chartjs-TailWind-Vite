import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('./components/DrilldownChart.vue'),
    },
    {
      path: '/Cards',
      component: () => import('./components/Cards.vue'),
    },
    {
      path: '/tableData',
      component: () => import('./components/TableData.vue'),
    },
    {
      path: '/404',
      name: 'NotFound',
      component: () => import('./components/NotFound.vue'),
  },
  {
      path: '/:catchAll(.*)',
      redirect:'404'
  }    
  ],
})
