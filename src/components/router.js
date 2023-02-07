import DashBoard from "../components/DashBoard.vue";
import ragister from '@/components/ragister.vue'
import createProject from '@/components/createProject.Vue'
import { createRouter , createWebHistory } from "vue-router";


// created router named routers
    
const router = createRouter({
    history: createWebHistory(),
    routes:[{
        name: 'Dashboard',
        component : DashBoard,
        path : '/ragister-here/ragister/Dashboard',
        },
        {
            name :'ragister',
            component : ragisterFinal,
            path :'/ragister-here/ragisterFinal'
        },
        {
            name :'ragister-fp',
            component : ragister-Fp,
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
        }
        
    ],
});
export default router;



