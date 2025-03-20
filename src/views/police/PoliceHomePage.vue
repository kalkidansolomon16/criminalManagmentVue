<template>
<div class=" w-full bg-gradient-to-r pb-10 from-[#44abc4]   via-[#1e88ab] via-[#0d7992] via-[#146584] to-[#0d5364] " >
    <div class="flex lg:w-1/3 lg:mx-auto">
        <div class="w-1/2">
           <img src="/criminallogo.png" alt="">
        </div>
        <div class="text-white mt-15">
            <h1 class="text-xl lg:text-3xl">ኮምቦልቻ ማረሚያ ቤት</h1>
        </div>
        
    </div>
   
<div class="">

<div class="flex nameContainer lg:w-1/2 lg:mx-auto rounded-md lg:h-70">
<div class="mt-10 w-2/3 mx-auto text-2xl text-[#0d5364] ml-3 lg:w-3/4 lg:ml-10 lg:mt-15">
    <p class="lg:text-3xl ">  {{ polices.full_name }}</p>
    <p class=" "> {{ polices.role?.name || 'N/A' }}</p>
     <div class="w-12/11 mx-auto">

        <button @click="redirectTOCriminals" class="bg-[#0d5364] text-white px-10 rounded-sm py-3 lg:mt-6 mt-3 cursor-pointer text-xs lg:text-lg">ወደ እስረኞች መረጃ ይግቡ </button>
    </div>
</div>
<div class="w-1/3 mr-1 mx-auto lg:w-1/2 ">
    <img :src="`http://127.0.0.1:8000/${polices.photo}`" alt="no image" class="h-50 w-11/11 lg:h-70 rounded-md">
</div>
</div>
<h1 class="text-center text-white mb-5 mt-5 text-xl lg:text-4xl">የግል መረጃ ዝርዝር </h1>
<div class="nameContainer rounded-md shadow-2xl flex p-5 mt-10 w-6/7  mx-auto lg:w-2/3 ">
<div class="w-1/2 ml-5">
    <img :src="`http://127.0.0.1:8000/${polices.photo}`" alt="no image" class="  rounded-md -ml-5 mt-17 lg:h-100 lg:mt-2 lg:w-5/6">
</div>
<div class=" pt-3 rounded-sm   text-black lg:text-xl lg:mt-13">
    <p class=" "> <span class="font-bold text-black">ሙሉ ስም</span> ፡ {{ polices.full_name }}</p>
    <p class=" mt-3 "> <span class="font-bold text-black">እድሜ</span> ፡ {{ polices.age }}</p>
    <p class="mt-3"> <span class="font-bold text-black">ጾታ </span> ፡ {{ polices.sex?.gender || 'N/A' }}</p>
    <p class=" mt-3 "><span class="font-bold text-black">ስልክ ቁጥር</span> ፡ {{ polices.phone_number }}</p>
    <p class=" mt-3 "> <span class="font-bold text-black">ልዩ ስም</span> ፡ {{ polices.user_name }}</p>
    <p class=" mt-3 "> <span class="font-bold text-black">አድራሻ </span> ፡ {{ polices.address }}</p>
    <p class=" mt-3 "> <span class="font-bold text-black">ድርሻ </span> ፡ {{ polices.role?.name || 'N/A' }}</p>
</div>
</div>
<div class="lg:w-6/11 lg:mx-auto w-2/3 mx-auto">

<button @click="redirectTOCriminals" class="bg-[#0d5364]  lg:text-lg text-white px-10 rounded-sm py-3 mt-6 cursor-pointer text-sm">ወደ እስረኞች መረጃ ይግቡ </button>
</div>
    <!-- <div class="w-full   z-10">
        <img :src="`http://127.0.0.1:8000/${polices.photo}`" alt="no image" class="h-70 w-full z-0 relative ">
        <div class="absolute top-59 z-10  w-full h-70 nameContainer">
            <div class="ml-10">

                <h1 class="text-white mt-25 ml-5 text-2xl"> {{ polices.full_name }}</h1>
                <h1 class="text-white  ml-5 text-2xl"> {{ polices.role.name }}</h1>
            </div>
        </div>
    </div> -->
    <!-- <div class="flex mt-10   bg-[#44aac465] w-11/11 mr-10">
<div>
    <img :src="`http://127.0.0.1:8000/${polices.photo}`" alt="no image" class="w-4/5  ">
</div>
<div class=" pt-3 rounded-sm     w-18/10 mt-10 -ml-5 text-black">
    <p class=" "> <span class="font-bold text-black">ሙሉ ስም</span> ፡ {{ polices.full_name }}</p>
    <p class=" mt-3 "> <span class="font-bold text-black">እድሜ</span> ፡ {{ polices.age }}</p>
    <p class="mt-3"> <span class="font-bold text-black">ጾታ </span> ፡ {{ polices.sex.gender }}</p>
    <p class=" mt-3 "><span class="font-bold text-black">ስልክ ቁጥር</span> ፡ {{ polices.phone_number }}</p>
    <p class=" mt-3 "> <span class="font-bold text-black">ልዩ ስም</span> ፡ {{ polices.user_name }}</p>
    <p class=" mt-3 "> <span class="font-bold text-black">ድርሻ </span> ፡ {{ polices.role.name }}</p>
</div>
    </div> -->
    <!-- <div class="w-3/4 mx-auto">

        <button class="bg-[#0d5364] text-white px-10 rounded-sm py-3 mt-6 cursor-pointer">ወደ እስረኞቺ መረጃ ይግቡ </button>
    </div> -->
</div>
        
    </div>
    

</template>

<script>
import axios from 'axios';
export default {
data(){
    return{
        polices:[]
    }
},
mounted(){
    const token = localStorage.getItem('token');
        if (token) {
     // axios.defaults.withCredentials = true;
      axios.defaults.headers.common['Authorization'] =` Bearer ${token}`;
      this.getPolice();
    } else {
      this.$router.push({ name: 'Login' });
    }
    
    },


methods:{
    getPolice(){
        axios.get('http://127.0.0.1:8000/api/showPolice').then((res)=>{
            this.polices = res.data.data.police
            console.log('police',this.polices)
        })
    },
    redirectTOCriminals(){
this.$router.push('/criminallist')
    }
}
}
</script>

<style>
.nameContainer{
    background-color:rgba(255, 255, 255, 0.808);
}
</style>