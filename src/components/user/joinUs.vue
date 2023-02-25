<template>
  <div class="container-lg">
    <div class="row">  
    <!-- <div class="col"> -->
      <div class=" col-12 col-sm-12 col-md-6 col-xxl-9 col-lg-6 bg-primary align-items-center " style="height:100vh;">
      <figure class="d-none justify-content-center d-md-block ">
        <img class="d-flex mx-auto align-item-center" src="../../assets/image/logo.png" style="height:20vh; width:30vh"/>
      </figure>
    </div>
  <!-- </div> -->
    
  <div class="container-lg text-capitalize">
      <div class=" col-12 col-sm-12 col-lg-6 col-md- justify-content-center align-items-center h-100 position-relative ">

          <h4 class="text-left p-5">Join Us</h4>
          <h6 class="text-center mx-4 position-absolute top-50 start-50">Begin the Journey, to Get professional service</h6>
          <h6 class="position-absolute top-50 start-50">Get Started</h6>
          <div class="text-center mb-3 position-sticky-bottom">
            
            <router-link to="r1" class="btn btn-primary">Register</router-link>
          </div>
          <!-- <h6 class="">Already have an account</h6><h6 class="position-fixed bottom-0 start-50 translate-middle-x text-primary text-bold" :on-click="signIn">Sign In</h6> -->
          
          </div>
        </div>
      </div>
        </div>
</template>
<script>


export default {
  name: "#joinUs",
  methods:{
    // register() {
    //   $router.push({ name: "register" })
    // }
  }
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





