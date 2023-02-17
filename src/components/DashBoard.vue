<template>

<div class="DashBoard">
  <div class="row">
  <div class="col-12 d-none d-sm-block bg-primary">
    <figure>
        <img src="../assets/image/logo.png" class="img-fluid d-block mx-auto bg-primary" style="width:10vh; height:10vh;"/>
      </figure>
      <div class="row">
        <div id="nevbar-toggle-collepse " class="col-12 bg-primary text-light " style="height:100vh;" ><br>
          <router-link :to="{ name:'d2' }" @click="goToDashboard2" class="btn btn-lg align-text-left" ><img src="../assets/image/Dashboard_icon.png" style="m-1" alt="DashBoard"/>DashBoard </router-link><br>
          <router-link :to="{ name:'dp' }" @click="goToProjects" class="btn btn-lg " > <img src="../assets/image/proejct_icon.png" style="mx-2" alt="Project"/>Project</router-link><br>
      <router-link :to="{name:'db'}" @click="goToBilling" class="btn btn-lg" > <img src="../assets/image/billing_icon.png" style="mx-2" alt="Billing"/> Billing</router-link><br>
      <router-link :to="{name:'da'}" @click="goToAccount" class="btn btn-lg "  > <img src="../assets/image/account_icon.png" style="mx-2" alt="Account"/> Account</router-link><br> 
      <router-link :to="{name:'ds'}" @click="goToSetting" class="btn btn-lg " > <img src="../assets/image/Setting_icon.png" style="mx-2" alt="Settings"/>  Settings</router-link></div> 
      
      <!-- <div class="col-"></div> -->
    </div>
  </div>
  
  <!-- Canvas of the page -->
  
</div>

    </div>
      

 
</template>
<script>

// import DashBoard2 from "@/components/DashBoard2.vue";

export default {
  name: "#DashBoard",
  components: {
    // DashBoard2

  },
  data() {
    return {
      name:'A',
      component_name:'Dashboard',
    };
  },
  computed: {
    sidebarClasses() {
      if (this.showSidebar) {
        return 'showSidebar';
      } else {
        return '';
      }
    },
  },
  methods:{
    showSidebar(){
      
      this.isSidebarVisible = !this.isSidebarVisible;
    },
    
    goToDashboard2() {
      this.$router.push({ name: 'd2' });
    },
    goToProjects() {
      this.$router.push({ name: 'dp' });
    },
    goToBilling() {
      this.$router.push({ name: 'db' });
    },
    goToAccount() {
      this.$router.push({ name: 'da' });
    },
    goToSetting() {
      this.$router.push({ name: 'ds' });
    }
  
    
  }
};
</script>
<style scoped>
.sidebar{
  text-decoration-color: #ffffff;
}
  .active-link{
  background: #ffffff;
  text-decoration-color: blue;
}
.sidebar {
  display: none;
}

.show-sidebar {
  display: block;
}
</style>
