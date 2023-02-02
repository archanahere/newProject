<template>
   <div class="d-flex">
    <div class="container container-sm-h-25 bg-primary w-50 d-flex d-sm align-items-center" style="height: 100vh;">
      <img class="align-center" src="./src/assets/logo.jpeg" />
    </div>
    <div class="w-50 d-flex align-items-center">
      <div class="container container-sm-lg-md">
    <h4 class="text-left m-4 p-3">Join Us</h4>
    <p class="text-center mx-4">Begin the Journey, to Get professional service</p>
    <p class="text-center">Get Started</p>
    <div class="text-center">
      <router-link to="register" class="btn btn-primary">Register</router-link>
    </div>
    </div>
    <h2>already have an account</h2>
    <h4>Sign In</h4>
  </div>
  </div>
  <!-- <div class="container p-5">
    
  <section class=" lg">
    <div class="container-sm-md-lg-xl ">
    <div class="d-lg-flex h-100">
      <img class="h-100 bg-primary w-50"  src="src\assets\logo.jpeg" />
       
        </div>
  </div>
  </div>
  </section>
  </div> -->
</template>
<script>

export default {
  name: "#joinUs"
};
</script>
<style>
  .d-flex {
    display: flex;
  }

  .align-items-center {
    align-items: center;
  }
</style>





