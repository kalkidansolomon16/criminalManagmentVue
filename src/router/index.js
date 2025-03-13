import { createRouter, createWebHistory } from 'vue-router'

import UserRegistration from '../views/users/UserRegistration.vue'
import MedicalHistory from '../views/medical/MedicalHistory.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/user',
      name: 'UserRegistration',
      component: UserRegistration,
    },
    {
      path: '/medical',
      name: 'MedicalHistory',
      component: MedicalHistory,
    },
    
    
  ],
})

export default router
