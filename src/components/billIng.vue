<template>
  <!-- DashBoard is a sidebar/Navbar -->
  <div>
    <div class="row">
      <div class="col-3">
        <DashBoard />
          </div>
    <div class="col-3" mt-2>{{ component_name }}
    <!-- <router-view class="DashBoard"></router-view> -->
    <h6 class="mt-3 align-text-start"></h6>
    <div>
    <router-link class="btn" active-class="" to="bHistory" >Billing History
  </router-link><br>
  <router-link class="py-2 m-2" to="savedCard">Saved Cards  </router-link></div>
</div>
      
      <ul class="nav col-6 justify-content-end"> 
          
  <li class="nav-item">
    <img class="mt-2 mx-5" src="../assets/image/msg_icon.png" style="width:3vh; height:3vh;"/>
  </li>
  <li class="nav-item">
    <img class="mt-2 mx-5" src="../assets/image/notifcation_icon.png" style="width:3vh; height:3vh;"/>
  </li>
  <li class="nav-item">
    <a class="mt-2 nav-link" href="#"> </a>
  </li>
  <li class="nav-item">
    <h6 class="mt-2 nav-link ">{{ name  }}</h6>
  </li>
</ul>

</div>
  <!-- page after navbar starts form Here -->
  <div class="row">
    <div class="col-3"></div>
  
    <div class="col-4 shadow-sm p-3 mb-5 bg-body-tertiary rounded border-right-primary">
 

</div>
      

      
      
  
</div>
</div>  
  </template>
  <script>
import DashBoard from './DashBoard.vue';
// import bHistory from "@/components/bHistory.vue"
  
  export default {
    name: "#dbbillIng",
    components: {
        DashBoard,
        // bHistory
      
    },
    data() {
      return {
        name:'Jhon Deo',
        component_name:'Billing',
        // types:[
        //   {id:1,'name': "Billing History"},
        //   {id:2,'name' :"Saved Cards"}
        // ]
        
        
      };
    },
    methods:{
      goToDashboard() {
        this.$router.push({ name: 'DashBoard' });
      },
      goToProjects() {
        this.$router.push({ name: 'dbProjects' });
      },
      goToBilling() {
        this.$router.push({ name: 'dbbillIng' });
      },
      goToAccount() {
        this.$router.push({ name: 'dbAccount' });
      },
      goToSetting() {
        this.$router.push({ name: 'dbSetting' });
      },
      
    }
  };
  </script>
  <style scoped>
  .navbar,.navbar-text{
      position: relative;
  }
  .btn.hover {
      background-color: white;
    }
    .text-blue {
    color: blue;
  }
    a.router-link-active{
    background: #ffffff;
    text-decoration-color: black;
  }
  </style>
  