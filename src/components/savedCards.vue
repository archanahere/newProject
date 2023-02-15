<template>
    <h6>saved card</h6>
    {{ cards }}
    <!-- <router-view :to=""> -->
    <!-- </router-view> -->
  </template>
  
  <script>
  export default {
  name:'#savedCards',
  data(){
      return{
          cards:[
            {id:1,'name': "Billing History"},
            {id:2,'name' :"Saved Cards"}
          ]
          
          
      }
  }
  }
  </script>
  
  <style>
  
  </style>