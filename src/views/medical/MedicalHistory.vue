<template>
    <div class="m-1 border-2 border-gray-200 rounded-md px-2 pb-10 relative h-280 lg:px-4 lg:mx-2">
   
       <div class="">
           <div class="bg-[#e4a404] w-full h-46 ">
   <h1 class="text-white text-center pt-4  font-bold text-xl lg:text-3xl">Medical History</h1>
   </div>
   <div class="absolute top-28 left-7 bg-white rounded-md w-5/6 px-1 shadow-sm pb-10 lg:top-32 lg:left-40 lg:px-20 lg:w-3/4">
   
       <div class="justify-center flex">
           <div>
               <img src="/criminallogo.png" alt="" class="w-24 h-24 -mt-10 lg:w-10/10 lg:h-52 lg:-mt-20">
           </div>
           <div>
               <h1 class="mt-2 font-bold text-xl lg:text-2xl lg:mt-1">ኮምቦልቻ ማረሚያ ቤት</h1>
               <p class="text-sm mt-10 -ml-16 text-gray-600 lg:mt-16 lg:text-lg">Criminal Health Record</p>
           </div>
       </div>
       <div class="lg:flex lg:w-full lg:justify-between">
           <div class="mt-10">
               <p>Hospital Name</p>
               <input type="text" name="" id="" class="bg-gray-100 rounded-sm mt-2 w-12/13 h-10 pl-3 border border-gray-200 focus:outline-none lg:w-100" placeholder="hospital name" v-model="model.medical.hospital_name">
           </div>
          
           <div class="mt-10">
               <p>Doctor Name</p>
               <input type="text" name="" id="" class="bg-gray-100 rounded-sm mt-2 w-12/13 h-10 pl-3 border border-gray-200 focus:outline-none lg:w-100" placeholder="doctor name" v-model="model.medical.doctor_name">
           </div>
       </div>
       <div class="lg:flex lg:w-full lg:justify-between">
<!--    
           <div class="mt-5">
               <p>Criminal Name</p>
               <input type="text" name="" id="" class="bg-gray-100 rounded-sm mt-2 w-12/13 h-10 pl-3 border border-gray-200 focus:outline-none lg:w-100" placeholder="criminal name" v-model="model.users.age">
           </div> -->
           <div class="mt-10">
          <label class="">Deases Type</label><br />
          <select
            name="role"
            v-model="model.medical.disease_type_id"
             class="bg-gray-100 rounded-sm mt-2 w-12/13 h-10 pl-3 border border-gray-200 focus:outline-none lg:w-100" placeholder="deases"
          >
            <option v-for="disease in diseases" :key="disease.id" :value="disease.id">{{ disease.name }}</option>
          </select>
        </div>
        <!-- <div class="mt-10">
             <p>Hospital Name</p>
             <input type="text" name="" id="" class="bg-gray-100 rounded-sm mt-2 w-12/13 h-10 pl-3 border border-gray-200 focus:outline-none lg:w-100" placeholder="doctor adress" v-model="model.medical.doctor_address">
         </div> -->
       </div>
     <div class="lg:flex lg:w-full lg:justify-between">
   
         <div class="mt-10">
             <p>Date</p>
             <input type="date" name="" id="" class="bg-gray-100 rounded-sm mt-2 w-12/13 h-10 pl-3 border border-gray-200 focus:outline-none lg:w-100" placeholder="date" v-model="model.medical.date">
         </div>
         <div class="mt-10">
             <p>Doctor Address</p>
             <input type="text" name="" id="" class="bg-gray-100 rounded-sm mt-2 w-12/13 h-10 pl-3 border border-gray-200 focus:outline-none lg:w-100" placeholder="doctor adress" v-model="model.medical.doctor_address">
         </div>
     </div>
     <div class="lg:flex lg:w-full lg:justify-between">
   
         <div class="mt-10">
             <p>Medical Expense</p>
             <input type="text" name="" id="" class="bg-gray-100 rounded-sm mt-2 w-12/13 h-10 pl-3 border border-gray-200 focus:outline-none lg:w-100" placeholder="medical expence" v-model="model.medical.medical_expense">
         </div>
         
         <!-- <div class="mt-5">
             <p>ድርሻ </p>
             <input type="text" name="" id="" class="bg-gray-100 rounded-sm mt-2 w-12/13 h-10 pl-3 border border-gray-200 focus:outline-none lg:w-100" placeholder="role">
         </div> -->
         <!-- <div>
             <label class="">ድርሻ:</label><br />
             <select
               name="role"
               v-model="model.users.role_id"
                class="bg-gray-100 rounded-sm mt-2 w-12/13 h-10 pl-3 border border-gray-200 focus:outline-none lg:w-100" placeholder="ድርሻድርሻ"
             >
               <option v-for="role in roles" :key="role.id" :value="role.id">{{ role.name }}</option>
             </select>
           </div> -->
           
         <!-- <div class="mt-5">
             <p>Medical Expense</p>
             <input type="text" name="" id="" class="bg-gray-100 rounded-sm mt-2 w-12/13 h-10 pl-3 border border-gray-200 focus:outline-none lg:w-100" placeholder="phone number" v-model="model.users.phone_number">
         </div> -->
          
         <!-- <div class="mt-5">
                 <p>Guards</p>
                 <input type="file"  @change="handlephoto" name="" id="" class="bg-gray-100 rounded-sm mt-2 w-12/13 h-10 pl-3 border border-gray-200 focus:outline-none lg:w-100" placeholder="guards" >
             </div> -->
             <div class="mt-10">
            <label for="" class="font-serif text-md">Guards</label><br />
            <select
              name=""
              required
              v-model="model.medical.guards"
              multiple
              class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-96 mb-5" 
            >
              <option :value="null" disabled>Select Guards</option>
              <option v-for="guard in guards" :key="guard.id" :value="guard.id">
                <p v-if="guard.role_id ===3">

                    {{ guard.full_name }}
                </p>
              </option>
            </select>
          </div>
     </div>
           <div>
               <button class="bg-[#e4a404] text-white px-7 rounded-sm py-2 ml-1 mt-6" @click="recordMedicalHistory">Submit</button>
           </div>
   </div>
           
       </div>
    </div>
   </template>
   
   <script>
