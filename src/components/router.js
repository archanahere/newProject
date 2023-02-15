// import DashBoard from "@/components/DashBoard.vue";
import joinUs from "@/components/joinUs.vue";
// import registerFp from "@/components/register-Fp.vue";
import descriptionProject from "@/components/disPro.vue";
// import registerFinal from "@/components/register.vue";
import LogIn from "@/components/logInPage.vue";
import dbbillIng from "@/components/billIng.vue";
import dbAccount from "@/components/account.vue";
import dbSetting from "@/components/SettIng.vue";

import dbProjects from "@/components/projects.vue";
import { createRouter, createWebHistory } from "vue-router";

// created router named routers

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "JoinUs",
      component: joinUs,
      path: "/",
    },
    {
      name: "register",
      component:()=>import('@/components/registerFp.vue'),
      path: "/register",
    },
    {
      name: "registerFinal",
      component:()=>import('@/components/register.vue') ,
      path: "/register/registerFinal",
    },
    {
      name: "LogIn",
      component: LogIn,
      path: "/register/registerFinal/LogIn",
    },
    {
      name: "DisPro",
      component: descriptionProject,
      path: "/register/registerFinal/LogIn/DisPro",
    },

    {
      name: "DashBoard",
      component: () => import("@/components/DashBoard.vue"),
      path: "/register/registerFinal/LogIn/DisPro/DashBoard",

      children: [
        {
          name: "DashBoard2",
          component: () => import("@/components/DashBoard2.vue"),
          path: "/register/registerFinal/LogIn/DisPro/DashBoard/DashBoard2",
        },
        {
          name: "dbbillIng",
          path: "/register/registerFinal/LogIn/DisPro/DashBoard/dbbillIng",
          component: dbbillIng,
          children: [
            {
              name: "bHistory",
              path: "/register/registerFinal/LogIn/DisPro/DashBoard/dbbillIng/bHistory",
              component: () => import("@/components/bHistory.vue"),
            },
            {
              name: "dbProjects",
              component: () =>import("@/components/bHistory.vue"),
              path:"/register/registerFinal/LogIn/DisPro/DashBoard/dbProjects"
            },
            {
              name: "dbAccount",
              path: "/register/registerFinal/LogIn/DisPro/DashBoard/dbAccount",
              component: dbAccount,
            },
            {
              name: "dbSetting",
              component: dbSetting,
              path: "/register/registerFinal/LogIn/DisPro/DashBoard/dbSetting",
            },
            {
              name: "dbProjects",
              component: dbProjects,
              path: "/register/registerFinal/LogIn/DisPro/DashBoard/dbProjects",
              children: [
                
                
                    {
                      name: "crePro",
                      component: () => ("@/components/crePro.vue"),
                      path: "/register/registerFinal/LogIn/DisPro/DashBoard/dbProjects/crePro",
                      children: [
                        {
                          name: "selectPlan",
                          component: () => ("@/components/selectPlan.vue"),
                          path: "/register/registerFinal/LogIn/DisPro/DashBoard/dbProjects/crePro/selectPlan"},
                        //   children: [
                        //     {
                        { name: "MakePayment",
                          component: () => ("@/components/MakePayment.vue"),
                          path: "/register/registerFinal/LogIn/DisPro/DashBoard/dbProjects/crePro/selectPlan/MakePayment"}
                        ]
                          ,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ]
        }
        // linkActiveClass: "active-link",
      
);
export default router;
