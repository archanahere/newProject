<template>
      <navBar Cus_name="{{ name }}" nameOfPage="Projects" />
  
<div class="row container-fluid">
  <allPro />
    <!-- <proInfo /> -->
  
</div>


  </template>
  <script>
// import sideBar from './sideBar.vue'
// import proInfo from '@/components/porjectInfo.vue'  
import navBar from '../components/navbar.vue'
import allPro from '@/components/allprojects.vue'

  export default {
  components: { 
    // sideBar,
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
  