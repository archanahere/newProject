<template>
  <div class="row">
    <div class="col-3">
      <sideBar />
    </div>
    <div class="col-9">
      <div class="justify-content-end d-flex" style="width: 70%">
        <nevBar class="" nameOfPage="Dashboard" />
      </div>

      <div class="card" style="width: 100vh; height: 100vh">
        <div class="card-body">
          <nav class="nav" aria-label="label">
            <ul class="pagination pagination-lg">
              <br />
              <li class="page-item justify-content-center" aria-current="page">
                <proInfo class="proinfo" style="width: 100vh; height: 100vh" />
                <br />
              </li>
              <li class="page-item">
                <div @next="showselectplan" v-if="show=true">
                  <router-view :is="selectPlan"/>
                </div>

                <div v-if="MakePayment">
                  <router-view />
                </div>
              </li>
              <li class="page-item">
                <router-view @selectedPlan="success = true"></router-view>
                <div v-if="selectedPlan">
                  <router-view :is="{name:'sp'}"/>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
  <!-- <select-plan @planSelected="selectedPlan"/> -->

  <!-- <li class="page-item"> <router-view :is='selectPlan' /></li>
    <li class="page-item"><router-view :is='MakePayment' /></li>
     -->
</template>
  
  <script>
import proInfo from "@/components/user/porjectInfo.vue";
import sideBar from "@/components/user/sideBar.vue";
import nevBar from "@/components/user/navbar.vue";
import selectPlan from "@/components/user/selectPlan.vue";
// import MakePayment from '@/components/user/payment.vue'
export default {
  name: "#crePro",
  data() {
    return {
      plan: null,
      show:false,
      // nameOfPage:Dashboard
    };
  },
  components: {
    selectPlan,
    nevBar,
    sideBar,
    // MakePayment,
    proInfo,
  },

  methods: {
    showselectplan(){
      this.show=true;
      return this.show;
    },
    makePayment() {
      this.$emit("");
    },
  },
};
</script>
  
  <style lang="scss" scoped>
.proinfo {
  width: 80%; // set the width of the child component
  max-width: 800px; // set the maximum width of the child component
  height: 80%; // set the height of the child component
  max-height: 500px; // set the maximum height of the child component
}
.nav {
  height: 7vh;
  width: 7vh;
}
</style>