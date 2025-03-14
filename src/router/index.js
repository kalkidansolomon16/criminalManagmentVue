import { createRouter, createWebHistory } from 'vue-router'

//import UserRegistration from '../views/users/UserRegistration.vue'
//import MedicalHistory from '../views/medical/MedicalHistory.vue'
import CriminalProperty from '@/views/criminalProperty.vue'
import CriminalCash from '@/views/CriminalCash.vue'

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
    },
    
    
  ],
})

export default router