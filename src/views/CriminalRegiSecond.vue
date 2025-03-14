<template>
    <div class="ml-">
      <div class="bg-gradient-to-r from-[#e4a404] to-[#fbd3318e] h-40 px-10">
        <div>
          <img src="/logo.png" alt="" class="w-20 rounded-full mx-auto lg:w-72 lg:-mt-6">
          <p class="text-center  font-bold text-xl lg:-mt-9">የታራሚወች መመዝገቢያ ቅጽ</p>
        </div>
        <div class="bg-[#fbfbfb] rounded-xl mt-2 w-88 lg:w-11/12 lg:mx-auto -ml-7 lg:pl-16">
          <div class="lg:flex">
            <div class="ml-4 pt-4 lg:mr-20 ">
              <p class="mb-1 text-gray-600 font-serif">ቁመት</p>
              <input type="text" v-model="height"
                class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4">
            </div>
  
            <div class="ml-4 lg:mr-20 lg:pt-4">
              <p class="mb-1 text-gray-600 font-serif"> የአይኑ ቀለም </p>
              <input type="text" v-model=" eye_color"
                class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4">
            </div>
  
            <div class="ml-4 lg:pt-4">
              <p class="mb-1 text-gray-600 font-serif">መልክ</p>
              <input type="text" v-model="face"
                class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4">
            </div>
          </div>
  
          <div class="lg:flex">
            <div class="ml-4 lg:mr-20 ">
              <p class="mb-1 text-gray-600 font-serif">ግንባር</p>
              <input type="text" v-model="forehead"
                class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4">
            </div>
  
            <div class="ml-4 lg:mr-20 ">
              <p class="mb-1 text-gray-600 font-serif">አፍንጫ</p>
              <input type="text" v-model="nose"
                class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4">
            </div>
  
            <div class="ml-4">
              <label class="font-serif text-gray-600 text-md">የጸጉር አይነት </label><br>
              <select name="gender" v-model="hair_id"
                class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4">
                <option v-for="hairs in hair" :key="hair.id" :value="hair.id">{{ hair.name }}</option>
              </select>
            </div>
          </div>
          <div class="lg:flex">
            <div class="ml-4 lg:mr-20 ">
              <p class="mb-1 text-gray-600 font-serif">ጥርስ</p>
              <input type="text" v-model="teeth"
                class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4">
            </div>
  
            <div class="ml-4 lg:mr-20 ">
              <p class="mb-1 text-gray-600 font-serif">ከንፈር</p>
              <input type="text" v-model="lip"
                class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4">
            </div>
  
            <div class="ml-4 lg:mr-20 ">
              <p class="mb-1 text-gray-600 font-serif">ጆሮ</p>
              <input type="text" v-model="ear"
                class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4">
            </div>
  
          </div>
          <div class="lg:flex">
            <div class="ml-4 lg:mr-20 ">
              <p class="mb-1 text-gray-600 font-serif">ልዩ ምልክት</p>
              <input type="text" v-model="unique_appearance"
                class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4">
            </div>
            <div class="ml-4 lg:mr-20 ">
              <p class="mb-1 text-gray-600 font-serif">ዜግነት</p>
              <input type="text" v-model="citizinship"
                class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4">
            </div>

          </div>
        
          <Button class="w-72 mx-auto ml-8 mt-6 py-3 bg-[#d6a119] rounded-md mb-20  lg:w-96 ld:mx-auto lg:ml-96 text-white lg:text-lg font-serif">መዝግብ</Button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style></style>