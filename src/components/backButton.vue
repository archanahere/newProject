<template>
      <back class="postion relative">
  <router-link type="button" @click="clearData" :to="ragisterFinal" class="position-absolute top-0 start-0 p-3 my-2 "> Back </router-link>
</back>
</template>
<script>


export default {
     name : '#backButton',

methods: {
    back(){
        this.$router.go(-1)    
    },    
    clearData() {
      this.Phone_number = ""
      this.profession = ""
      this.Your_adderss = ""
      this.country_of_resistence = ""
    }
  },
  data() {
    return {
      Phone_number: "",
      profession: "",
      Your_adderss: "",
      country_of_resistence: ""
    }
  }
}


</script>

