// import sideBar from "@/components/user/sideBar.vue";
// import joinUs from "@/components/user/joinUs.vue";
// import registerFp from "@/components/user/register-Fp.vue";
// import descriptionProject from "@/components/user/disPro.vue";
// import registerFinal from "@/components/user/register.vue";
// import LogIn from "@/components/user/logInPage.vue";
// import dbbillIng from "@/components/user/billIng.vue";
// import dbAccount from "@/components/user/account.vue";
// import dbSetting from "@/components/user/SettIng.vue";

// import dbProjects from "@/components/user/projects.vue";
import { createRouter, createWebHistory } from "vue-router";

// created router named routers

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "js",
      component: () => import("@/components/user/joinUs.vue"),
      path: "/",
    },
    {
      name: "r1",
      component: () => import("@/components/user/registerFp.vue"),
      path: "/r1",
    },
    {
      name: "r2",
      component: () => import("@/components/user/register.vue"),
      path: "/r1/r2",
    },
    {
      name: "LogIn",
      component: () => import("@/components/user/logInPage.vue"),
      path: "/LogIn",
    },
    {
      name: "dp",
      component: () => import("@/components/user/disPro.vue"),
      path: "/user-/dp",
      children: [
        {
          name: "c3",
          component: () => import("@/components/user/createProject3.vue"),
          path: "/user-dp/c3",
        },
        {
          name: "c2",
          component: () => import("@/components/user/createProject3.vue"),
          path: "/user-dp/c2",
        },
      ],
    },
    {
      name: "eP",
      component: () => import("@/components/user/editProfile.vue"),
      path: "/user-eP",
    },
    {
      name: "nf",
      component: () => import("@/components/user/notification.vue"),
      path: "/user-nf",
    },
    {
      name: "pass",
      component: () => import("@/components/user/passSec.vue"),
      path: "/user-pass",
    },
    {
      name: "dp",
      component: () => import("@/components/user/projects.vue"),
      path: "/user-dp",
    },

    {
      name: "sideBar",
      component: () => import("@/components/user/sideBar.vue"),
      path: "/user-sideBar",
    },
    {
      name: "d2",
      component: () => import("@/components/user/DashBoard.vue"),
      path: "/user-sideBar/d2",
    },
    {
      name: "da",
      path: "/user-da",
      component: () => import("@/components/user/account.vue"),
    },
    {
      name: "sp",
      component: () => import("@/components/user/selectPlan.vue"),
      path: "/user-crepro/sp",
    },
    {
      name: "ds",
      component: () => import("@/components/user/SettIng.vue"),
      path: "/user-ds",
    },
    {
      name: "crepro",
      component: () => import("@/components/user/crePro.vue"),
      path: "/user-crepro",
    },
    {
      name: "db",
      path: "/user-db",
      component: () => import("@/components/user/billIng.vue"),
    },

    {
      name: "dh",
      path: "/user-LogIn/db/dh",
      component: () => import("@/components/user/bHistory.vue"),
    },
    {
      name: "mp",
      component: () => "@/components/user/MakePayment.vue",
      path: "/user-crePro/sp/mp",
    },
    {
      name: "sb",
      path: "/logIn/sb",
      component: () => "@/components/Developer/DslideBar.vue",
    },
    {
      name: "Da",
      path: "/logIn/Da",
      component: () => "@/components/Developer/Dchat.vue",
    },
    {
      name: "Dev",
      path: "/logIn/Dev",
      component: () => "@/components/Developer/Dev.vue",
    },
    {
      name: "Dp",
      path: "/logIn/Dp",
      component: () => "@/components/Developer/Dproject.vue",
    },
    {
      name: "Du",
      path: "/logIn/Du",
      component: () => "@/components/Developer/Duser.vue",
    },
    {
      name: "DS",
      path: "/logIn/DS",
      component: () => "@/components/Developer/Setting.vue",
    },
  
  ],
  linkActiveClass: "active-link",
});
export default router;
