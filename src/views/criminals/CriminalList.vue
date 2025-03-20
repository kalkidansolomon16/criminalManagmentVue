<template>
    <div class="">
<table class=" text-white ">
    <th class="w-1/2 border-2 p-2">
        <td class="border-2 p-2">criminal_unique_number</td>
        <td class="border-2 p-2">prison_unique_number</td>
        <td class="border-2 p-2">criminalSell_unique_number</td>
        <td class="border-2 p-2">first_name</td>
        <td class="border-2 p-2">middle_name</td>
        <td class="border-2 p-2">last_name</td>
        <td class="border-2 p-2">date_of_birth</td>
        <td class="border-2 p-2">mother_name</td>
        <td class="border-2 p-2">sex_id </td>
        <td class="border-2 p-2">birth_region</td>
        <td class="border-2 p-2">birth_town</td>
        <td class="border-2 p-2">birth_city</td>
        <td class="border-2 p-2">birth_district</td>
        <td class="border-2 p-2">current_region</td>
        <td class="border-2 p-2">current_town_id</td>
        <td class="border-2 p-2">current_city_id </td>
        <td class="border-2 p-2">current_district</td>
        <td class="border-2 p-2">educational_level</td>
        <td class="border-2 p-2">job</td>
        <td class="border-2 p-2">ethnic_group</td>
        <td class="border-2 p-2">religion</td>
        <td class="border-2 p-2">Closest_respondent</td>
        <td class="border-2 p-2">Closest_respondent_region</td>
        <td class="border-2 p-2">Closest_respondent_town</td>
        <td class="border-2 p-2">Closest_respondent_city</td>
        <td class="border-2 p-2">Closest_respondent_district</td>
        <td class="border-2 p-2">phone_number</td>
        <td class="border-2 p-2">mobile_number</td>
        <td class="border-2 p-2">polic_name</td>
        <td class="border-2 p-2">registral_signature</td>
        <td class="border-2 p-2">crime_type</td>
        <td class="border-2 p-2">crime_description</td>
        <td class="border-2 p-2">criminal_type</td>
        <td class="border-2 p-2">arrest_court</td>
        <td class="border-2 p-2">date_enterd</td>
        <td class="border-2 p-2">time_enterd</td>
        <td class="border-2 p-2">verdict_date</td>
        <td class="border-2 p-2">appointment_date</td>
        <td class="border-2 p-2">prisoner</td>
        <td class="border-2 p-2">updated_verdict</td>
        <td class="border-2 p-2">verdict_court</td>
        <td class="border-2 p-2">updated_verdict_court</td>
        <td class="border-2 p-2">start_dateof_arrest</td>
        <td class="border-2 p-2">end_dateof_arrest</td>
        <td class="border-2 p-2">date_of_release</td>
        <td class="border-2 p-2">release_reason</td>
        <td class="border-2 p-2">dateof_mercy_release</td>
        <td class="border-2 p-2">photo</td>
        <td class="border-2 p-2">writ</td>
        
    </th>
    <tr v-for="criminal in criminals" :key="criminal.id">
        <td class="border-2 p-2">{{ criminal.criminal_unique_number }}</td>
        <td class="border-2 p-2">{{ criminal.prison_unique_number }}</td>
        <td class="border-2 p-2">{{ criminal.criminalSell_unique_number }}</td>
        <td class="border-2 p-2">{{ criminal.first_name }}</td>
        <td class="border-2 p-2">{{ criminal.middle_name }}</td>
        <td class="border-2 p-2">{{ criminal.last_name }}</td>
        <td class="border-2 p-2">{{ criminal.date_of_birth }}</td>
        <td class="border-2 p-2">{{ criminal.mother_name }}</td>
        <td class="border-2 p-2">{{ criminal.sex.gender }}</td>
        <td class="border-2 p-2">{{ criminal.region.name }}</td>
        <td class="border-2 p-2">{{ criminal.birth_town_id }}</td>
        <td class="border-2 p-2">{{ criminal.birth_city_id }}</td>
        <td class="border-2 p-2">{{ criminal.birth_district }}</td>
        <td class="border-2 p-2">{{ criminal.region.name }}</td>
        <td class="border-2 p-2">{{ criminal.current_town_id }}</td>
        <td class="border-2 p-2">{{ criminal.current_city_id }}</td>
        <td class="border-2 p-2">{{ criminal.current_district }}</td>
        <td class="border-2 p-2">{{ criminal.educational_level.name }}</td>
        <td class="border-2 p-2">{{ criminal.job }}</td>
        <td class="border-2 p-2">{{ criminal.ethnic_group.name }}</td>
        <td class="border-2 p-2">{{ criminal.religion.name }}</td>
        <td class="border-2 p-2">{{ criminal.Closest_respondent }}</td>
        <td class="border-2 p-2">{{ criminal.region.name }}</td>
        <td class="border-2 p-2">{{ criminal.Closest_respondent_town_id }}</td>
        <td class="border-2 p-2">{{ criminal.Closest_respondent_city_id }}</td>
        <td class="border-2 p-2">{{ criminal.Closest_respondent_district }}</td>
        <td class="border-2 p-2">{{ criminal.phone_number }}</td>
        <td class="border-2 p-2">{{ criminal.mobile_number }}</td>
        <td class="border-2 p-2">{{ criminal.user.full_name }}</td>
        <td class="border-2 p-2">{{ criminal.registral_signature }}</td>
        <td class="border-2 p-2">{{ criminal.crime.name}}</td>
        <td class="border-2 p-2">{{ criminal.crime_description }}</td>
        <td class="border-2 p-2">{{ criminal.criminal_type.name }}</td>
        <td class="border-2 p-2">{{ criminal.arrest_court_id }}</td>
        <td class="border-2 p-2">{{ criminal.date_enterd }}</td>
        <td class="border-2 p-2">{{ criminal.time_enterd }}</td>
        <td class="border-2 p-2">{{ criminal.verdict_date }}</td>
        <td class="border-2 p-2">{{ criminal.appointment_date }}</td>
        <td class="border-2 p-2">{{ criminal.prisoner }}</td>
        <td class="border-2 p-2">{{ criminal.updated_verdict }}</td>
        <td class="border-2 p-2">{{ criminal.verdict_court_id }}</td>
        <td class="border-2 p-2">{{ criminal.updated_verdict_court_id }}</td>
        <td class="border-2 p-2">{{ criminal.start_dateof_arrest }}</td>
        <td class="border-2 p-2">{{ criminal.end_dateof_arrest }}</td>
        <td class="border-2 p-2">{{ criminal.date_of_release }}</td>
        <td class="border-2 p-2">{{ criminal.release_reason }}</td>
        <td class="border-2 p-2">{{ criminal.dateof_mercy_release }}</td>
        <td class="border-2 p-2">{{ criminal.photo }}</td>
        <td class="border-2 p-2">{{ criminal.writ }}</td>
       
       
    </tr>
    
</table>
       
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
axios.get('http://127.0.0.1:8000/api/criminal').then((res)=>{
this.criminals = res.data.Criminal
console.log('criminals',this.criminals)
})
}
}
}
</script>

<style>

</style>