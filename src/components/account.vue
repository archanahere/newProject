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
    
  