<template>  
  <!-- <profileCustomer /> -->
  <!-- <HoMe /> -->
  <!-- <register-Fp /> -->
  <!-- <joinUs /> -->
  <!-- <router-view></router-view> -->
  <!-- <LogIn /> -->
  <!-- <dashBoard /> -->
    <sideBar />  
    <!-- <router-view></router-view> -->
  <!-- <dbAccount /> -->
  <!-- <createProject3 /> -->
  <!-- <registerFinal /> -->
  <!-- <router-view name=""></router-view> -->
  <!-- <dbProjects /> -->
  <!-- <MakePayment /> -->
  <!-- <dbbillIng /> -->
  <!-- <selectPlan /> -->
  <!-- <bHistory /> -->
  <!-- <router-view></router-view> -->
  <!-- <discPro /> -->
  <!-- <allPro /> -->
</template>

<script>
import { useRouter } from 'vue-router'
// import allPro from '@/components/allprojects.vue'
// import joinUs from "@/components/joinUs.vue"
// import MakePayment from './components/payment.vue';
// import selectPlan from './components/selectPlan.vue';
// import dbProjects from '@/components/projects.vue';
// import bHistory from '@/components/bHistory.vue'
  // import profileCustomer from "./components/profileCustomer.vue";
  // import HoMe from "./components/DashBoard.vue";
  // import dbAccount from "@/components/account.vue"
  import sideBar from "@/components/sideBar.vue"
  // import dbbillIng from "@/components/billIng.vue";
    // import discPro from "@/components/disPro.vue"
  // import dashBoard from "@/components/dashBoard.vue"
  // import LogIn from "@/components/logInPage.vue"
// import CreateProject3 from './components/createProject3.vue'
  // import registerFinal from '@/components/register.vue'
  // import registerFp from './components/register-Fp.vue';
  export default {
    name: '#newApp',
    setup() {
    const router = useRouter()

    return { router }
  },
    components: {
      // allPro
      // discPro
      // joinUs,
      // profileCustomer,
      // HoMe,
      // registerFp,
      // dashBoard,
      sideBar
      // dbbillIng
      // bHistory
      // dbProjects
      // MakePayment
      // selectPlan
      // dbAccount
      // LogIn,
        // CreateProject3
      // registerFinal
    }
  }
</script>
<style lang="scss">
root {
	--primary:rgb(40, 40, 242);
	--primary-alt: blue;
	--grey: #0b71ff;
	--dark: #1e293b;
	--dark-alt: #334155;
	--light: #aeadb6e4;
	--sidebar-width: 300px;
}
body {
	background: var(--light);
}

</style>