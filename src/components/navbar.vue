<template>
    <div class="row bg-ligh">
            <div class="component">

                <h5 class="mt-2">{{ nameOfPage }}</h5>
            </div>
          <div class="d-flex justify-content-end ml-auto"> 
            
              <figure>

              <div class="nav-item">
                      <img class="mt-2 mx-3" src="../assets/image/msg_icon.png" style="width:3vh; height:3vh;"/>
                    </div>
                </figure>
                  
                <figure>
          <div class="nav-item">
            <img class="mt-2 mx-3" src="../assets/image/notifcation_icon.png" style="width:3vh; height:3vh;"/>
          </div>
        </figure>

        
          <div class="nav-item">
            <a class="mt-2 nav-link" href="#"> </a>
          </div>
        

    <div>
          
            <h6 class="mt-2 mx-2 nav-link ">{{ Cus_name }}</h6>
          
        </div>
        </div>
    </div>  
            
</template>
<script>

export default {
    name:'navBar',
    props:{
        nameOfPage: {
      type: String,
      required: true
    },
    Cus_name:{
        type: String,
      required: true
    }
    }
}
</script>
