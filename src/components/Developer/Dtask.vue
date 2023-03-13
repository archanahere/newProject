<template>
<div class="row">
  <div>

    <h5>Tasks</h5>
    <select class="form-select form-select-sm" aria-label=".form-select-sm example">
    <option selected>Selected Project to view given tasks</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  </div>

  


</div>
  
  <div class="row">
   <timeLine />
  </div>
</template>

<script>
import timeLine  from '@/components/timeLine.vue';

export default {
  name: 'MyCalendar',
  components:{
    timeLine,
    
},methods:{

}

}

</script>
