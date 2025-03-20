<template>
  <div class="">
    <div class="bg-gradient-to-r from-[#44abc4] via-[#1e88ab] via-[#0d7992] via-[#146584] to-[#0d5364] w-full h-46 ">
      <div>
        <img src="/logo.png" alt="" class="w-20 rounded-full mx-auto lg:w-72 lg:-mt-6">
        <p class="text-center  font-bold text-xl lg:-mt-12  lg:pb-6">የታራሚወች መመዝገቢያ ቅጽ</p>
      </div>
      <div class="bg-[#fbfbfb] rounded-xl mt-2 lg:-mt-40 lg:pt-40 w-88 lg:w-11/12 lg:mx-auto -ml-7 lg:pl-16">
        <div class="lg:flex">
          <div class="ml-4 pt-4 lg:mr-20 ">
            <p class="mb-1 text-gray-600 font-serif">የወ/መ/ፍ/ቁጥር</p>
            <input type="text" v-model="criminals.criminal_unique_number"

              class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4 outline-[#44abc4]">

          </div>

          <div class="ml-4 lg:mr-20 lg:pt-4">
            <p class="mb-1 text-gray-600 font-serif"> የማረ/ቤት መ/መ/ቁጥር</p>
            <input type="text" v-model="criminals.prison_unique_number"

              class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4 outline-[#44abc4]">

          </div>

          <div class="ml-4 lg:pt-4">
            <p class="mb-1 text-gray-600 font-serif">ታራሚው የሚገኝበት የቤት ቁጥር</p>
            <input type="text" v-model="criminals.criminalSell_unique_number"

              class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4 outline-[#44abc4]">

          </div>
        </div>
        <div class="lg:flex">
          <div class="ml-4 pt-4 lg:mr-20 ">
            <p class="mb-1 text-gray-600 font-serif">ስም</p>
            <input type="text" v-model="criminals.first_name"

              class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4 outline-[#44abc4]">

          </div>

          <div class="ml-4 lg:mr-20 lg:pt-4">
            <p class="mb-1 text-gray-600 font-serif"> የአባት ስም</p>
            <input type="text" v-model="criminals.middle_name"

              class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4 outline-[#44abc4]">

          </div>

          <div class="ml-4 lg:pt-4">
            <p class="mb-1 text-gray-600 font-serif">የአያት ስም</p>
            <input type="text" v-model="criminals.last_name"

              class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4 outline-[#44abc4]">

          </div>
        </div>

        <div class="lg:flex">
          <div class="ml-4 lg:mr-20 ">
            <p class="mb-1 text-gray-600 font-serif">የተወለደበት ቀን</p>
            <input type="date" v-model="criminals.date_of_birth"

              class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4 outline-[#44abc4]">

          </div>

          <div class="ml-4 lg:mr-20 ">
            <p class="mb-1 text-gray-600 font-serif">የእናት ስም</p>
            <input type="text" v-model="criminals.mother_name"

              class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4 outline-[#44abc4]">

          </div>

          <div class="ml-4">
            <label class="font-serif text-gray-600 text-md">ጾታ</label><br>
            <select name="gender" v-model="criminals.sex_id"
              class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4 outline-[#44abc4]">
              <option v-for="sex in sexs" :key="sex.id" :value="sex.id">{{ sex.gender }}</option>
            </select>
          </div>
        </div>
        <div class="lg:flex">
          <div class="ml-4 lg:mr-20 ">
            <label class="font-serif text-gray-600 text-md">የተወለደበት ክልል</label><br>
            <select name="birth_region_id" v-model="criminals.birth_region_id"
              class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4 outline-[#44abc4]">
              <option v-for="region in regions" :key="region.id" :value="region.id">{{ region.name }}</option>
            </select>
          </div>

          <div class="ml-4 lg:mr-20">
            <label class="font-serif text-gray-600 text-md">የተወለደበት ዞን</label><br>
            <select name="birth_region_id" v-model="criminals.birth_town_id"
              class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4 outline-[#44abc4]">
              <option v-for="town in towns" :key="town.id" :value="town.id">{{ town.name }}</option>
            </select>
          </div>

          <div class="ml-4 lg:mr-20 ">
            <label class="font-serif text-gray-600 text-md">የተወለደበት ወረዳ</label><br>
            <select name="birth_region_id" v-model="criminals.birth_city_id"
              class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4 outline-[#44abc4]">
              <option v-for="city in Cities" :key="city.id" :value="city.id">{{ city.name }}</option>
            </select>
          </div>

        </div>
        <div class="lg:flex">
          <div class="ml-4 lg:mr-20 ">
            <p class="mb-1 text-gray-600 font-serif">የተወለደበት ቀበሌ</p>
            <input type="text" v-model="criminals.birth_district"

              class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4 outline-[#44abc4]">

          </div>

          <div class="ml-4 lg:mr-20">
            <label class="font-serif text-gray-600 text-md">አሁን የሚኖርበት ክልል</label><br>
            <select name="birth_region_id" v-model="criminals.current_region_id"
              class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4 outline-[#44abc4]">
              <option v-for="region in regions" :key="region.id" :value="region.id">{{ region.name }}</option>
            </select>
          </div>
          <div class="ml-4 lg:mr-20 ">
            <label class="font-serif text-gray-600 text-md">አሁን የሚኖርበት ዞን</label><br>
            <select name="birth_region_id" v-model="criminals.current_town_id"
              class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4 outline-[#44abc4]">
              <option v-for="town in towns" :key="town.id" :value="town.id">{{ town.name }}</option>
            </select>
          </div>
        </div>
        <div class="lg:flex">

          <div class="ml-4 lg:mr-20 ">
            <label class="font-serif text-gray-600 text-md">አሁን የሚኖርበት ወረዳ</label><br>
            <select name="birth_region_id" v-model="criminals.current_city_id"
              class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4 outline-[#44abc4]">
              <option v-for="city in Cities" :key="city.id" :value="city.id">{{ city.name }}</option>
            </select>
          </div>

          <div class="ml-4 lg:mr-20">
            <p class="mb-1 text-gray-600 font-serif">አሁን የሚኖርበት ቀበሌ</p>
            <input v-model="criminals.current_district" type="text"

              class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4 outline-[#44abc4]">

          </div>
          <div class="ml-4 lg:mr-20 ">
            <label class="font-serif text-gray-600 text-md">የትምህርት ደረጃ</label><br>
            <select name="birth_region_id" v-model="criminals.educational_level_id"
              class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4 outline-[#44abc4]">
              <option v-for="education in educations" :key="education.id" :value="education.id">{{ education.name }}
              </option>
            </select>
          </div>
        </div>
        <div class="lg:flex">

          <div class="ml-4 lg:mr-20 ">
            <p class="mb-1 text-gray-600 font-serif">የሙያ/የስራ አይነት</p>
            <input type="text" v-model="criminals.job" class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4 outline-[#44abc4]">
          </div>

         <div class="ml-4 lg:mr-20 ">
            <label class="font-serif text-gray-600 text-md">ብሄር</label><br>
            <select name="" v-model="criminals.ethnic_group_id"
              class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4 outline-[#44abc4]">
              <option v-for="ethnic in ethnics" :key="ethnic.id" :value="ethnic.id">{{ ethnic.name }}</option>
            </select>
          </div>
          <div class="ml-4 lg:mr-20 ">
            <label class="font-serif text-gray-600 text-md">ሀይማኖት</label><br>
            <select name="" v-model="criminals.religion_id"
              class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4 outline-[#44abc4]">
              <option v-for="religion in religions" :key="religion.id" :value="religion.id">{{ religion.name }}</option>
            </select>
          </div>
        </div>
        <div class="lg:flex">
          <div class="ml-4 lg:mr-20 ">
            <p class="mb-1 text-gray-600 font-serif">የቅርብ ተጠሪ</p>
            <input type="text" v-model="criminals.Closest_respondent"

              class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4 outline-[#44abc4]">

          </div>

          <div class="ml-4 lg:mr-20">
            <label class="font-serif text-gray-600 text-md">የቅርብ ተጠሪ ክልል</label><br>
            <select name="" v-model="criminals.Closest_respondent_region_id"
              class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4 outline-[#44abc4]">
              <option v-for="region in regions" :key="region.id" :value="region.id">{{ region.name }}</option>
            </select>
          </div>
          <div class="ml-4 lg:mr-20 ">
            <label class="font-serif text-gray-600 text-md">የቅርብ ተጠሪ ዞን</label><br>
            <select name="" v-model="criminals.Closest_respondent_town_id"
              class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4 outline-[#44abc4]">
              <option v-for="town in towns" :key="town.id" :value="town.id">{{ town.name }}</option>
            </select>
          </div>
        </div>
        <div class="lg:flex">

          <div class="ml-4 lg:mr-20 ">
            <label class="font-serif text-gray-600 text-md">የቅርብ ተጠሪ ወረዳ</label><br>
            <select name="" v-model="criminals.Closest_respondent_city_id"
              class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4 outline-[#44abc4]">
              <option v-for="city in Cities" :key="city.id" :value="city.id">{{ city.name }}</option>
            </select>
          </div>

          <div class="ml-4 lg:mr-20">
            <p class="mb-1 text-gray-600 font-serif">የቅርብ ተጠሪ ቀበሌ</p>
            <input v-model="criminals.Closest_respondent_district" type="text"

              class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4 outline-[#44abc4]">

          </div>
          <div class="ml-4 lg:mr-20 ">
            <p class="mb-1 text-gray-600 font-serif">ስልክ መደበኛ</p>
            <input v-model="criminals.phone_number" type="number" class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4 outline-[#44abc4]">
          </div>
      </div>
        <div class="lg:flex">

          <div class="ml-4 lg:mr-20 ">
            <p class="mb-1 text-gray-600 font-serif">ሞባይል ስልክ</p>
            <input v-model="criminals.mobile_number" type="number" class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4 outline-[#44abc4]">
          </div>

         <!-- <div class="ml-4 lg:mr-20 ">
            <p class="mb-1 text-gray-600 font-serif">ቅጹን የሞላው ባለሙያ ስም</p>

            <input type="text" v-model="criminals.user_id" class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4 outline-[#44abc4]">
          </div>


        <div class="ml-4 lg:mr-20 ">
            <p class="mb-1 text-gray-600 font-serif">ቅጹን የሞላው ባለሙያ ፊርማ</p>
            <input type="file" @change="handlesegnature" class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4 outline-[#44abc4]">
          </div>
     </div>
        <div class="lg:flex">
          <div class="ml-4 lg:mr-20">
            <label class="font-serif text-gray-600 text-md">የወንጀሉ አይነት</label><br>
            <select name="" v-model="criminals.crime_id"
              class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4 outline-[#44abc4]">
              <option v-for="crime in crimes" :key="crime.id" :value="crime.id">{{ crime.name }}</option>
            </select>
          </div>
          <div class="ml-4 lg:mr-20 ">
            <p class="mb-1 text-gray-600 font-serif">የወንጀሉ አይነት ገለጻ</p>
            <input v-model="criminals.crime_description" type="textArea"

              class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4 outline-[#44abc4]">

          </div>


          <div class="ml-4 lg:mr-20 ">
            <label class="font-serif text-gray-600 text-md">የወንጀለኛው አይነት</label><br>
            <select name="" v-model="criminals.criminal_type_id"
              class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4 outline-[#44abc4]">
              <option v-for="type in criminalTypes" :key="type.id" :value="type.id">{{ type.name }}</option>
            </select>
          </div>
  
        </div>
        <div class="lg:flex">
          <div class="ml-4 lg:mr-20 ">
            <p class="mb-1 text-gray-600 font-serif">ያሰረዉ ፍርድ ቤት ስም</p>
            <input v-model="criminals.arrest_court_id" type="text"

              class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4 outline-[#44abc4]">

          </div>
          <div class="ml-4  lg:mr-20">
            <p class="mb-1 text-gray-600 font-serif">ማረሚያ ቤት የገባበት ቀን</p>
            <input v-model="criminals.date_enterd" type="date"

              class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4 outline-[#44abc4]">

          </div>
          <div class="ml-4  ">
            <p class="mb-1 text-gray-600 font-serif">ማረሚያ ቤት የገባበት ሰአት</p>
            <input v-model="criminals.time_enterd" type="text"

              class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4 outline-[#44abc4]">

          </div>
        </div>
        <div class="lg:flex">
          <div class="ml-4 lg:mr-20 ">
            <p class="mb-1 text-gray-600 font-serif">ዉሳኔ የተሰጠበት ቀን</p>
            <input v-model="criminals.verdict_date" type="date"

              class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4 outline-[#44abc4]">

          </div>

          <div class="ml-4 lg:mr-20">
            <p class="mb-1 text-gray-600 font-serif">የፍርድ ልክ ቀጠሮ</p>
            <input v-model="criminals.appointment_date" type="date"

              class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4 outline-[#44abc4]">

          </div>
          <div class="ml-4 lg:mr-20 ">
            <p class="mb-1 text-gray-600 font-serif">ፍርደኛ</p>
            <input v-model="criminals.prisoner" type="text"

              class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4 outline-[#44abc4]">

          </div>
        </div>
        <div class="lg:flex">
          <div class="ml-4 lg:mr-20 ">
            <p class="mb-1 text-gray-600 font-serif">የተሻሻለዉ የፍርድ ልክ</p>
            <input v-model="criminals.updated_verdict" type="text"

              class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4 outline-[#44abc4]">

          </div>

          <div class="ml-4 lg:mr-20">
            <p class="mb-1 text-gray-600 font-serif">ዉሳኔ የሰጠው ፍርድ ቤት</p>
            <input v-model="criminals.verdict_court_id" type="text"

              class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4 outline-[#44abc4]">

          </div>

          <div class="ml-4">
            <p class="mb-1 text-gray-600 font-serif">በይግባኝ የተሻሻለው የፍርድ ቤት ስም</p>
            <input v-model="criminals.updated_verdict_court_id" type="text"

              class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4 outline-[#44abc4]">

          </div> 
        </div>
        <div class="lg:flex">
          <div class="ml-4 lg:mr-20 ">
            <p class="mb-1 text-gray-600 font-serif">የእስራት ቅጣቱ የታሰበበት ቀን</p>
            <input v-model="criminals.start_dateof_arrest" type="date"

              class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4 outline-[#44abc4]">

          </div>

          <div class="ml-4 lg:mr-20 ">
            <p class="mb-1 text-gray-600 font-serif">የእስራት ቅጣቱ የሚያልቅበት ቀን</p>
            <input v-model="criminals.end_dateof_arrest" type="date"

              class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4 outline-[#44abc4]">

          </div>

          <div class="ml-4">
            <p class="mb-1 text-gray-600 font-serif">በአመክሮ የሚፈታበት ቀን</p>
            <input v-model="criminals.dateof_mercy_release" type="date"

              class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4 outline-[#44abc4]">

          </div>
        </div>
        <div class="lg:flex">
          <div class="ml-4 lg:mr-20 ">
            <p class="mb-1 text-gray-600 font-serif">የተፈታበት ምክንያት</p>
            <input v-model="criminals.release_reason" type="text"

              class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4 outline-[#44abc4]">

          </div>
          <div class="ml-4 lg:mr-20">
            <p class="mb-1 text-gray-600 font-serif">እስራቱን ፈጽሞ የሚፈታበት ቀን</p>
            <input v-model="criminals.date_of_release" type="date"

              class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4 outline-[#44abc4]">

          </div>

          <div class="ml-4 lg:mr-20 ">
            <p class="mb-1 text-gray-600 font-serif">ተያያዥ መረጃ</p>
            <input type="file" @change="handlefile" class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4 outline-[#44abc4]">
          </div>
         </div>


        <div class="ml-4 w-80 mx-auto lg:w-full lg:mx-auto lg:ml-4">
          <p class="mb-1 text-gray-600 font-serif">ፎቶ</p>
          <input type="file" @change="handlephoto" class="w-80 py-2 bg-gray-200 border-1 border-gray-300 rounded-md mb-4 outline-[#44abc4]">
        </div>


       
        <Button @click="submitData" class="w-72 mx-auto ml-8 mt-6 py-3 hover:scale-105 bg-[#0d5364] rounded-md mb-20  lg:w-96 ld:mx-auto lg:ml-96 text-white lg:text-lg font-serif">ቀጣይ ገጽ</Button>

      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      criminals:{

        criminal_unique_number: '213265',
        prison_unique_number: '6598623',
        criminalSell_unique_number: '02',
        first_name: 'belete',
        middle_name: 'kebede',
        last_name: 'alemu',
        date_of_birth: '02/10/1990',
        mother_name: 'fantu',
        sex_id: '1',
        birth_region_id: '2',
        	birth_town_id: '3',
        birth_city_id: '2',
        birth_district: 'kombolcha',
        current_region_id: '2',
        current_town_id: '3',
        current_city_id: '4',
        current_district: 'kombolcha',
        educational_level_id: '2',
        job: 'accountant',
        ethnic_group_id: '3',
        religion_id: '5',
        Closest_respondent: 'temesgen kefyalew',
        Closest_respondent_region_id: '5',
        Closest_respondent_town_id: '8',
        Closest_respondent_city_id: '4',
        Closest_respondent_district:'kombolcha',
        phone_number: '0331112565',
        mobile_number: '0921212121',

        user_id : localStorage.getItem('user_id'),

        registral_signature: null, 
        photo: null,               
        crime_id: '1',
        crime_description: 'brabry',
        criminal_type_id: '2',
        arrest_court_id: 'kombolcha court',
        date_enterd: '12/03/2017',
        time_enterd: '2:40',
        verdict_date: '11/03/2017',
        appointment_date: '06/03/2017',
        prisoner: 'belete kebede',
        updated_verdict: '12 days',
        verdict_court_id: 'dessie court',
        updated_verdict_court_id: 'addis abeba court',
        start_dateof_arrest: '03/06/2017',
        end_dateof_arrest: '01/02/2019',
        dateof_mercy_release: '04/03/2018',
        release_reason: 'mercy',
        date_of_release: '04/03/2018',
        related_info: null,
        writ:'',
        status:'1'
      },
      criminalTypes:[],
      crimes:[],
      Cities:[],
      towns:[],
      regions:[],
      religions:[],
      ethnics:[],
      educations:[],
      sexs:[]
    }
  },
  mounted(){

    this.fetchCriminalType();
    this.fetchCrime();
    this.fetchCity();
    this.fetchTowns();
    this.fetchRegion();
    this.fetchReligion();
    this.fetchEthnic();
    this.fetchEducations();
    this.fetchSex();
    this.criminals.user_id = localStorage.getItem('user_id');

  },
  methods: {
    handlesegnature(event) {
      const file = event.target.files[0]
      if (file) {
        this.criminals.registral_signature= event.target.files[0]
        console.log('photo',this.criminals.registral_signature)
      }
    },
    handlefile(event) {
      const file = event.target.files[0]
      if (file) {
        this.criminals.writ= event.target.files[0]
        console.log('photo',this.criminals.writ)
      }
    },



    handlephoto(event) {
      const file = event.target.files[0]
      if (file) {
        this.criminals.photo = event.target.files[0]
        console.log('photo',this.criminals.photo)
      }
    },

    async fetchSex(){
      try{
        const response = await axios.get('http://127.0.0.1:8000/api/sex');
        this.sexs = response.data.data;
        console.log('gender', this.sexs)
      } catch(error){
        console.error('error fetching the data')
      }
    },
    async fetchEducations(){
      try{
        const response = await axios.get('http://127.0.0.1:8000/api/education');
        this.educations = response.data.data;
        console.log('education', this.educations)
      } catch(error){
        console.error('error fetching the data')
      }
    },
    async fetchCriminalType(){
      try{
        const response = await axios.get('http://127.0.0.1:8000/api/criminalType');
        this.criminalTypes = response.data.data;
        console.log('criminal type', this.criminalTypes)
      } catch(error){
        console.error('error fetching the data')
      }
    },
    async fetchCrime(){
      try{
        const response = await axios.get('http://127.0.0.1:8000/api/crime');
        this.crimes = response.data.data
        console.log('crime', this.crimes)
      } catch(error){
        console.error('error fetching the data');
      }
    },
    async fetchCity(){
      try{
        const response = await axios.get('http://127.0.0.1:8000/api/city')
        this.Cities = response.data.data
        console.log('city', response.data.data)
      } catch(error){
        console.error('error fetching data')
      }
    },
    async fetchTowns() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/town');
                this.towns = response.data.data; 
                console.log('town', this.towns)
            } catch (error) {
                console.error('Error fetching towns:', error);
            }
        },
        async fetchRegion(){
          try{
            const response = await axios.get('http://127.0.0.1:8000/api/region');
            this.regions = response.data.data
            console.log('region', this.regions)
          } catch(error){
            console.error('error fetching regions')
          }
        },
        async fetchEthnic(){
          try{
            const response = await axios.get('http://127.0.0.1:8000/api/ethincgroup');
            this.ethnics = response.data.data
            console.log('region', this.ethnics)
          } catch(error){
            console.error('error fetching ethnics')
          }
        },
        async fetchReligion(){
          try{
            const response = await axios.get('http://127.0.0.1:8000/api/religion')
            this.religions = response.data.data
            console.log('religion', this.religions)
          } catch(error){
            console.error('error fetching religion')
          }
        },
        submitData() {
  const formData = new FormData();
  

  Object.entries(this.criminals).forEach(([key, value]) => {
    formData.append(key, value);
  });



  axios.post('http://127.0.0.1:8000/api/criminal', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  .then(response => {
    localStorage.setItem('criminal_id',response.data.data.id);
    this.$router.push('/criminalinfo');
  })
  .catch(error => {
    console.error('Error submitting data:', error);
  });
}
  }
}
</script>