<template>
    <div class="font-serif m-1 border-2 border-gray-200 rounded-md relative h-155 lg:px-4 lg:mx-2">
   
        <div class="bg-[#e4a404] w-full h-46 ">
   <h1 class="text-black text-center pt-4  font-bold text-xl lg:text-3xl">ኮምቦልቻ ማረሚያ ቤት</h1>
   </div>
   <div class="absolute top-28 left-7 bg-white rounded-md w-5/6 px-5 shadow-sm pb-10 lg:top-32 lg:left-40 lg:px-20 lg:w-3/4">
   
       <div class="justify-center flex">
           <div>
               <img src="/criminallogo.png" alt="" class="h-24 lg:-mt-16 -mt-10 lg:w-10/10 lg:h-52 w-10/11 mx-auto">
           </div>
           <div>
               <h1 class="mt-1 font-bold text-xl lg:text-2xl lg:mt-1 ">ንብረትዎን ይመዝግቡ</h1>
           </div>
           
       </div>
       
       <div class=" lg:w-1/2 mt-4 lg:mx-auto">
        <div>
            <label for="">የታራሚዉ ስም </label>
            <select name="" id="" v-model="model.criminalProperties.criminal_id" class="bg-gray-100 rounded-sm mt-2 w-12/13 h-10 pl-3 border border-gray-200 focus:outline-none lg:w-100">
                <option value="" disabled>የታራሚዉ ስም </option>
                <option v-for="criminal in criminals" :key="criminal.id" :value="criminal.id">{{ criminal.first_name }}</option>
            </select>
           </div>
           <div class="mt-10">
            <label for="">የንብረት አይነት</label>
            <select name="" id="" v-model="model.criminalProperties.type_id" class="bg-gray-100 rounded-sm mt-2 w-12/13 h-10 pl-3 border border-gray-200 focus:outline-none lg:w-100">
                <option value="" disabled>የንብረት አይነት ይምረጡ </option>
                <option v-for="type in types" :key="type.id" :value="type.id">{{ type.type }}</option>
            </select>
           </div>
      <div class="mt-10">
          <p>ብዛት</p>
          <input type="text" name="" id="" class="bg-gray-100 rounded-sm mt-2 w-12/13 h-10 pl-3 border border-gray-200 focus:outline-none lg:w-100" placeholder="ብዛት" v-model="model.criminalProperties.amount">
      </div>
       
      <div>
          <button class="bg-[#e4a404] text-white px-7 rounded-sm py-2 ml-1 mt-6" @click="registerCriminalProperty">ይመዝግቡ </button>
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
            criminalProperties:{
                criminal_id:null,
                type_id:null,
                amount:'',
                user_id:null
            }
        },
        types:[],
        criminals:[]
    }
},
mounted(){
    const token = localStorage.getItem('token');
    if(token){
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        this.fetchProperty();
        this.fetchCriminals();
        this.user_id = localStorage.getItem('user_id')
        console.log('user_id',this.user_id)
    }
    else{
        this.$router.push({name:'Login'});
    }
},
methods:{
    fetchProperty(){
axios.get('http://127.0.0.1:8000/api/type').then((res)=>{
    this.types = res.data.types
    console.log('type',this.types)

})
    },
    fetchCriminals(){
axios.get('http://127.0.0.1:8000/api/criminal').then((res)=>{
    this.criminals = res.data.Criminal
    console.log('criminals',this.criminals)

})
    },
    registerCriminalProperty(){
        const formData = new FormData();
        formData.append('criminal_id',this.model.criminalProperties.criminal_id) 
        formData.append('type_id',this.model.criminalProperties.type_id) 
        formData.append('amount',this.model.criminalProperties.amount) 
        this.model.criminalProperties.user_id = localStorage.getItem('user_id')
        formData.append('user_id',this.model.criminalProperties.user_id) 
        axios.post('http://127.0.0.1:8000/api/criminalProperty',formData,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        }).then((res)=>{
            console.log('criminalProperty',res)
        })
    }
}
}
</script>

<style>

</style>