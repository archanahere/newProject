<template>  
  <!-- <profileCustomer /> -->
  <!-- <HoMe /> -->
  <!-- <register-Fp /> -->
  <!-- <joinUs /> -->
  <!-- <router-view></router-view> -->
  <!-- <LogIn /> -->
  <!-- <dashBoard /> -->
  <!-- <router-view></router-view> -->
  <!-- <DevTask /> -->
  <!-- <DsideBar /> -->
  <!-- <MyCalendar /> -->
    <!-- <sideBar />   -->
    <!-- <addTask/> -->
    <!-- <adminNb /> -->
    <!-- <porjectProcess /> -->
    <router-view></router-view>
  <!-- <dbAccount /> -->
  <!-- <createProject3 /> -->
  <!-- <registerFinal /> -->
  <!-- <router-view name=""></router-view> -->
  <!-- <dbProjects /> -->
  <!-- <MakePayment /> -->
  <!-- <dbbillIng /> -->
  <!-- <navBar/> -->
  <!-- <selectPlan /> -->
  <!-- <bHistory /> -->
  <!-- <router-view></router-view> -->
  <!-- <discPro /> -->
  <!-- <allPro /> -->
</template>

<script>
import { useRouter } from 'vue-router'
// import adminNb from '@/components/Admin/AnavBar.vue'
// import navBar from '@/components/user/navbar.vue'
// import addTask from '@/components/Developer/addTask.vue'
// import DsideBar from '@/components/Developer/DsideBar.vue'
// import DevTask from '@/components/Developer/Dtask.vue'
// import allPro from '@/components/user/allprojects.vue'
// import joinUs from "@/components/user/joinUs.vue"
// import MakePayment from './components/payment.vue';
// import selectPlan from './components/selectPlan.vue';
// import dbProjects from '@/components/user/projects.vue';
// import bHistory from '@/components/user/bHistory.vue'
  // import profileCustomer from "./components/profileCustomer.vue";
  // import HoMe from "./components/DashBoard.vue";
  // import dbAccount from "@/components/user/account.vue"
  // import sideBar from "@/components/user/sideBar.vue"
  // import MyCalendar from '@/components/user/calender.vue'
  // import dbbillIng from "@/components/user/billIng.vue";
    // import discPro from "@/components/user/disPro.vue"
  // import dashBoard from "@/components/user/dashBoard.vue"
  // import LogIn from "@/components/user/logInPage.vue"
// import CreateProject3 from './components/createProject3.vue'
  // import registerFinal from '@/components/user/register.vue'
  // import registerFp from './components/register-Fp.vue';
  // import porjectProcess from '@/components/Admin/pro_Process.vue'
  export default {
    name: '#newApp',
    setup() {
    const router = useRouter()

    return { router }
  },
    components: {
      // porjectProcess
      // adminNb
      // naxvBar
      // addTask
      // DsideBar
      // DevTask
      // allPro
      // discPro
      // joinUs,
      // profileCustomer,
      // HoMe,
      // registerFp,
      // dashBoard,
      // sideBar
      // MyCalendar
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
<style >

  

</style>