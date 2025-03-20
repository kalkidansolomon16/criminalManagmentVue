<template>
    <div class="m-1 border-2 border-gray-200 rounded-md relative h-180 lg:px-4 lg:mx-2">
           <div class="bg-gradient-to-r from-[#44abc4] via-[#1e88ab] via-[#0d7992] via-[#146584] to-[#0d5364] w-full h-46 ">
 
   </div>
   <div class="absolute top-28 left-7 bg-white rounded-md w-5/6 px-1 shadow-sm pb-10 lg:top-32 lg:left-40 lg:px-20 lg:w-3/4">
   
    <div class="justify-center flex">
           <div>
               <img src="/criminallogo.png" alt="" class="h-24 -mt-16 lg:w-10/10 lg:h-52">
           </div>
           <div>
            <h1 class="text-[#0d5364] text-center pt-14 font-bold text-xl lg:text-3xl">ኮምቦልቻ ማረሚያ ቤት</h1>
           </div>
           
       </div>
       <div>
               <h1 class="mt-2 font-bold text-xl lg:text-2xl lg:mt-1 text-center text-[#0d5364]">የታራሚዉን ንብረት ይመዝግቡ </h1>
           </div>
           
           <div class="lg:flex lg:w-full lg:justify-between mt-8">
     
               <div>
                 <label for="" class="text-[#0d5364]">የታራሚው ስም </label>
                 <select name="" id="" v-model="model.criminalCash.criminal_id" class="bg-gray-100 rounded-sm mt-2 w-12/13 h-10 pl-3 border border-gray-200 focus:outline-[#1e88ab] lg:w-100">
                     <option value="" disabled>የታራሚዉ ስም </option>
                     <option v-for="criminal in criminals" :key="criminal.id" :value="criminal.id">{{ criminal.first_name }}</option>
                 </select>
               </div>
          <div class="">
              <p class="text-[#0d5364]">የብር መጠን </p>
              <input type="text" name="" id="" class="bg-gray-100 rounded-sm mt-2 w-12/13 h-10 pl-3 border border-gray-200 focus:outline-[#1e88ab] lg:w-100" placeholder="ብዛት" v-model="model.criminalCash.amount">
          </div>
        
        </div>
       <div class="lg:flex lg:w-full lg:justify-between">
       
           <div class="mt-7">
               <p class="text-[#0d5364]">የገባበት ቀን</p>
               <input type="date" name="" id="" class="bg-gray-100 rounded-sm mt-2 w-12/13 h-10 pl-3 border border-gray-200 focus:outline-[#1e88ab] lg:w-100" placeholder="የገባበት ቀን" v-model="model.criminalCash.deposit_date">
           </div>
           <div class="mt-7">
          <p class="text-[#0d5364]">የወጣበት ቀን</p>
          <input type="date" name="" id="" class="bg-gray-100 rounded-sm mt-2 w-12/13 h-10 pl-3 border border-gray-200 focus:outline-[#1e88ab] lg:w-100" placeholder="የወጣበት ቀን" v-model="model.criminalCash.withdrawal_date">
      </div>
       </div>
  <div>
        <div>
            <button class="bg-[#0d5364] text-white px-10 rounded-sm py-3 mt-6 mr-" @click="registerCriminalCash">Register</button>
        </div>
    </div>
</div>
</div>
</template>

<script>
import axios from 'axios';

export default {
data(){
    return{
        model:{
            criminalCash:{
                criminal_id:null,
                deposit_date:'',
                withdrawal_date:'',
                amount:'',
                user_id:null
            }
        },
        criminals:[]
    }
},
mounted(){
const token = localStorage.getItem('token');
if(token){
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    this.fetchCriminals();
    this.model.criminalCash.user_id = localStorage.getItem('user_id');
}
else{
    this.$router.push({name:'Login'});
}
},
methods:{
    fetchCriminals(){
axios.get('http://127.0.0.1:8000/api/criminal').then((res)=>{
    this.criminals = res.data.Criminal
    console.log('criminal',this.criminals);
})
    },
    registerCriminalCash(){
        this.model.criminalCash.user_id = localStorage.getItem('user_id');
        const formData = new FormData();
        formData.append('criminal_id',this.model.criminalCash.criminal_id) 
        formData.append('deposit_date',this.model.criminalCash.deposit_date) 
        formData.append('withdrawal_date',this.model.criminalCash.withdrawal_date) 
        formData.append('amount',this.model.criminalCash.amount) 
        formData.append('user_id',this.model.criminalCash.user_id) 
        axios.post('http://127.0.0.1:8000/api/criminalCash',formData,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        }).then((res)=>{
            console.log('criminalCash',res)
        })
    }
}
}
</script>

<style>

</style>