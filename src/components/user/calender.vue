<template>
  <div>
   <Calendar :view="'week'" @eventAdd="handleEventAdd" :plugins="calendarPlugins" :events="events"   />
   <!-- <div v-if="" class="model"> -->

   </div>
    <!-- <DatePicker /> -->

  <!-- </div> -->
</template>
<script>
import { Calendar } from 'v-calendar';
import { ref } from 'vue';
// import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

// import DatePicker from '@/components/user/pickerDate.vue'

// import PopoverRow from "@/components/user/popoverRow.vue"
export default {
  name: 'MyCalendar',
  components: {
    Calendar,
    // FullCalendar

// DatePicker
     },
  data() {
    return {
      calendarPlugins: [dayGridPlugin, interactionPlugin],
      setup() {
    const events = ref([
      {
        id: '1',
        title: 'Event 1',
        start: '2023-02-07',
        end: '2023-02-08',
        allDay: true
      },
      {
        id: '2',
        title: 'Event 2',
        start: '2023-02-09T12:00:00',
        end: '2023-02-09T14:00:00'
      }
    ]);

    const calendarPlugins = [ dayGridPlugin ];

    const handleEventAdd = ({ event }) => {
      console.log(event); // echo the event object
      events.value.push(event); // add the event to the events array
    };

    return {
      events,
      calendarPlugins,
      handleEventAdd
    };
  }
};
  }
}
</script>
