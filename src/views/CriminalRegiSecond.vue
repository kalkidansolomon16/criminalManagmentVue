<template>
    <div class="ml-">
      <div class="bg-gradient-to-r from-[#44abc4] via-[#1e88ab] via-[#0d7992] via-[#146584] to-[#0d5364] h-40 px-10">
        <div>
          <div >
          <img src="/logo.png" alt="" class="w-20 rounded-full mx-auto lg:w-72 lg:-mt-6">
          <p class="text-center  font-bold text-xl lg:-mt-9">የታራሚወች መመዝገቢያ ቅጽ</p>
        </div>
        <div class="bg-[#fbfbfb] rounded-xl mt-2 w-88 lg:w-11/12 lg:mx-auto -ml-7 lg:pl-16">
          <div class="lg:flex">
            <div class="ml-4 pt-4 lg:mr-20 ">
              <p class="mb-1 text-gray-600 font-serif">ቁመት</p>
              <input type="text" v-model="info.height"
                class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4 outline-[#44abc4]">
            </div>
  
            <div class="ml-4 lg:mr-20 lg:pt-4">
              <p class="mb-1 text-gray-600 font-serif"> የአይኑ ቀለም </p>
              <input type="text" v-model="info.Eye_color"
                class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4 outline-[#44abc4]">
            </div>
  
            <div class="ml-4 lg:pt-4">
              <p class="mb-1 text-gray-600 font-serif">መልክ</p>
              <input type="text" v-model="info.face"
                class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4 outline-[#44abc4]">
            </div>
          </div>
  
          <div class="lg:flex">
            <div class="ml-4 lg:mr-20 ">
              <p class="mb-1 text-gray-600 font-serif">ግንባር</p>
              <input type="text" v-model="info.Forehead"
                class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4 outline-[#44abc4]">
            </div>
  
            <div class="ml-4 lg:mr-20 ">
              <p class="mb-1 text-gray-600 font-serif">አፍንጫ</p>
              <input type="text" v-model="info.nose"
                class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4 outline-[#44abc4]">
            </div>
  
            <div class="ml-4">
              <label class="font-serif text-gray-600 text-md">የጸጉር አይነት </label><br>
              <select name="gender" v-model="info.hair_type_id"
                class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4 outline-[#44abc4]">
                <option v-for="hair in hairs" :key="hair.id" :value="hair.id">{{ hair.name }}</option>
              </select>
            </div>
          </div>
          <div class="lg:flex">
            <div class="ml-4 lg:mr-20 ">
              <p class="mb-1 text-gray-600 font-serif">ጥርስ</p>
              <input type="text" v-model="info.teeth"
                class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4 outline-[#44abc4]">
            </div>
  
            <div class="ml-4 lg:mr-20 ">
              <p class="mb-1 text-gray-600 font-serif">ከንፈር</p>
              <input type="text" v-model="info.lip"
                class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4 outline-[#44abc4]">
            </div>
  
            <div class="ml-4 lg:mr-20 ">
              <p class="mb-1 text-gray-600 font-serif">ጆሮ</p>
              <input type="text" v-model="info.ear"
                class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4 outline-[#44abc4]">
            </div>
  
          </div>
          <div class="lg:flex">
            <div class="ml-4 lg:mr-20 ">
              <p class="mb-1 text-gray-600 font-serif">ልዩ ምልክት</p>
              <input type="text" v-model="info.Unique_appearance"
                class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4 outline-[#44abc4]">
            </div>
            <div class="ml-4 lg:mr-20 ">
              <p class="mb-1 text-gray-600 font-serif">ዜግነት</p>
              <input type="text" v-model="info.citizenship"
                class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4 outline-[#44abc4]">
            </div>

          </div>
        
          <Button @click="submitForm" class="w-72 mx-auto ml-8 mt-6 hover:scale-105 py-3 bg-[#0d5364] rounded-md mb-20  lg:w-96 ld:mx-auto lg:ml-96 text-white lg:text-lg font-serif">መዝግብ</Button>
        </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        info: {
          criminal_id: localStorage.getItem('criminal_id'),
          height: 1.7,
          Eye_color: 'ሰማያዊ',
          face: 'ክብ',
          Forehead: 'ትንሽ',
          nose: 'ጎራዳ',
          hair_type_id: null,
          teeth: 'ነጭ',
          lip: 'ትንሽ',
          ear: 'ትልቅ',
          Unique_appearance: 'አስቂኝ',
          citizenship: 'ኢትዮጵያዊ'
        },
        hairs: [],
      };
    },
    mounted() {
      this.fetchHair();
    },
    methods: {
      async fetchHair() {
        try {
          const response = await axios.get('http://127.0.0.1:8000/api/hair');
          this.hairs = response.data.data; 
          console.log('hair', this.hairs);
        } catch (error) {
          console.error('Error fetching hair:', error);
        }
      },
      async submitForm() {
        const formData = new FormData();
        Object.entries(this.info).forEach(([key, value]) => {
          formData.append(key, value);
        });
  
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/criminalInfo', formData, {});
          console.log('Data submitted successfully:', response.data);
        } catch (error) {
          console.error('Error submitting data:', error);
        }
      }
    }
  }
  </script>
  
  <style></style>