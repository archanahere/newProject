    <template>
  <!-- the card id created i this data will be filled -->

  <div class="card container mt-3">
    <div class="SILVER">
      <div class="card-body">
        
        <!-- <select  class="card-title" v-model="selectedPlan">Selecte plan:</select> -->
        <!-- card container -->
        <div class="row container mx-auto">
          <div
            class=" card col-sm-8 my-md-2 col-xl-3 col-xxl-4 mx-xl-auto d-flex align-items-center"
            id="ho" style="width:100%"
          >
            <div class="card-body">
              <h5 class="card-title text-center text-bold text-primary">
                {{ plans.name[0] }}
              </h5>
              <div class="m-3">
                <h5 class="text-bold d-inline-block mb-0">$199</h5>
                <h6 class="text-muted d-inline-block mb-0">/{{ plans.days[0] }} Days</h6>
              </div>
              <ul class="list list">
                <li class="justify-content-center text-muted">
                  15 Days of work
                </li>
                <li class="justify-content-center text-muted">
                  Only for 1 wordpress Website
                </li>
                <li class="justify-content-center text-muted">
                  Note: this plan Suggested for Following Website Ex: Portfolio,
                  Business website, blog, static website etc
                </li>
              </ul>
              <button type="button"  @click="selectPlan(plans.id[0])" class="btn btn-primary btn-sm d-flex justify-content-center m-auto " style="width:100%">Selected </button>
            </div>
          </div>
        </div>
<div class="GOLD">

  <div class=" col-sm-6 col-sm-8 my-md-2 col-xl-3 col-xxl-4 mx-xl-auto card mx-2" id="ho">
    <div class="card-body">
      <h5 class="card-title text-center text-bold text-primary">
        {{ plans[1] }}
              </h5>
              <div class="m-3">
                <h5 class="text-bold d-inline-block mb-0">$399</h5>
                <h6 class="text-muted d-inline-block mb-0">/ Month</h6>
              </div>
              <ul class="list list">
                <li class="justify-content-center text-muted">
                  28 Days of work
                </li>
                <li class="justify-content-center text-muted">
                  Only for 1 wordpress Website
                </li>
                <li class="justify-content-center text-muted">
                  Note: this plan Suggested for Following Website Ex: Ecommerce
                  website, Customize website, sideBar
                </li>
              </ul>
              <button type="button"  @click="selectPlan(plans.id[1])" class="btn btn-primary btn-sm d-flex justify-content-center m-auto" style="width:100%">Selected</button>
              
            </div>
          </div>
        </div>
        <div class="PLATINUM" >
        <!-- <div v-if="selectPlan==PLATINUM" @showsuccess="emit(PLATINUM)" >
  </div> -->
  <div class="col-sm-8 my-md-2 mx-xl-auto col-xxl-4 col-xl-3 card mx-2" id="ho">
    <div class="card-body">
      <h5 class="card-title text-center text-bold text-primary">
        {{ plans[1] }}
      </h5>
      <div class="m-3">
        <h5 class="text-bold d-inline-block mb-0">$699</h5>
        <h6 class="text-muted d-inline-block mb-0">/ Month</h6>
      </div>
      <ul class="list list">
        <li class="justify-content-center text-muted">
          {{ plans.days[2] }} Days of work
        </li>
        <li class="justify-content-center text-muted">
          For Two wordpress Website
        </li>
        <li class="justify-content-center text-muted">
          Note: this plan Suggested for Following Website Ex: Portfolio,
          Business website, blog, static website etc
        </li>
      </ul>
      <button type="button"  @click="selectPlan(plans.id[1])" class="btn btn-primary btn-sm d-flex justify-content-center m-auto" style="width:100%">Selected </button>
    
    </div>
  </div>
</div>
        </div>
    </div>
  </div>
</template>
    <script>
// import { emit } from 'vue';

    // import router from '../router'
export default {
  name: "selectPlan",
  props:{
    Attr:{

    }
  },
  data() {
    
    return {
      // component_name: "Plan Selection",
      selectedPlan: null,
      plans:[{id:0,days:15,name:'SILVER'},
      {id:1,days:28,name:'GOLD'},
      {id:2,days:28,name:'PLATINUM'}],
      // showSuccess:Boolean,
    };
  }, methods: {
    selectPlan(plan) {
    this.selectedPlan=plan;
      this.$emit('selectedPlan',this.selectedPlan);  
},
    // showOnSuccess(){
    //   if(plan==true){
    //     emit("showplanselected",Attr(plan))
    //   }
    // }

}
}
</script>
    <style scoped>
.card {
  width: 100%;
}
.ho:hover{
    
    cursor:pointer !important;
    transform: none !important;
    -ms-transform: none !important;
    transition: none !important;
}

</style>