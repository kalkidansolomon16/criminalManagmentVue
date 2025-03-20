<template>
  <div style="width: 1535px; " class="h-screen font-serif bg-gradient-to-r from-[#44abc4] via-[#1e88ab] via-[#0d7992] via-[#146584] to-[#0d5364] px-10 pb-40 w-screen">
    <div class="flex ">
        <!-- <img src="/logo.png" alt="" class="w-34 h-34 rounded-full -ml-10 -mt-4"> -->
        <img v-if="doctors && doctors.photo" :src="fullImageUrl" alt="photo" class=" h-16 w-16 mt-6  rounded-full ">
        <p class="mt-10 ml-2">እንኳን ደህና መጡ, {{ doctors.full_name}}</p>
        <router-link to="/DoctorProfile" class="ml-40 bg-[#44abc4] px-16 pt-2 rounded-lg cursor-pointer text-gray-200 h-10 mt-10">የግል መረጃወትን ይመልከቱ</router-link >
    </div>
    <!-- <td class="border-b p-2 ">{{ medicalHistory.data.user.full_name }} </td> -->
<div >
    
    <table class="min-w-full mt-4 -ml-6 border-collapse">
      <thead>
        <tr class="bg-[#0d5364] rounded-md ">
          <!-- <th class="border-b p-2 text-left text-sm m">የታራሚ ፎቶ</th> -->
          <th class="border-b p-2 text-left text-sm m">የመዝገብ ቁጥር</th>
          <th class="border-b p-2 text-left text-sm m">የታራሚ ስም</th>
          <th class="border-b p-2 text-left text-sm m">የህመሙ አይነት</th>
          <th class="border-b p-2 text-left ">ያከመው የዶክተር ስም</th>
          <th class="border-b p-2 text-left ">ያከመው ዶክተር አድራሻ</th>
          <th class="border-b p-2 text-left ">የመዘገበው ዶክተር</th>
          <th class="border-b p-2 text-left">የልደት ቀን</th>
          <th class="border-b p-2 text-left">ጾታ</th>
          <th class="border-b p-2 text-left">የሆስፒታል ስም</th>
          <th class="border-b p-2 text-left">የታከመበት ቀን</th>
          <th class="border-b p-2 text-left">የህክምና ወጪ</th>
        </tr>
      </thead>
      <tbody class="">
        <tr v-if="criminals.length === 0">
          <td colspan="3" class="text-center p-4"> ይቅርታ! የተመዘገበ ታካሚ አልተገኘም</td>
        </tr>

        
        <tr class="bg-[#58b9d1]" v-for="(medical, index) in medicalHistory" :key="index">
            <!-- <img :src="getPhotoUrl(medical.user.photo)" alt=""> -->
            <td class="border-b p-2 ">{{ medical.criminal.criminal_unique_number }} </td>
          <td class="border-b p-2 ">{{ medical.criminal.first_name }} {{ medical.criminal.middle_name }} {{ medical.criminal.last_name }}</td>
          <td class="border-b p-2 ">{{ medical.disease_type.name }} </td>
          <td class="border-b p-2 ">{{ medical.doctor_name }} </td>
          <td class="border-b p-2 ">{{ medical.doctor_address }} </td>
          <td class="border-b p-2 ">{{ medical.user.full_name }} </td>
          <td class="border-b p-2 ">{{ medical.criminal.date_of_birth }} </td>
          <td class="border-b p-2 ">{{ medical.criminal.sex.gender }} </td>
          <td class="border-b p-2 ">{{ medical.hospital_name }} </td>
          <td class="border-b p-2 ">{{ medical.date }} </td>
          <td class="border-b p-2 ">{{ medical.medical_expense }} </td>

        </tr>
      </tbody>
    </table>
</div>
  </div>
</template>

<script>
import axios from "axios"
export default {
    data(){
        return{
            criminals:[],
            doctors:[],
            medicalHistory:[]
        }
    },
    mounted(){
        this.fetchDoctorInfo()
        this.fetchCriminal()
        this.fetchMedicalHistory()
    },
    computed: {
    fullImageUrl() {
      return this.doctors ? `http://127.0.0.1:8000/${this.doctors.photo}` : ''; 
    },
    getPhotoUrl(photo) {
      
      return this.medicalHistory ? `http://127.0.0.1:8000/${this.medicalHistory.data.user.photo}` : ''
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
    async fetchCriminal() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/medicalInfo', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}` 
                    }
                });
                this.criminals = response.data.criminals; 
                console.log('criminal info', this.criminals);
            } catch (error) {
                console.error('Error fetching information', error);
            }
        },
    async fetchMedicalHistory() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/medical', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}` 
                    }
                });
                this.medicalHistory = response.data.data; 
                console.log('medical history', this.medicalHistory);
            } catch (error) {
                console.error('Error fetching information', error);
            }
        },
 }
            
        
    }

</script>

<style>

</style>