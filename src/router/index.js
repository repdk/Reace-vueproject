import Vue from 'vue'
import Router from 'vue-router'
import Frontpage from './Pages/Frontpage.vue'
import Collection from './Pages/Collection.vue'
import Contactpage from './Pages/Contactpage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Frontpage',
      component: Frontpage
    },
    {
      path: '/collection',
      name: 'Collection',
      component: Collection
    },
    {
      path: '/contactpage',
      name: 'Contactpage',
      component: Contactpage
    }
  ]
})
