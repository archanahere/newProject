import { createApp} from "vue";
import App from "./App.vue";
import router from "./components/router"
createApp(App).use(router).mount("#app")
// import Validate from 'validate'

import 'bootstrap/dist/css/bootstrap.min.css'

import { SetupCalendar, Calendar, DatePicker } from 'v-calendar';

// Setup plugin for defaults or `$screens` (optional)
createApp(App).use(SetupCalendar, {})
// Use the components
createApp(App).component('Calendar', Calendar)
createApp(App).component('DatePicker', DatePicker)
