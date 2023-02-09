<template>
<DashBoard />
    </template>
    <script>
    import DashBoard from "@/components/DashBoard.vue";
    
    export default {
      name: "#dbAccount",
      components: {
        DashBoard,
    
      },
      data() {
        return {
          name:'',
          component_name:'Account',
        };
      },
    //   methods:{
    //     goToDashboard() {
    //       this.$router.push({ name: 'DashBoard' });
    //     },
    //     goToProjects() {
    //       this.$router.push({ name: 'dbProjects' });
    //     },
    //     goToBilling() {
    //       this.$router.push({ name: 'dbbillIng' });
    //     },
    //     goToAccount() {
    //       this.$router.push({ name: 'dbAccount' });
    //     },
    //     goToSetting() {
    //       this.$router.push({ name: 'dbSetting' });
    //     },
        
    //   }
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
    
  