<template>
  <div class="row">

    <div class="col-3">
      <sideBar />
</div>

<div class=" col-9 ms-1">
  
      <navBar Cus_name="{{ name }}" nameOfPage="Projects" />
  
<div class="row container-fluid">
  <allPro />
    <!-- <proInfo /> -->
    
  </div>
  
</div>
</div>
  </template>
  <script>
import sideBar from './sideBar.vue'
// import proInfo from '@/components/user/porjectInfo.vue'  
import navBar from '@/components/user/navbar.vue'
import allPro from '@/components/user/allprojects.vue'

  export default {
  components: { 
    sideBar,
  // proInfo,
  navBar,allPro },
      name:'#dbProjects',
      data(){
        return{
            
            name:'Jhon Deo'
        }
      }
      
  }

  </script>
  