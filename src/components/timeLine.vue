<template>
  <div class="content"></div>
  <div class="row wrap">
    <DayPilotCalendar
      id="dp"
      :config="config"
      @timeRangeSelected="addEvent"
      ref="calendar"
    />
  </div>
</template>

<script>
import { DayPilot, DayPilotCalendar } from "@daypilot/daypilot-lite-vue"; // DayPilotNavigator
// import { DayPilot } from "@daypilot/daypilot-lite-vue";
export default {
  name: "timeLine",
  components: {
    DayPilotCalendar,
  },
  props: {
    addTask: {
      type: Boolean,
      default: false,
    },
  },

  // DayPilotNavigator
  methods: {
    eventAdded() {
      return {};
    },
  },

  data: function () {
    return {
      events: [
        {
          start: new Date(2023, 1, 7, 9),
          end: new Date(2023, 1, 7, 11),
          id: DayPilot.guid(),
          text: "Event 1",
          backColor: "#388E3C",
        },
        {
          start: new Date(2023, 1, 8, 13),
          end: new Date(2023, 1, 8, 15),
          id: DayPilot.guid(),
          text: "Event 2",
          backColor: "#FFC107",
        },
        {
          start: new Date(2023, 1, 9, 10),
          end: new Date(2023, 1, 9, 12),
          id: DayPilot.guid(),
          text: "Event 3",
          backColor: "#E91E63",
        },
      ],
      navigatorConfig: {
        selectMode: "week",

        // selectionDay: "2022-02-28",
        onTimeRangeSelected: (args) => {
          this.config.startDate = args.day;
        },
      },

      config: {
        viewType: "Week",
        timeHeaders: [{ groupBy: "Day", format: "dddd" }, { groupBy: "Hour" }],
        // headerDateFormat: 'H',
        startDate: this.startDate,
        durationBarVisible: false,
        eventResizingStartEndEnabled: false,
        timeRangeSelectedHandling: "",
        onTimeRangeSelected: async (args) => {
          const modal = await DayPilot.Modal.prompt(
            "Create a new event:",
            "Event 1"
          );
          const dp = args.control;
          dp.clearSelection();
          if (modal.canceled) {
            return;
          }
          dp.events.add({
            start: args.start,
            end: args.end,
            id: DayPilot.guid(),
            text: modal.result,
          });
        },
        eventDeleteHandling: "Disabled",
      },
    };
  },
  computed: {
    // DayPilot.Calendar object - https://api.daypilot.org/daypilot-calendar-class/
    calendar() {
      return this.$refs.calendar.control;
    },
  },
  mounted() {
    this.loadEvents();
  },
};
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
.navigator_default_main {
  background-color: var(--primary);
}
.calendar_default_rowheader_inner {
  display: none;
}
.calendar_default_corner_inner {
    display: none;
}
.calendar_default_main{
    width:75%;
    height:50%;
}
</style>
