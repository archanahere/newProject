<template>
    <div class="background">
        <div class="row">
        <div class="button_list col-2 h-100v" >
<h6 class="text-center">{{ com_name }}</h6>
            <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
                <button type="button" @click="showAllProjects"  class="btn my-2 align-items-center"><h6 class="text">All Projects</h6></button>
                <button type="button"  @click="showActiveProjects" class="btn my-2  align-items-center"><h6 class="text">Completed Projects</h6></button>
      <button type="button" @click="showCompletedProjects" class="btn my-2 align-items-center"><h6 class="text">Active Projects</h6></button>
    </div>
</div>
<div class="col-7 continer-fluid">
  <nav class="">
    <div class="card">
      <div class="header">
        {{ plan }}
      </div>
      <div class="card-body">
        <button class="btn text-muted" @click="upload">
          <span>{{ photo }}</span>
          <div class="name">
            {{ nameOfCus }}
          </div>
        </button>
        <h5 class="text-muted d-inline-block">
          Name/Title of Projects:
          <div class="name">
            {{ name }}
          </div>
        </h5>
        <div class="type text-muted d-inline-block rounded">
          <div class="name">
            {{ type }}
          </div>
        </div>

        <p class="text-muted">Description:</p>
        <div class="name">
          {{ description }}
        </div>

        <p class="text-muted">Type</p>
        <div class="name">{{ type }}</div>

        <h5 class="text-muted d-block-inline">
          <span>Task Completed</span>
          <div class="name">
            {{ total_completed }}
          </div>
        </h5>
        <button class="btn d-block-inline"></button>
      </div>
      <div class="card-footer">
        {{ process }}
      </div>
    </div>
  </nav>
            
        </div>
<div class="col-3 bg-light">
    <span class="border border-0"></span>
</div>
    </div>
</div>
  </template>
  
  <script>

  

  
  export default {
    name:'DevProject',
    components: {
      
        
    },
    data() {
      return {
        selectedProject: null,
        com_name:'Projects',
        Total:Number,
        In_Progress:Number,
        Completed:Number,
        Task_Completed:Number
      }
    },
    methods: {
      showAllProjects() {
        
                this.$refs.
            this.selectedProject = 'all';
        
        // Call method on child component to show details
        this.$refs.projectDetails.showDetails();
      },
      showActiveProjects() {
        // Update data property to display active projects
        this.selectedProject = 'active';
        // Call method on child component to show details
        this.$refs.projectDetails.showDetails();
      },
      showCompletedProjects() {
        // Update data property to display completed projects
        this.selectedProject = 'completed';
        // Call method on child component to show details
        this.$refs.projectDetails.showDetails();
      }
    }
  }
  </script>
  <style scoped lang="scss">
  
  .button_list{
    height:100vh;
    background-color: var(--gray);
  }
  .btn {
    width:22vh;
    border-radius: none;
    background-color: #dafdff;
    border-block-end-color: gray;   
}
.background{
 background-color: var(--light);
}
.text{
    
    text-align:center;
    font-size: 10px;
  }
</style>
  