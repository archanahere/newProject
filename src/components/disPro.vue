<template>
<div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <component :is="'createProject3'"></component>
    </div>
    <div class="carousel-item">
      <component :is="'createProject2'"></component>
    </div>
    <!-- <div class="carousel-item"> -->
      
    <!-- </div> -->
  </div>
  <btn class="carousel-control-prev" to="" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </btn>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>
<script>
import createProject3 from '@/components/createProject3.vue';
import createProject2 from '@/components/createProject2.vue';
export default {
  components:{
    createProject3,
    createProject2
  },
    name:'#discPro', 
        data(){
            return {
                curr:Number,
                pre:Number,
                next:Number
            }
        },
        methods:{

        }
    
}
</script>
<style scoped>
.robot{
    align-items: center;
}
</style>
