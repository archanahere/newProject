import HoMe from "../components/Home.vue";

import { createRouter , createWebHistory } from "vue-router";


// created router named routers
    
const router = createRouter({
    history: createWebHistory(),
    routes:[{
        name: 'HomePage',
        component : HoMe,
        path : '/',
        },
        
    ],
});
export default router;



