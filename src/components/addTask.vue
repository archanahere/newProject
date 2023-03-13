<template>
    <div>
        <div class="card" style="width: 18rem;">
          <div class="row">
    <!-- Button trigger modal -->
<button @click="show" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add Task
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
      
        <form v-show="show" @submit.prevent="addEvent">
          <label for="start-date">Task Title:</label>
          <input type="text" id="title" v-model="title">
      
          <label for="start-date">Start Date:</label>
          <input type="date" id="start-date" v-model="startDate">
          
          <label for="end-date">End Date:</label>
          <input type="date" id="end-date" v-model="endDate">
          
          <label for="end-date">Description</label>
          <input type="texr-area" id="description" v-model="description">
        </form>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button  type="submit" @click.prevent="addEvent">Assign the Task</button>
      </div>
    </div>
  </div>
</div>
</div>
</div>
   
    
            <button type="submit">Add event</button>
  
  </div>
</div>
    

</template>

<script>

export default {
    nmae:'addtask',
    
    data(){
        return{
        
        }
    },mathods: {
      methods: {
  addEvent() {
    // create task object with input data
    const task = {
      title: this.title,
      start: this.startDate,
      end: this.endDate,
      description: this.description
    };
    // emit event with task data
    this.$emit('newTask', task);
    // clear form data
    this.title = '';
    this.startDate = '';
    this.endDate = '';
    this.description = '';
  }
}

}
}
        </script>

<style>

</style>