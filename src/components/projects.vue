<template>
    <!-- <router-view class="DashBoard"></router-view> -->
    
    <div class="row">
      <div class="col-3">
        <DashBoard />
          </div>
    <!-- <div class="col-3" mt-2>{{ component_name }}
    
    <h6 class="mt-3 align-text-start"></h6>
    </div> -->
    <div class="col-9">

      <ul class="nav  justify-content-end"> 
          
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
<div class="row container-fluid">
  <div class="col-12 ">
    <proInfo />
  </div>
</div>
</div>
</div>

  </template>
  <script>
import DashBoard from './DashBoard.vue'
import proInfo from '@/components/porjectInfo.vue'  

  export default {
  components: { DashBoard,proInfo },
      name:'#dbProjects',
      data(){
        return{
            component_name:'Projects',
            name:'Jhon Deo'
        }
      }
      
  }

  </script>
  