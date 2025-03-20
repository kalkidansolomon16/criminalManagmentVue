<template>

  <div class="">
    <div >
      <div class=" bg-gradient-to-r from-[#44abc4] via-[#1e88ab] via-[#0d7992] via-[#146584] to-[#0d5364]   h-46 ">


   </div>
   <div class="justify-center flex bg-[#fbfbfb] rounded-xl -mt-4 lg:-mt-16 w-88  lg:w-11/12 lg:mx-auto lg: ml-6 lg:pl-16">
           <div>
               <img src="/criminallogo.png" alt="" class="w-24 h-24 -mt-10 lg:w-10/10 lg:h-52 lg:-mt-20">
           </div>
           <div>
               <h1 class="mt-2 font-bold text-xl lg:text-2xl lg:mt-1 text-[#0d5364]">ኮምቦልቻ ማረሚያ ቤት</h1>
             
           </div>
           
       </div>
       <h1 class="text-[#0d5364] text-center pt-4  font-bold text-xl lg:text-3xl mb-4 -mt-6">ወደ አካዉንትዎ ይግቡ </h1>
       <div class="lg:w-1/3 lg:mx-auto border-2 border-[#0d5364] lg:p-10 ml-4 mr-4 p-2 rounded-lg ">
           <div class="mt-10">
               <p class="text-[#0d5364]">ልዩ ስም ያስገቡ </p>
               <input type="text" name="" id="" class="bg-gray-100 rounded-sm mt-2 w-12/13 h-10 pl-3 border border-gray-200 placeholder-[#7badba]  focus:outline-none lg:w-100" placeholder="ልዩ ስምስም" v-model="user_name">
           </div>
          
           <div class="mt-10">

               <p class="text-[#0d5364]">የይለፍ ቃሎን ያስገቡ </p>
               <input type="password" name="" id="" class="bg-gray-100 rounded-sm mt-2 w-12/13 h-10 pl-3 border placeholder-[#7badba] border-gray-200 focus:outline-none lg:w-100" placeholder="የይለፍ ቃል" v-model="password">

           </div>
           <div>
               <button class="bg-[#0d5364] text-white px-7 cursor-pointer hover:scale-105 rounded-sm py-2 ml-1 mt-6"  @click="handleLogin">ይቀጥሉ</button>
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
        user_name:'',
        password:''
    }
},
mounted(){
    const token = localStorage.getItem('token');
if(token){
      axios.defaults.withCredentials = true
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

},
methods:{
 async handleLogin(){
        try{
            const response = await axios.post('http://127.0.0.1:8000/api/login',{
                user_name:this.user_name,
                password:this.password
            })
            const token  = response.data.token;
            const user_id = response.data.user_id
            const role = response.data.role
            localStorage.setItem('token',token)
            localStorage.setItem('user_id',user_id)
            localStorage.setItem('role',role)
            console.log('role')
           
            
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
            this.getUser();
            this.$router.push('/DoctorDashboard')
            if(role === 'police'){
                this.$router.push('/police')
            }
            else{

                this.$router.push('/')
            }
 
        }catch(err){
            console.log(err)
        }
       
    },
    async getUser() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/user')
        this.currentUser = response.data
      } catch (err) {
        console.log('Error fetching user', err)
      }
    },
}
}
</script>

<style>

</style>