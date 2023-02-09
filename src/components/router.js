import DashBoard from "@/components/DashBoard.vue";
import joinUs from "@/components/joinUs.vue";
import ragisterFp from '@/components/ragister-Fp.vue'
import createProject from '@/components/createProject.vue'
import ragisterFinal from '@/components/ragister.vue'
import LogIn from "@/components/logInPage.vue"
import dbbillIng from "@/components/billIng.vue"
import dbAccount from "@/components/account.vue"
import dbSetting from "@/components/SettIng.vue"
import dbProjects from "@/components/projects.vue"
import { createRouter , createWebHistory } from "vue-router";


// created router named routers
    
const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            name :'JoinUs',
            component : joinUs,
            path :'/'
        },
        {
            name :'ragister',
            component : ragisterFinal,
            path :'/ragister-here/ragisterFinal'
        },
        {
            name :'ragisterfp',
            component : ragisterFp,
            path :'/ragister-here'
        },
        {
            name :'LogIn',
            component : LogIn,
            path :'/ragister-here/ragisterFinal/LogIn'
        },
        {
            name :'createProject',
            component : createProject,
            path :'/ragister-here/ragisterFinal/LogIn/createProject'   
        },
        
        {
            name :'DashBoard',
            component : DashBoard,
              path :'/ragister-here/ragisterFinal/LogIn/createProject/DashBoard'   
        },
        {
            name :'dbbillIng',
            component : dbbillIng,
            path :'/ragister-here/ragisterFinal/LogIn/createProject/DashBoard/dbbillIng'   
        },
        {
            name :'dbAccount',
            component : dbAccount ,
            path :'/ragister-here/ragisterFinal/LogIn/createProject/DashBoard/dbAccount'   
        },
        {
            name :'dbSetting',
            component : dbSetting ,
            path :'/ragister-here/ragisterFinal/LogIn/createProject/DashBoard/dbSetting'   
        },
        {
            name :'dbProjects',
            component : dbProjects ,
            path :'/ragister-here/ragisterFinal/LogIn/createProject/DashBoard/dbProjects'   
        }
    ],
});
export default router;



