<template>
  <div>
    <Calendar  is-expanded class="table" :attributes="attributes" @dayclick="onDayClick" />
    <pickerDate />
  </div>
</template>
<script>
import { Calendar } from 'v-calendar';
import pickerDate from '@/components/user/pickerDate.vue'
// import PopoverRow from "@/components/user/popoverRow.vue"
export default {
  name: 'MyCalendar',
  components: {
    Calendar,
    pickerDate
  },
  data() {
    return {
      date: new Date(),
    };
  },
}
</script>