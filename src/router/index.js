import { createRouter, createWebHistory } from 'vue-router'


import CriminalProperty from '@/views/criminalProperty.vue'
import CriminalCash from '@/views/CriminalCash.vue'

import UserRegistration from '../views/users/UserRegistration.vue'
import Login from '../views/users/Login.vue'
import MedicalHistory from '../views/medical/MedicalHistory.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {

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