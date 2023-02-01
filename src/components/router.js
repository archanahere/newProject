import HoMe from "../components/Home.vue";
import ragister from '@/components/ragister.vue'
import { createRouter , createWebHistory } from "vue-router";


// created router named routers
    
const router = createRouter({
    history: createWebHistory(),
    routes:[{
        name: 'HomePage',
        component : HoMe,
        path : '/',
        },
        {
            name :'ragister',
            component : ragister,
            path :'/ragister-here/ragister'
        },
        {
            name :'ragister-fp',
            component : ragister-Fp,
            path :'/ragister-here'
        }
        
    ],
});
export default router;



