<template>

<div class="row">
  <div class="col-3 bg-primary d-flex align-items-center">
    <figure>
        <img src="../assets/image/logo.png" class="img-fluid d-block ax-auto bg-primary" style="width:10vh; height:10vh;"/>
      </figure>
  </div>
  <div class="col-3">
    <h6 class="text-capitalization">Glad to Have you back</h6>
    <h6 class="text-capitalization">{{ name  }}</h6>
  </div>
   
  <div class="col-4">
    <nav class=" bg-tertiary d-flex flex-row-reverse"> 
    <img class="mt-2" src="../assets/image/msg_icon.png" style="width:3vh; height:3vh;"/>
            <img class="m-2" src="../assets/image/notifcation_icon.png" style="width:3vh; height:3vh;"/>
            </nav>
            </div>
          
  <div class="col-2"> <div class="p-2"><h6 class="p-2"> {{ name  }} </h6>  </div>  
      </div>  
    </div>  
  <!-- addition of icon is remaining -->
<!-- <div class="row"> -->
   
  <!-- <div> -->
    <!-- <button @click="toggleSidebar" class="toggle-btn">Toggle Sidebar</button>
    
      <div id="sidebar" class="col-3 bg-primary text-light justify-content-evenly d-flex flex-column" v-if="showSidebar" style="height:100vh;">
        <br>
        <router-link :to="{ name:'DashBoard' }" src="../assets/image/Developer board.png" @click="goToDashboard" class="btn btn-lg text-light" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;"> DashBoard</router-link><br>
        <router-link :to="{ name:'dbProjects' }" src="../assets/image/proejct_icon.png" @click="goToProjects" class="btn btn-lg text-light" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;"> Project</router-link><br>
        <router-link :to="{name:'dbbillIng'}" @click="goToBilling" class="btn btn-lg text-light" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;"> Billing</router-link><br>
        <router-link :to="{name:'dbAccount'}" @click="goToAccount" class="btn btn-lg text-light" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;"> Account</router-link><br>
        <router-link :to="{name:'dbSetting'}" @click="goToSetting" class="btn btn-lg text-light" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;"> Settings</router-link>
      </div>
    </div>
  </div>  -->
  <div class="row">
    <div id="sidebar" class="col-3 bg-primary text-light justify-content-evenly d-flex flex-column" style="height:100vh;"><br>
      <router-link :to="{ name:'DashBoard' }" @click="goToDashboard" class="btn btn-lg text-light" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;" > DashBoard</router-link><br>
      <router-link :to="{ name:'dbProjects' }" @click="goToProjects" class="btn btn-lg text-light" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;" > Project</router-link><br>
      <router-link :to="{name:'dbbillIng'}" @click="goToBilling" class="btn btn-lg text-light"   style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;"> Billing</router-link><br>
      <router-link :to="{name:'dbAccount'}" @click="goToAccount" class="btn btn-lg text-light"  style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;" > Account</router-link><br> 
      <router-link :to="{name:'dbSetting'}" @click="goToSetting" class="btn btn-lg text-light"  style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;"> Settings</router-link></div> 
      
      <!-- Canvas of the page -->
      
      <div class="col-9 bg-dark align-items-center"><br>
    
  
  </div>
      
    </div>
      

 
</template>
<script>
// import billIng from "@/components/billIng.vue";

export default {
  name: "#DashBoard",
  components: {
    // billIng,

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
