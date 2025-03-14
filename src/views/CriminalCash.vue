<template>
    <div class="m-1 border-2 border-gray-200 rounded-md relative h-180 lg:px-4 lg:mx-2">
           <div class="bg-[#e4a404] w-full h-46 ">
   <h1 class="text-black text-center pt-14 font-bold text-xl lg:text-3xl">ኮምቦልቻ ማረሚያ ቤት</h1>
   </div>
   <div class="absolute top-28 left-7 bg-white rounded-md w-5/6 px-1 shadow-sm pb-10 lg:top-32 lg:left-40 lg:px-20 lg:w-3/4">
   
    <div class="justify-center flex">
           <div>
               <img src="/criminallogo.jpg" alt="" class="h-24 mt-10 lg:w-10/10 lg:h-52">
           </div>
           
       </div>
       <div>
               <h1 class="mt-2 font-bold text-xl lg:text-2xl lg:mt-1">ገንዘዎን ይመዝግቡ</h1>
           </div>
           
       <div class="lg:flex lg:w-full lg:justify-between">
       
           <div class="mt-7">
               <p>የገባበት ቀን</p>
               <input type="text" name="" id="" class="bg-gray-100 rounded-sm mt-2 w-12/13 h-10 pl-3 border border-gray-200 focus:outline-none lg:w-100" placeholder="የገባበት ቀን" v-model="model.criminalCash.deposite_date">
           </div>
           <div class="mt-5">
          <p>የወጣበት ቀን</p>
          <input type="text" name="" id="" class="bg-gray-100 rounded-sm mt-2 w-12/13 h-10 pl-3 border border-gray-200 focus:outline-none lg:w-100" placeholder="የወጣበት ቀን" v-model="model.criminalCash.withdrawal_date">
      </div>
       </div>
       <div>
      <div class="mt-5">
          <p>ብዛት </p>
          <input type="text" name="" id="" class="bg-gray-100 rounded-sm mt-2 w-12/13 h-10 pl-3 border border-gray-200 focus:outline-none lg:w-100" placeholder="ብዛት" v-model="model.criminalCash.amount">
      </div>
    </div>
  <div>
        <div>
            <button class="bg-[#e4a404] text-white px-7 rounded-sm py-3 mt-6 mr-" @click="registerUser">Register</button>
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
                criminal_id:1,
                deposite_date:'',
                withdrawal_date:'',
                amount:'',
                user_id:1
            }
        }
    }
},
methods:{
    registerCriminalCash(){
        const formData = new FormData();
        formData.append('criminal_id',this.model.criminalCash.criminal_id) 
        formData.append('deposite_date',this.model.criminalCash.tydeposite_datepe) 
        formData.append('withdraw_date',this.model.criminalCash.withdraw_date) 
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