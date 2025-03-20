<template>
 <div class="font-serif m-1 border-2 border-gray-200 rounded-md px-2 pb-10 relative h-280 lg:px-4 lg:mx-2">

    <div class="">
        <div class="bg-gradient-to-r from-[#44abc4] via-[#1e88ab] via-[#0d7992] via-[#146584] to-[#0d5364] w-full h-46 ">

</div>
<div class="absolute top-28 left-7 bg-white rounded-md w-5/6 px-1 shadow-sm pb-10 lg:top-32 lg:left-40 lg:px-20 lg:w-3/4">

    <div class="justify-center flex">
        <div>
            <img src="/criminallogo.png" alt="" class="w-24 h-24 -mt-10 lg:w-10/10 lg:h-52 lg:-mt-20">
        </div>
        <div>
            <h1 class="mt-2 font-bold text-xl lg:text-2xl lg:mt-1 text-[#0d5364]">ኮምቦልቻ ማረሚያ ቤት</h1>
            <p class="text-sm mt-10 -ml-16 lg:mt-16 lg:text-lg text-[#0d5364]">አገልግሎቶቻቺንን ለማግኘት ይመዝገቡ</p>
        </div>
    </div>
    <div class="lg:flex lg:w-full lg:justify-between">
        <div class="mt-10">
            <p class="text-[#0d5364]">ሙሉ ስም</p>
            <input type="text" name="" id="" class="bg-gray-100 rounded-sm mt-2 w-12/13 h-10 pl-3 border border-gray-200 focus:outline-[#1e88ab] lg:w-100" placeholder="ሙሉ ስም" v-model="model.users.full_name">
        </div>
        <!-- <div class="mt-5 lg:mt-10">
            <p>ጾታ</p>
            <input type="text" name="" id="" class="bg-gray-100 rounded-sm mt-2 w-12/13 h-10 pl-3 border border-gray-200 focus:outline-[#1e88ab] lg:w-100" placeholder="ጾታ" v-model="model.users.sex">
        </div> -->
        <div class="mt-5 lg:mt-10">
          <label class="text-[#0d5364]">ጾታ:</label><br />
          <select
            name="sex"
            v-model="model.users.sex_id"
             class="bg-gray-100 rounded-sm mt-2 w-12/13 h-10 pl-3 border border-gray-200 focus:outline-[#1e88ab] lg:w-100" placeholder="ጾታ"
          >
            <option v-for="sex in sexes" :key="sex.id" :value="sex.id">{{ sex.gender }}</option>
          </select>
        </div>
    </div>
    <div class="lg:flex lg:w-full lg:justify-between">

        <div class="mt-10">
            <p class="text-[#0d5364]">እድሜ</p>
            <input type="text" name="" id="" class="bg-gray-100 rounded-sm mt-2 w-12/13 h-10 pl-3 border border-gray-200 focus:outline-[#1e88ab] lg:w-100" placeholder="እድሜ" v-model="model.users.age">
        </div>
        <div class="mt-10">
            <p class="text-[#0d5364]">ልዩ ስም</p>
            <input type="text" name="" id="" class="bg-gray-100 rounded-sm mt-2 w-12/13 h-10 pl-3 border border-gray-200 focus:outline-[#1e88ab] lg:w-100" placeholder="ልዩ ስም" v-model="model.users.user_name">
        </div>
    </div>
  <div class="lg:flex lg:w-full lg:justify-between">

      <div class="mt-10">
          <p class="text-[#0d5364]">የይለፍ ቃል</p>
          <input type="password" name="" id="" class="bg-gray-100 rounded-sm mt-2 w-12/13 h-10 pl-3 border border-gray-200 focus:outline-[#1e88ab] lg:w-100" placeholder="የይለፍ ቃል" v-model="model.users.password">
      </div>
      <div class="mt-10">
          <p class="text-[#0d5364]">አድራሻ</p>
          <input type="text" name="" id="" class="bg-gray-100 rounded-sm mt-2 w-12/13 h-10 pl-3 border border-gray-200 focus:outline-[#1e88ab] lg:w-100" placeholder="አድራሻ" v-model="model.users.address">
      </div>
  </div>
  <div class="lg:flex lg:w-full lg:justify-between">

      <div class="mt-10">
          <p class="text-[#0d5364]">ስልክ ቁጥር </p>
          <input type="text" name="" id="" class="bg-gray-100 rounded-sm mt-2 w-12/13 h-10 pl-3 border border-gray-200 focus:outline-[#1e88ab] lg:w-100" placeholder="phone number" v-model="model.users.phone_number">
      </div>
      
      <!-- <div class="mt-5">
          <p>ድርሻ </p>
          <input type="text" name="" id="" class="bg-gray-100 rounded-sm mt-2 w-12/13 h-10 pl-3 border border-gray-200 focus:outline-[#1e88ab] lg:w-100" placeholder="role">
      </div> -->
      <div class="mt-10">
          <label class="text-[#0d5364]">ድርሻ:</label><br />
          <select
            name="role"
            v-model="model.users.role_id"
             class="bg-gray-100 rounded-sm mt-2 w-12/13 h-10 pl-3 border border-gray-200 focus:outline-[#1e88ab] lg:w-100" placeholder="ድርሻ"
          >
            <option v-for="role in roles" :key="role.id" :value="role.id">{{ role.name }}</option>
          </select>
        </div>
       
  </div>
  <div class="mt-10">
          <p class="text-[#0d5364]">ፎቶ</p>
          <input type="file"  @change="handlephoto" name="" id="" class="bg-gray-100 rounded-sm mt-2 w-12/13 h-10 pl-3 border border-gray-200 focus:outline-[#1e88ab] lg:w-100" placeholder="phone number" >
      </div>
      
        <div>
            <button class="bg-[#0d5364] text-white px-7 rounded-sm py-2 ml-1 mt-6" @click="registerUser">ይመዝገቡ</button>
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
        roles:[],
        sexes:[],
        model:{
            users:{
                full_name:'',
                sex_id:null,
                age:'',
                password:'',
                user_name:'',
                address:'',
                phone_number:'',
                role_id:null,
                photo:''
            }
        }
    }
},
mounted(){
this.getRole();
this.getSex();
},
methods:{
    getRole() {
    axios.get('http://127.0.0.1:8000/api/role')
        .then((res) => {
            // Assuming the response data structure is { Roles: [...] }
            this.roles = res.data.Roles.map(role => role);
            
            console.log('users', this.roles);
        })
        .catch((error) => {
            console.error('Error fetching roles:', error);
        });
},
    getSex(){
        axios.get('http://127.0.0.1:8000/api/sex').then((res)=>{
            this.sexes = res.data.data
            console.log('users',this.sexes)
        })
    },
    handlephoto(event) {
      const file = event.target.files[0]
      if (file) {
        this.model.users.photo = event.target.files[0]
        console.log('photo',this.model.users.photo)
      }
    },
    registerUser(){
        const formData = new FormData();
        formData.append('full_name',this.model.users.full_name) 
        formData.append('sex_id',this.model.users.sex_id) 
        formData.append('age',this.model.users.age) 
        formData.append('password',this.model.users.password) 
        formData.append('user_name',this.model.users.user_name) 
        formData.append('address',this.model.users.address) 
        formData.append('phone_number',this.model.users.phone_number) 
        formData.append('role_id',this.model.users.role_id) 
        formData.append('photo', this.model.users.photo)
        axios.post('http://127.0.0.1:8000/api/user',formData,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        }).then((res)=>{
            console.log('user',res)
            this.$router.push('/login')
        })
    }
}
}
</script>

<style>

</style>