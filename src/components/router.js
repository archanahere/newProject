
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
      component: () =>import( "@/components/user/payment.vue"),
      path: "/user-crePro/sp/mp",
    },
    {
      name: "sb",
      path: "/dev-logIn/sb",
      component: () =>import( "@/components/Developer/DsideBar.vue")
    },
    {
      name: "Dc",
      path: "/dev-logIn/Dc",
      component: () => import("@/components/Developer/Dchat.vue")
    },
    {
      name: "DevDb",
      path: "/dev-logIn/DevDb",
      component: () =>import( "@/components/Developer/Dev.vue")
    },
    {
      name: "Dt",
      component: () => import("@/components/Developer/Dtask.vue"),
      path: "/dev-Dt",
    },
    {
      name: "Dp",
      path: "/dev-logIn/Dp",
      component: () =>import( "@/components/Developer/Dproject.vue")},
      // ,
      // children:[
        {
          name: "allp",
          path: "/allp",
          component: () =>import( "@/components/Developer/pro_all.vue"),
          
        },
        {
          name: "comp",
          path: "/comp",
          component: () =>import( "@/components/Developer/pro_compeleted.vue"),
        },
        {
          name: "actp",
          path: "/actp",
          component: () =>import( "@/components/Developer/pro_active.vue"),
        },
      // ]
    
    {
      name: "Da",
      path: "/dev-logIn/Da",
      component: () =>import( "@/components/Developer/Daccount.vue")
    },
    {
      name: "Du",
      path: "/dev-logIn/Du",
      component: () =>import( "@/components/Developer/Duser.vue")
    },
    {
      name: "DeveditPro",
      path: "/dev-DeveditPro",
      component: () =>import( "@/components/Developer/DevEditpro.vue")
    },
    {
      name: "Dpass",
      path: "/dev-logIn/Dpass",
      component: () =>import( "@/components/Developer/DPass.vue")
    },{
      name: "Dset",
      path: "/dev-logIn/Dset",
      component: () =>import( "@/components/Developer/Dsetting.vue")
    },
    // admin routes starts from here...
    {
      name: "Anb",
      path: "/Admin-Anb",
      component: () =>import( "@/components/Admin/AsideBar.vue")
    },
    {
      name: "Aacc",
      path: "/Admin-Acc",
      component: () =>import( "@/components/Admin/Aaccount.vue")
    },
    {
      name: "Ac",
      path: "/Admin-Ac",
      component: () =>import( "@/components/Admin/Achat.vue")
    },
    {
      name: "Adb",
      path: "/Admin-Adb",
      component: () =>import( "@/components/Admin/Adb.vue")
    },
    {
      name: "Apro",
      path: "/Admin-Apro",
      component: () =>import( "@/components/Admin/Aprojects.vue")
    },
    {
      name: "As",
      path: "/Admin-As",
      component: () =>import( "@/components/Admin/Asett.vue")
    },
    {
      name: "Au",
      path: "/Admin-Au",
      component: () =>import( "@/components/Admin/Auser.vue")
    },
    {
      name: "Af",
      path: "/Admin-Af",
      component: () =>import( "@/components/Admin/AdminFeed.vue")
    },
    {
      name: "ADev",
      path: "/Admin-ADev",
      component: () =>import( "@/components/Admin/ADeve.vue")
    },
    

  ],
  linkActiveClass: "active-link",
});
export default router;
