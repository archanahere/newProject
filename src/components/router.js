// import DashBoard from "@/components/DashBoard.vue";
// import joinUs from "@/components/joinUs.vue";
// import registerFp from "@/components/register-Fp.vue";
// import descriptionProject from "@/components/disPro.vue";
// import registerFinal from "@/components/register.vue";
// import LogIn from "@/components/logInPage.vue";
// import dbbillIng from "@/components/billIng.vue";
// import dbAccount from "@/components/account.vue";
// import dbSetting from "@/components/SettIng.vue";

// import dbProjects from "@/components/projects.vue";
import { createRouter, createWebHistory } from "vue-router";

// created router named routers

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "js",
      component:()=>import('@/components/joinUs.vue'),
      path: "/",
    },
    {
      name: "r1",
      component:()=>import('@/components/registerFp.vue'),
      path: "/r1",
    },
    {
      name: "r2",
      component:()=>import('@/components/register.vue') ,
      path: "/r1/:id/r2",
    },
    {
      name: "LogIn",
      component:()=>import('@/components/logInPage.vue') ,
      path: "/LogIn",
    },
    {
      name: "dp",
      component:()=>import('@/components/disPro.vue'),
      path: "/dp",
      children:[
        {
            name: "c3",
      component:()=>import('@/components/createProject3.vue'),
      path: "/dp/c3",
        },{
            name: "c2",
            component:()=>import('@/components/createProject3.vue'),
            path: "/dp/c2",
        }
        
      ]
    },
    {
      name: "eP",
      component:()=>import('@/components/editProfile.vue'),
      path: "/eP", 
    },
    {
      name: "nf",
      component:()=>import('@/components/notification.vue'),
      path: "/nf", 
    },

    {
      name: "DashBoard",
      component: () => import("@/components/DashBoard.vue"),
      path: "/LogIn/DashBoard",

      children: [
        {
          name: "d2",
          component: () => import("@/components/DashBoard2.vue"),
          path: "/DashBoard/d2",
        },
        {
          name: "db",
          path: "/LogIn/DashBoard/db",
          component:()=>import('@/components/billIng.vue'),
          children: [
            {
              name: "dh",
              path: "/LogIn/db/dh",
              component: () => import("@/components/bHistory.vue"),
            },
            {
              name: "dp",
              component: () =>import("@/components/projects.vue"),
              path:"/LogIn/DashBoard/dp"
            },
            {
              name: "da",
              path: "/LogIn/DashBoard/da",
              component:()=>import('@/components/account.vue'),
            },
            {
              name: "ds",
              component:()=>import('@/components/SettIng.vue'),
              path: "/LogIn/DashBoard/ds",
            },
            
            // {
            //   children: [               
                
            //         {
            //           name: "cp",
            //           component: () => ("@/components/crePro.vue"),
            //           path: "/dbProjects/cp",
            //           children: [
            //             {
            //               name: "sp",
            //               component: () => ("@/components/selectPlan.vue"),
            //               path: "/register/registerFinal/LogIn/DisPro/DashBoard/dbProjects/crePro/selectPlan"},
            //             //   children: [
            //             //     {
            //             { name: "MakePayment",
            //               component: () => ("@/components/MakePayment.vue"),
            //               path: "/register/registerFinal/LogIn/DisPro/DashBoard/dbProjects/crePro/selectPlan/MakePayment"}
            //             ]
            //               ,
            //             },
            //           ],
            //         },
                  ],
                },
              ],
            },
          ]
        }
        // linkActiveClass: "active-link",
      
);
export default router;
