<template>
  <div class="font-serif m-1 border-2 border-gray-200 rounded-md px-2 pb-10 relative lg:h-280 h-350 lg:px-4 lg:mx-2">
    <div>
      <div class="bg-[#e4a404] w-full h-46 ">
   <h1 class="text-white text-center pt-4  font-bold text-xl lg:text-3xl">ወደአካዉንቶ ይግቡ </h1>
   </div>
   <div class="justify-center flex">
           <div>
               <img src="/criminallogo.png" alt="" class="w-24 h-24 -mt-10 lg:w-10/10 lg:h-52 lg:-mt-20">
           </div>
           <div>
               <h1 class="mt-2 font-bold text-xl lg:text-2xl lg:mt-1">ኮምቦልቻ ማረሚያ ቤት</h1>
             
           </div>
       </div>
       <div class="lg:w-1/3 lg:mx-auto">
           <div class="mt-10">
               <p>ልዩ ስም ያስገቡ </p>
               <input type="text" name="" id="" class="bg-gray-100 rounded-sm mt-2 w-12/13 h-10 pl-3 border border-gray-200 focus:outline-none lg:w-100" placeholder="ልዩ ስምስም" v-model="user_name">
           </div>
          
           <div class="mt-10">
               <p>የይለፍ ቃሎን ያስገቡ </p>
               <input type="text" name="" id="" class="bg-gray-100 rounded-sm mt-2 w-12/13 h-10 pl-3 border border-gray-200 focus:outline-none lg:w-100" placeholder="የይለፍ ቃል" v-model="password">
           </div>
           <div>
               <button class="bg-[#e4a404] text-white px-7 rounded-sm py-2 ml-1 mt-6"  @click="handleLogin">ይቀጥሉ</button>
           </div>
       </div>
    </div>
    <!-- <input type="text" name="" id="" placeholder="Enter user name" v-model="user_name"><br>
    <input type="password" placeholder="Enter password" v-model="password">
    <button @click="handleLogin">Submit</button> -->
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
            localStorage.setItem('token',token)
            localStorage.setItem('user_id',user_id)
           
            
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
            this.getUser();
            this.$router.push('/')
 
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