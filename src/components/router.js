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
      path: "/dp",
      children: [
        {
          name: "c3",
          component: () => import("@/components/user/createProject3.vue"),
          path: "/dp/c3",
        },
        {
          name: "c2",
          component: () => import("@/components/user/createProject3.vue"),
          path: "/dp/c2",
        },
      ],
    },
    {
      name: "eP",
      component: () => import("@/components/user/editProfile.vue"),
      path: "/eP",
    },
    {
      name: "nf",
      component: () => import("@/components/user/notification.vue"),
      path: "/nf",
    },
    {
      name: "pass",
      component: () => import("@/components/user/passSec.vue"),
      path: "/pass",
    },
    {
      name: "dp",
      component: () => import("@/components/user/projects.vue"),
      path: "/dp",
    },

    {
      name: "sideBar",
      component: () => import("@/components/user/sideBar.vue"),
      path: "/sideBar",
    },
    {
      name: "d2",
      component: () => import("@/components/user/DashBoard.vue"),
      path: "/sideBar/d2",
    },
    {
      name: "da",
      path: "/da",
      component: () => import("@/components/user/account.vue"),
    },
    {
      name: "sp",
      component: () => import("@/components/user/selectPlan.vue"),
      path: "/crepro/sp",
    },
    {
      name: "ds",
      component: () => import("@/components/user/SettIng.vue"),
      path: "/ds",
    },
    {
      name: "crepro",
      component: () => import("@/components/user/crePro.vue"),
      path: "/crepro",
    },
    {
      name: "db",
      path: "/db",
      component: () => import("@/components/user/billIng.vue")},
      
      
        {
          name: "dh",
          path: "/LogIn/db/dh",
          component: () => import("@/components/user/bHistory.vue"),
        },
        { name: "mp",
                      component: () => ("@/components/user/MakePayment.vue"),
                      path: "/crePro/sp/mp"},
      ],
  linkActiveClass: "active-link",
});
const adminRoutes = [
  {
    name:'sb',
    path:'/logIn/sb',
    component:()=>("@/components/Developer/sideBar.vue")
  },
  {
    name:'Aacc',
    path:'/logIn/Aacc',
    component:()=>("@/components/Developer/Achat.vue")
  },
  {
    name:'ADev',
    path:'/logIn/ADev',
    component:()=>("@/components/Developer/ADev.vue")
  },
  {
    name:'Apro',
    path:'/logIn/Apro',
    component:()=>("@/components/Developer/Aproject.vue")
  },{
    name:'Auser',
    path:'/logIn/Auser',
    component:()=>("@/components/Developer/Auser.vue")
  },{
    name:'ASet',
    path:'/logIn/ASet',
    component:()=>("@/components/Developer/Setting.vue")
  },
  // {
  //   name:'Auser',
  //   path:'/logIn/Auser',
  //   component:()=>("@/components/Developer/Auser.vue")
  // }
];

router.addRoutes(adminRoutes);

export default router;
