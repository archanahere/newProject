<template>
  <div class="row">
    <addTask />
   <timeLine />
  </div>
</template>

<script>
import { timeLine } from '@/components/timeLine.vue';
import addTask from '@/components/addTask.vue';
export default {
  name: 'MyCalendar',
  components:{
    timeLine,
    addTask
},

    
  methods:{
    eventAdded(){
      return{
        // startDate:'',
        // endDate:''
      }
      
    },
  
  }, 
  
//   data: function() {
//     return {
//       startDate: "",
//       endDate: "",
//       title:'',
// description:'',
//       events: [],
//       navigatorConfig: {
//       }
//     }
//   }
}

</script>
