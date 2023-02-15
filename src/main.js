import { createApp, VueElement } from "vue";
import App from "./App.vue";
import router from "./components/router"
createApp(App).use(router).mount("#app")
import Validate from 'validate'

import 'bootstrap/dist/css/bootstrap.min.css'

VueElement.use(Validate);

