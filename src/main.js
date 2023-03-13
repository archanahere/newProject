import { createApp} from "vue";
import App from "./App.vue";
import router from "./components/router"
createApp(App).use(router).mount("#app")
// import 'v-calendar/dist/style.css';
// import Validate from 'validate'
import './main.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// import VCalendar from 'v-calendar';
// const app = createApp(App)
// app.use(VCalendar,{})
// import { SetupCalendar, Calendar, DatePicker } from 'v-calendar';

// Setup plugin for defaults or `$screens` (optional)
// createApp(App).use(SetupCalendar, {})
// Use the components
// createApp(App).component('Calendar', Calendar)
// createApp(App).component('DatePicker', DatePicker)
