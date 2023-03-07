<template>
  <!-- sideBar is a sidebar/Navbar -->
  <div class="row">
<div class="col-3">
  <sideBar />

</div>
<div class="col-9">
  
      <navBar Cus_name="Jhon Deo" nameOfPage="Billing History"/>

      <!-- <router-view class="sideBar"></router-view> -->
      <h6 class="mt-3 align-text-start"></h6>
      <div>
        
  
  <div class="row">
    <div class="col-12"></div>

    <bHistory />
  </div>
</div>
</div>

</div>
</template>
  <script>
// import sideBar from "./sideBar.vue";
import navBar from "@/components/user/navbar.vue";
import bHistory from "@/components/user/bHistory.vue"
import sideBar from '@/components/user/sideBar.vue'

export default {
  name: "#dbbillIng",
  components: {
    sideBar,
    navBar,
    bHistory
  },
  data() {
    return {
      cus_name: "Jhon Deo",
      nameOfpage: "Billing",
      // types:[
      //   {id:1,'name': "Billing History"},
      //   {id:2,'name' :"Saved Cards"}
      // ]
    };
  }
  
};
</script>
  <style scoped lang="scss">
  navBar{
    background-color: var(--light);
    
  }
</style>
  