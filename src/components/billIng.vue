<template>

  <div class="row">
    <div class="col-3 bg-primary d-flex align-items-center">
      <figure>
          <img src="../assets/image/logo.png" class="img-fluid d-block ax-auto bg-primary" style="width:10vh; height:10vh;"/>
        </figure>
    </div>
    <div class="col-9">
     
      
        
          <nav class=" bg-tertiary d-flex flex-row-reverse">
            
              <div class="p-2"><h6 class="p-2"> name </h6>  </div>
              <div class="p-2"><img class="m-2" src="../assets/image/notifcation_icon.png" style="width:3vh; height:3vh;"/></div>
              <div class="p-2"><img class="m-2" src="../assets/image/msg_icon.png" style="width:3vh; height:3vh;"/></div>
            </nav> 
          
        </div>  
      </div>  
    
  <div class="row">
      <div class="col-3 bg-primary text-light justify-content-evenly d-flex flex-column" style="height:100vh;"><br>
        <router-link :to="{ name:'DashBoard' }" @click="goToDashboard" class="btn btn-lg text-light" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;" > DashBoard</router-link><br>
        <router-link :to="{ name:'dbProjects' }" @click="goToProjects" class="btn btn-lg text-light" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;" > Project</router-link><br>
        <router-link :to="{name:'dbbillIng'}" @click="goToBilling" class="btn btn-lg text-light"   style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;"> Billing</router-link><br>
        <router-link :to="{name:'dbAccount'}" @click="goToAccount" class="btn btn-lg text-light"  style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;" > Account</router-link><br> 
        <router-link :to="{name:'dbSetting'}" @click="goToSetting" class="btn btn-lg text-light"  style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;"> Settings</router-link></div> 
        <!-- Canvas of the page -->
        
        <div class="col-9 --bs-secondary-bg align-items-center"><br>
          <div class="">{{ component_name }} </div>
          <figure class="img fluid mx-auto mt-5 d-block">
          <img class="img fluid mx-auto d-block justify-content-center" src="../assets/image/createProject_center_img.png" alt="" />
        </figure>
        <div>
          
        
      </div>
        
        </div>
        </div>
  
  
   
  </template>
  <script>
  // import billIng from "@/components/billIng.vue";
  
  export default {
    name: "#dbbillIng",
    components: {
      // billIng,
  
    },
    data() {
      return {
        name:'B',
        component_name:'Billing',
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
  