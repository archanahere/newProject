<template>
  <select-plan @planSelected="selectedPlan"/>
    <div class="card container mt-3">
      <div class="card-body">
  <nav aria-label="Page navigation example">
  

    <ul class="pagination">
    
    <li class="page-item"><proInfo/></li>
    <li class="page-item"> <selectPlan /></li>
    <li class="page-item"><MakePayment /></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
  </nav>
  </div>
</div>
   
    
  </template>
  
  <script>
  import proInfo from '@/components/porjectInfo.vue'
import selectPlan from '@/components/selectPlan.vue'
import MakePayment from '@/components/payment.vue'
  export default {
  name:'#crePro',
  components:{
    selectPlan,
    MakePayment,
    proInfo
  }       
   
      
  }
  
  </script>
  
  <style>
  
  </style>