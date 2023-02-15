<template>
  <DashBoard />
    <div class="row">
      <div class="col-6 position-sticky">
      
      
        
  <!-- <div class="col-3">
    <h6 class="text-capitalization">Glad to Have you back</h6>
    <h6 class="text-capitalization">{{ name  }}</h6>
  </div> -->
  
      </div>
      
        
  <!-- <div class="col-4">
    <nav class=" bg-tertiary d-flex flex-row-reverse"> 
    <img class="mx-auto" src="../assets/image/msg_icon.png" style="width:3vh; height:3vh;"/>
            <img class="m-2" src="../assets/image/notifcation_icon.png" style="width:3vh; height:3vh;"/>
            </nav>
            </div>
        <div class="col-6 bg-light align-items-center"><br>
          <div class="">{{ component_name }} </div>
          <figure class="img fluid mx-auto mt-5 d-block">
          <img class="img fluid mx-auto d-block justify-content-center" src="../assets/image/createProject_center_img.png" alt="" />
        </figure>
        <div>
          <h6 class="d-flex justify-content-center mb-2 d-block capitalization"> Opp’s</h6>
      <h6 class="d-flex justify-content-center mb-6 d-block capitalization">You Don’t Have Any  Active Project </h6>
          <div class="justify-content-center d-block mb-6">
            <btn class="btn btn-primary btn-sm ">Create Project</btn>
          </div>
       
     -->
    </div>
  <!-- </div>  -->
      
        <!-- </div>
        
    </div> -->
    
  </template>
  <script>
import DashBoard from './DashBoard.vue';

  
  
  export default {
    name: "#DashBoard2",
    components: {
    DashBoard
},
    data() {
      return {
        name:'A',
        component_name:'Dashboard',
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
  #sidebar {
    display: none;
  }
  
  #sidebar.active {
    display: flex;
  }
  </style>
  