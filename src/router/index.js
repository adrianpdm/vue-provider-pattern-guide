import Vue from 'vue'
import VueRouter from 'vue-router'
import InRouteApproach from '../views/InRouteApproach'
import InComponentApproach from '../views/InComponentApproach'
import WithVuexApproach from '../views/WithVuexApproach'
import ProviderPattern from '../views/ProviderPattern'
import LocalStorageProviderPattern from '../views/LocalStorageProviderPattern'
import RenderlessProviderPattern from '../views/RenderlessProviderPattern'
import AxiosPostProvider from '../views/AxiosPostProvider'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: InRouteApproach
  },
  {
    path: '/in-component',
    component: InComponentApproach,
  },
  {
    path: '/vuex-approach',
    component: WithVuexApproach
  },
  {
    path: '/provider-pattern',
    component: ProviderPattern
  },
  {
    path: '/local-storage-provider-pattern',
    component: LocalStorageProviderPattern
  },
  {
    path: '/renderless-provider-pattern',
    component: RenderlessProviderPattern
  },
  {
    path: '/axios-post-provider-pattern',
    component: AxiosPostProvider
  },
]

const router = new VueRouter({
  routes,
  linkExactActiveClass: 'link-exact-active',
  linkActiveClass: 'link-active',
});

export default router
