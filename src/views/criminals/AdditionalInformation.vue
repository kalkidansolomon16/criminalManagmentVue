<template>
    <div style="width: 1035px; " class="h-screen font-serif  px-6 pb-40 ml-40">
        <h1 class="ml-80 text-3xl text-gray-200 pt-5 pb-5">የታራሚዎቺ ተጨማሪ መረጃ  </h1>
<table class=" min-w-full mt-4 -ml-6 border-collapse mb-10">
    <thead>
    <tr class="w-1/2 border-2  bg-[#0d5364] rounded-md text-gray-200">
        <td class="border-b p-2 text-left text-sm m">ስም </td>
        <td class="border-b p-2 text-left text-sm m">የአባት ስም </td>
        <td class="border-b p-2 text-left text-sm m">የአያት ስም </td>
        <td class="border-b p-2 text-left text-sm m">ቁመት</td>
        <td class="border-b p-2 text-left text-sm m"> የአይኑ ቀለም</td>
        <td class="border-b p-2 text-left text-sm m">መልክ</td>
        <td class="border-b p-2 text-left text-sm m">ግንባር</td>
        <td class="border-b p-2 text-left text-sm m"> አፍንጫ</td>
        <td class="border-b p-2 text-left text-sm m">የጸጉር አይነት</td>
        <td class="border-b p-2 text-left text-sm m">ጥርስ</td>
        <td class="border-b p-2 text-left text-sm m">ከንፈር</td>
        <td class="border-b p-2 text-left text-sm m">ጆሮ </td>
        <td class="border-b p-2 text-left text-sm m">ልዩ ምልክት</td>
        <td class="border-b p-2 text-left text-sm m">ዜግነት</td>
        
    </tr>
</thead>
    <tr v-for="criminal in criminals" :key="criminal.id" class="bg-white">
        <td class="border-b px-2 ">{{ criminal.criminal.first_name }}</td>
        <td class="border-b px-2 ">{{ criminal.criminal.middle_name }}</td>
        <td class="border-b px-2 ">{{ criminal.criminal.last_name }}</td>
        <td class="border-b p-2 ">{{ criminal.height }}</td>
        <td class="border-b p-2 ">{{ criminal.Eye_color }}</td>
        <td class="border-b p-2 ">{{ criminal.face }}</td>
        <td class="border-b p-2 ">{{ criminal.forehead }}</td>
        <td class="border-b p-2 ">{{ criminal.nose }}</td>
        <td class="border-b p-2 ">{{ criminal.hair_type.name }}</td>
        <td class="border-b p-2 ">{{ criminal.teeth }}</td>
        <td class="border-b p-2 ">{{ criminal.lip }}</td>
        <td class="border-b p-2 ">{{ criminal.ear }}</td>
        <td class="border-b p-2 ">{{ criminal.Unique_appearance }}</td>
        <td class="border-b p-2 ">{{ criminal.citizenship }}</td>

       
       
       
    </tr>
    
</table>
<a href="/criminallist" class="text-blue-700 underline text-xl">ወደ ቀድሞ ገጽ ይመለሱ  </a>
       
    </div>
</template>

<script>
import axios from 'axios';

export default {
data(){
    return{
criminals:[]
    }
},
mounted(){
const token = localStorage.getItem('token')
if(token){
    axios.defaults.headers.common['Authorization'] = `Bearer${token}`
    this.getCriminals()
}
else{
    this.$router.push({name:'Login'})
}
},
methods:{
getCriminals(){
axios.get('http://127.0.0.1:8000/api/criminalInfo').then((res)=>{
this.criminals = res.data.criminalInformation
console.log('criminals',this.criminals)
})
}
}
}
</script>

<style>

</style>