<template>
  <div class="row">
  <div class="col-3">
    <sideBar />
</div>

<div class=" col-9 ms-1">
  
  
  <navBar  Cus_name="Jhon " nameOfPage="Dashboard" />
  <defCreate />
  
</div>
</div>
        
      
  </template>
  <script>

import defCreate from '@/components/user/createNewProject.vue';
import navBar from '@/components/user/navbar.vue';  
  import sideBar from './sideBar.vue';
  export default {
    name: "#dashBoard",
    components: {
      sideBar,
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
  
  
  