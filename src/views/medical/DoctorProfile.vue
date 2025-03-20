<template>
    <div  class=" font-serif h-screen bg-gradient-to-r from-[#44abc4] via-[#1e88ab] via-[#0d7992] via-[#146584] to-[#0d5364] px-10 pb-20">
      <img v-if="doctors && doctors.photo" :src="fullImageUrl" alt="photo" class=" h-64 w-64 mx-auto rounded-full">
      <div class="bg-white lg:w-1/3 h-64 -mt-10 mb-20  pt-10 pb-28 mx-auto w-11/12 ">
          <p class="text-center mt-4 text-lg">እንኳን ደህና መጡ<span class="text-[#44abc4] ml-2"> {{ doctors.full_name }}</span></p>
          <p class="text-center mt-2">ልዩ ስም <span class="text-[#44abc4] ml-6">{{ doctors.user_name }}</span></p>
          <p class="text-center mt-2">አድራሻ <span class="text-[#44abc4]  ml-6">{{ doctors.address }}</span></p>
          <p class="text-center mt-2">ስልክ ቁጥር <span class="text-[#44abc4]  ml-6">{{ doctors.phone_number }}</span></p>
          <!-- <p class="text-center mt-2">የስራ ድርሻ {{ doctors.role.name }}</p> -->
      </div>
      <router-link style="margin-left: 600px;" to="/DoctorDashboard" class="ml-96  mx-auto py-3 px-16 text-white  rounded-md bg-[#44abc4]">የታካሚ መረጃ ይመልከቱ</router-link>
      <router-link to="/"></router-link>
    </div>
  </template>
  
  <script>
  import axios from "axios"
  export default {
      data(){
          return{
              doctors:[]
          }
      },
      mounted(){
          this.fetchDoctorInfo()
      },
      computed: {
      fullImageUrl() {
        return this.doctors ? `http://127.0.0.1:8000/${this.doctors.photo}` : ''; 
      }
    },
   methods:{
      async fetchDoctorInfo() {
              try {
                  const response = await axios.get('http://127.0.0.1:8000/api/user', {
                      headers: {
                          Authorization: `Bearer ${localStorage.getItem('token')}` 
                      }
                  });
                  this.doctors = response.data.data; 
                  console.log('Doctor info', this.doctors);
              } catch (error) {
                  console.error('Error fetching information', error);
              }
          },
   }
              
          
      }
  
  </script>
  
  <style>
  
  </style>