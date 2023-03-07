<template>
  
    <div class="row" style="height:100vh">  
    <!-- <div class="col"> -->
              
      <div class="box col-3 col-md-6 " >
      <figure class="justify-content-center d-flex align-items-center">
        <img class="img-fluid mx-auto " alt="logo" src="../../assets/image/logo_bg.png" style="width:20vh; height:22vh" />
      </figure>
    </div>
  
      <div class="col2 col-md-6 col-9">
          <h4 class="text-left p-5">Join Us</h4>
          <h6 class="text-center mx-4 ">Begin the Journey, to Get professional service</h6>
          <h6 class="position-absolute top-50 start-50">Get Started</h6>
          <div class="text-center mb-3 position-sticky-bottom">
            
            <router-link to="r1" class="btn text-light">Register</router-link>
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
  height: 100vh;
  background-color: var(--primary);
} 
.col2{
  height:100px;
}
// @media (max-width: 768px) { // styles for smaller screens
//     .box {
//       height: 25%; // 25% height on small screens
//     }
//     .col2{
//         height:75%;
//     }
    
//   @media screen and (max-width: 20vh) { // medium breakpoint
//    img {
//     height: 10vh;
//     width:12vh; // new height for md screens
//   }
// }
// }
@media (min-width: 1400px) { // styles for smaller screens
    .box {
      height: 25%; // 25% height on small screens
    }
    .col2{
        height:75%;
    }
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





