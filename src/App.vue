<template>  
  <!-- <profileCustomer /> -->
  <!-- <HoMe /> -->
  <!-- <register-Fp /> -->
  <!-- <joinUs /> -->
  <router-view></router-view>
  <!-- <LogIn /> -->
  <!-- <DashBoard2 /> -->
  <!-- <DashBoard /> -->
  <!-- <dbAccount /> -->
  <!-- <createProject3 /> -->
  <!-- <registerFinal /> -->
  <!-- <router-view name=""></router-view> -->
  <!-- <dbProjects /> -->
  <!-- <MakePayment /> -->
  <!-- <dbbillIng /> -->
  <!-- <selectPlan /> -->
  <!-- <bHistory /> -->
</template>

<script>
import { useRouter } from 'vue-router'
// import joinUs from "@/components/joinUs.vue"
// import MakePayment from './components/payment.vue';
// import selectPlan from './components/selectPlan.vue';
// import dbProjects from '@/components/projects.vue';
// import bHistory from '@/components/bHistory.vue'
  // import profileCustomer from "./components/profileCustomer.vue";
  // import HoMe from "./components/Home.vue";
  // import dbAccount from "@/components/account.vue"
  // import DashBoard from "@/components/DashBoard.vue"
  // import dbbillIng from "@/components/billIng.vue";
  
  // import DashBoard2 from "@/components/DashBoard2.vue"
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
      // joinUs,
      // profileCustomer,
      // HoMe,
      // registerFp,
      // DashBoard2,
      // DashBoard
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
