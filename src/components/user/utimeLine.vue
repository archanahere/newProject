<template>
  <div class="row">
    <div v-show="showdetails" class="modal-dialog modal-dialog-scrollable">
  
</div>
    <div class="col-8">

        <projectInDetail :type="data.type" :description="data.description" />
      <button class="btn" @click="ahowAllData">
          View All
      </button>
      <addTask @newTask="addNewTask"></addTask>
    <timeLine :events="timelineEvents"></timeLine>
    </div>
    <div class="col-4">
        chat
    </div>
  </div>

</template>

<script>
import projectInDetail from '@/components/Developer/DproInDetails.vue'
export default {
name:'userTimeline',
components:
{
    projectInDetail
},
data(){
    return{
        description:"",
        timelineEvents: [],
        type:"",
    }
},methods:{
    ahowAllData(){
        this.emit('showdetails')
    },
    
    addNewTask(task) {
      // add new task to timeline events
      this.timelineEvents.push({
        start: task.start,
        end: task.end,
        text: task.title,
        backColor: '#2196F3',
        description: task.description
      });
    }
},mounted:{

}

}
</script>

<style scoped lang="scss">
.btn{
    color: var(--primary);
}


</style>