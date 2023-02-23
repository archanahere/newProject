
import {ref,computed} from'vue'

export const collapsed = ref(false) 
export const toggleSlidebar = ()=>(collapsed.value=!collapsed.value)

export const sideBar_width=180
export const sideBar_width_colecpsed=38
export const sideBarwidth=computed(
    () => '${collapsed.value ? sideBar_width_colecpsed : sideBar_width}px'
)