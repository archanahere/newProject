<template>

  <div class="d-flex" content="width=device-width">
    <div class="container container-sm-h-25 bg-primary align-item-center d-flex d-sm " style="height: 100vh;">
     <!-- //logo setting in center is remaining -->
      <figure class="logo_image w-1 h-1"> <img class="" src="../assets/image/logo.png" />
      </figure>
      
    <div class="container d-flex text-light align-items-center">
            <ul class="text-align-center text-capitalize">
          <li>cerate your Project with your Requirement</li>
          <li>select the plan for Project</li>
          <li>After Creating Project Pitch to the feed...</li>
        </ul>
        </div>
    </div>
    <!-- this image and txet is also remaining -->
    <div class="col-6 w-50 d-felx bg-white h-100" id="robot" style=" height: 100vh;">
      <p classs="container d-flex text-light justify-content-center">How it Works?</p>
        <figure class="align-items-center top-50 start-50 justify-content-center"><img src="../assets/image/c1.png" style="width: 30vh; height: 40vh;" />
        </figure>
      
    </div>
    <next_button>
        <img src=""/>
      </next_button>
  </div>

</template>
<script>

export default {
    name:'#createProject', 
        data(){
            return {
                // image : 'images\c1.png'
            }
        }
    
}
</script>
<style scoped>
.robot{
    align-items: center;
}
</style>
