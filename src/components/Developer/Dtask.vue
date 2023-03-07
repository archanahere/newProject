<template>
  <div class="wrap">
    <!-- <div class="left">
      <DayPilotNavigator class="navigator_default_main" id="nav" :config="navigatorConfig" :watch="eventAdded" />
    </div> -->
    <div class="content">
      <div>

      
        </div>
      <DayPilotCalendar id="dp" :config="config" ref="calendar" />
    </div>
  
  </div>
</template>

<script>
import {DayPilot, DayPilotCalendar} from '@daypilot/daypilot-lite-vue'
// DayPilotNavigator

export default {
  name: 'MyCalendar',
  components:{
// addTask,
DayPilotCalendar,
    // DayPilotNavigator
  },methods:{
    eventAdded(){
      return{
        
      }
      
    },
    loadEvents() {
      // placeholder for an HTTP call

      const events = [
        
          
      ];
      this.calendar.update({events});
    },
  }, 
  
  data: function() {
    return {
      events: [],
      navigatorConfig: {
        // showDays:15,
        // showMonths: 1,
        // stdate:'',
        // eddate:'',
        selectMode: "week",

        selectionDay: "2022-02-28",
        onTimeRangeSelected: args => {
          this.config.startDate = args.day;
        }
      },
      
      config: {
        viewType: "Week",
  timeHeaders: [
    { groupBy: "Day", format: "dddd" },
    { groupBy: "Hour" }
  ],
      
        // viewType: "week",
        // startDate: "2022-02-28",
        durationBarVisible: false,
        eventResizingStartEndEnabled : false,
        timeRangeSelectedHandling: "",
        onTimeRangeSelected: async (args) => {
          const modal = await DayPilot.Modal.prompt("Create a new event:", "Event 1");
          const dp = args.control;
          dp.clearSelection();
          if (modal.canceled) {
            return;
          }
          dp.events.add({
            start: args.start,
            end: args.end,
            id: DayPilot.guid(),
            text: modal.result
          });
        },
        eventDeleteHandling: "Disabled",
        onEventMoved: () => {
          console.log("Event moved");
          console.log(this.startDate);
        },
        onEventResized: () => {
          console.log("Event resized");
        },
      },
    }
  },
  computed: {
    // DayPilot.Calendar object - https://api.daypilot.org/daypilot-calendar-class/
    calendar() {
      return this.$refs.calendar.control;
    }
  },
  mounted() {
    this.loadEvents();
  }
}
</script>

<style>
.wrap {
  display: flex;
}

/* .left {
  margin-right: 10px;
} */

.content {
  flex-grow: 1;
}


.calendar_default_event_inner {
  background: var(--primary);
  color: var(--primary-alt);
  border-radius: 5px;
  opacity: 0.9;
}
.navigator_default_main{
background-color: var(--primary);
}
</style>
