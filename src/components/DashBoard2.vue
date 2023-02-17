<template>
  <DashBoard />
    <div class="row">
      <div class="col-6 position-sticky">
      </div>
    <h6 class="d-flex justify-content-center mb-6 d-block capitalization">You Don’t Have Any  Active Project </h6>
          <div class="justify-content-center d-block mb-6">
            <btn class="btn btn-primary btn-sm ">Create Project</btn>
          </div>
       
          </div>
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
  