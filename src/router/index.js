import { createRouter, createWebHistory } from 'vue-router'

import ColorTest from '../views/ColorTest.vue'
import CriminalRegistration from '../views/CriminalRegistration.vue'
import CriminalRegiSecond from '../views/CriminalRegiSecond.vue'



import criminalProperty from '@/views/criminalProperty.vue'
import CriminalCash from '@/views/CriminalCash.vue'

import UserRegistration from '../views/users/UserRegistration.vue'
import Login from '../views/users/Login.vue'
import MedicalHistory from '../views/medical/MedicalHistory.vue'

import DoctorDashboard from '../views/medical/DoctorDashboard.vue'
import DoctorProfile from '../views/medical/DoctorProfile.vue'
import PoliceHomePage from '../views/police/PoliceHomePage.vue'
import CriminalList from '../views/criminals/CriminalList.vue'






const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {

      path: '/ColorTest',
      name: 'ColorTest',
      component: ColorTest,
    },
    {
      path: '/criminalreg',
      name: 'CriminalRegistration',
      component: CriminalRegistration,
    },
    {
      path: '/criminalinfo',
      name: 'CriminalRegiSecond',
      component: CriminalRegiSecond,
    },
    
    
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),

    // }
    {
      path: '/criminalProperty',
      name: 'criminalProperty',
      component: criminalProperty,
    },
    {
      path: '/DoctorDashboard',
      name: 'DoctorDashboard',
      component: DoctorDashboard,
    },
    {
      path: '/CriminalCash',
      name: 'CriminalCash',
      component: CriminalCash,
    },
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
    {
      path: '/DoctorProfile',
      name: 'DoctorProfile',
      component: DoctorProfile,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,


    },
    {
      path: '/police',
      name: 'PoliceHomePage',
      component: PoliceHomePage,


    },
    {
      path: '/criminallist',
      name: 'CriminalList',
      component: CriminalList,


    },
    
  ],
})

export default router