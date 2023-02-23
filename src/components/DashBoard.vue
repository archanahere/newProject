<template>

  <div class="ms-1">
       
    
        <navBar  Cus_name="Jhon " nameOfPage="Dashboard" />
            <defCreate />
            
    </div>
        
      
  </template>
  <script>

import defCreate from '@/components/createNewProject.vue';
import navBar from '../components/navbar.vue';  
  
  export default {
    name: "#dashBoard",
    components: {
    
    defCreate,
    navBar
},
    data() {
      return {
        name:'A',
        
      };
    },
      
    
  }
  </script>
  <style lang="scss" scoped>
  .page{
    height: 100vh;
    margin-left : 2rem;
    // margin-block-start: 2rem;
  }
  </style>
  
  
  