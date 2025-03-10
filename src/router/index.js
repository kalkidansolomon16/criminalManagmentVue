import { createRouter, createWebHistory } from 'vue-router'

import UserRegistration from '../views/users/UserRegistration.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/user',
      name: 'UserRegistration',
      component: UserRegistration,
    },

    
  ],
})

export default router
