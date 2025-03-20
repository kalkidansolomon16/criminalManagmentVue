<template>
  <div>
   <p>እንኳን ደህና መጡ {{ guards.full_name }}</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      guards:[],
    }
  },
  mounted(){
    this.fetchDoctorInfo()
  },
  methods:{
    async fetchDoctorInfo() {
              try {
                  const response = await axios.get('http://127.0.0.1:8000/api/user', {
                      headers: {
                          Authorization: `Bearer ${localStorage.getItem('token')}` 
                      }
                  });
                  this.guards = response.data.data; 
                  console.log('guard info', this.guards);
              } catch (error) {
                  console.error('Error fetching information', error);
              }
          },

  }
}
</script>

<style>

</style>