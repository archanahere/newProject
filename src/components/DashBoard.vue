<template>

  <div class="row">
    <div class="container">
  <nav class="navbar navbar-expand-lg ">
    <div class="container-fluid">
      <figure>
        <img src="../assets/image/logo.png" style="width:10vh; height:10vh;"/>
      </figure>

      <span class="navbar">
        <img class="my-3 d-flex" src="../assets/image/msg_icon.png" style="width:3vh; height:3vh;"/>
      </span>

      <span class="navbar">
        <img src="../assets/image/notifcation_icon.png" style="width:3vh; height:3vh;"/>
      </span>

      <span class="navbar-text">
        <h7 class="position-absolute top-50 start-50 end-0"> Name of Customer</h7>  
      </span>  
      
      
    </div>
  </nav>
</div>
    
    <div class="col-3 bg-primary" style="height:100vh;"><br>Dashboard</div>
    <div class="col-9 --bs-secondary-bg"><br>canvas</div>
  </div>

 
</template>
<script>
// import profileCustomer from "@/components/profileCustomer.vue";

export default {
  name: "#DashBoard",
  components: {
    // profileCustomer,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.navbar{
    position: relative;
}
</style>

{

}