import axios from 'axios';

export default {
    data() {
        return {
            diseases: [],
            guards: [], // Initialize as an array to hold the guards fetched from the API
            model: {
                medical: {
                    user_id: 1,
                    criminal_id: 2,
                    disease_type_id: null,
                    hospital_name: '',
                    doctor_name: '',
                    date: '',
                    doctor_address: '',
                    medical_expense: '',
                    guards: [], // Initialize as an array to hold selected guard IDs
                },
            },
            medicals: [],
        };
    },
    mounted() {
        this.fetchGuards();
        this.fetchDiseases(); // Fixed method name from fetchDiease to fetchDiseases
    },
    methods: {
        fetchGuards() {
            axios.get('http://127.0.0.1:8000/api/user')
                .then((res) => {
                    this.guards = res.data.user; // Ensure this is the correct structure from your API
                    console.log('guards', this.guards);
                })
                .catch((error) => {
                    console.error('Error fetching guards:', error);
                });
        },
        fetchDiseases() {
            axios.get('http://127.0.0.1:8000/api/disease')
                .then((res) => {
                    this.diseases = res.data.deasesType;
                    console.log('disease', this.diseases);
                })
                .catch((error) => {
                    console.error('Error fetching diseases:', error);
                });
        },
        recordMedicalHistory() {
            const formData = new FormData();
            formData.append('user_id', this.model.medical.user_id);
            formData.append('criminal_id', this.model.medical.criminal_id);
            formData.append('disease_type_id', this.model.medical.disease_type_id);
            formData.append('hospital_name', this.model.medical.hospital_name);
            formData.append('doctor_name', this.model.medical.doctor_name);
            formData.append('date', this.model.medical.date);
            formData.append('doctor_address', this.model.medical.doctor_address);
            formData.append('medical_expense', this.model.medical.medical_expense);
            
            // Append each selected guard id to the form data
            this.model.medical.guards.forEach(guard => {
            
                formData.append('guards[]', guard); // Use 'guards[]' to send array data
            });

            axios.post('http://127.0.0.1:8000/api/medical', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then((res) => {
                console.log('response', res);
                // Optionally, show success message or reset the form here
            })
            .catch((error) => {
                console.error('Error submitting medical history:', error);
                // Optionally, show an error message to the user
            });
        }
    }
}
</script>