<template>
  
    <div class="row">  
    <!-- <div class="col"> -->
      <div class=" box col-sm-3 col-md-6 d-flex justify-content-center align-items-center" style="height:100vh">
      <figure class="">
        <img class="m-auto img-fluid" src="../../assets/image/logo_bg.png" style="width:20vh; height:22vh" />
      </figure>
    </div>
  <!-- </div> -->
    
  
      <div class="col-sm-9 col-md-6 ">

          <h4 class="text-left p-5">Join Us</h4>
          <h6 class="text-center mx-4 position-absolute ">Begin the Journey, to Get professional service</h6>
          <h6 class="position-absolute top-50 start-50">Get Started</h6>
          <div class="text-center mb-3 position-sticky-bottom">
            
            <router-link to="r1" class="btn ">Register</router-link>
          </div>
          <!-- <h6 class="">Already have an account</h6><h6 class="position-fixed bottom-0 start-50 translate-middle-x text-primary text-bold" :on-click="signIn">Sign In</h6> -->
          
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
<style lang="scss">
.box{

  background-color: var(--primary);
} 
 
  .btn{
  background-color: var(--primary);
 
  &:hover{
      background-color: var(--primary-alt);
      border-bottom-color: var(--primary);
      text-decoration-color: white;
  }
  
}

</style>





