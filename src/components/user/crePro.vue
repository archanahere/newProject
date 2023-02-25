<template>
  <div >

        <nevBar />
      </div>
    <proInfo />
    
 
  <!-- <select-plan @planSelected="selectedPlan"/> -->
 
    <!-- <li class="page-item"> <router-view :is='selectPlan' /></li>
    <li class="page-item"><router-view :is='MakePayment' /></li>
     -->
  
  

   
    
  </template>
  
  <script>
  import proInfo from '@/components/user/porjectInfo.vue'
  // import sideBar from "@/components/user/sideBar.vue"
  import nevBar from "@/components/user/navbar.vue"
// import selectPlan from '@/components/user/selectPlan.vue'
// import MakePayment from '@/components/user/payment.vue'
  export default {
  name:'#crePro',
  components:{
    // selectPlan,
    nevBar,
    // sideBar,
    // MakePayment,
    proInfo
  }       
   
      
  }
  
  </script>
  
  <style>
  
  </style>