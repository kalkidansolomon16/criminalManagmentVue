import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import CriminalRegistration from '../views/CriminalRegistration.vue'
import CriminalRegiSecond from '../views/CriminalRegiSecond.vue'



import CriminalProperty from '@/views/criminalProperty.vue'
import CriminalCash from '@/views/CriminalCash.vue'

import UserRegistration from '../views/users/UserRegistration.vue'
import Login from '../views/users/Login.vue'
import MedicalHistory from '../views/medical/MedicalHistory.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {

      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/criminalreg',
      name: 'CriminalRegistration',
      component: CriminalRegistration,
    },
    {
      path: '/CriminalRegiSecond',
      name: 'CriminalRegiSecond',
      component: CriminalRegiSecond,
    },
    
    
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),


      path: '/criminalProperty',
      name: 'registerCriminalProperty',
      component: CriminalProperty,
    },
    {
      path: '/criminalCash',
      name: 'registerCriminalCash',
      component: CriminalCash,

      path: '/user',
      name: 'UserRegistration',
      component: UserRegistration,
    },
    {
      path: '/medical',
      name: 'MedicalHistory',
      component: MedicalHistory,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,


    },
    
    
  ],
})

export default router