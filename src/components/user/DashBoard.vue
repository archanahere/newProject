<template>
  <div class="row">
  <div class="col-2">
    <sideBar />
</div>

<page class="page col-10 ms-1">
  
  
  <navBar  Cus_name="Jhon " nameOfPage="Dashboard" />
  <defCreate />
  
</page>
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
    background-color: var(--light);
    // margin-block-start: 2rem;
  }
  
  </style>
  
  
  