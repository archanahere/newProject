<template>
    <div class="background">

        <DsideBar />
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
            <ProjectDetails />
            
        </div>
<div class="col-3 bg-light">
    <span class="border border-0"></span>
</div>
    </div>
</div>
  </template>
  
  <script>
import DsideBar from './DsideBar.vue';
  import ProjectDetails from '@/components/Developer/proDetails.vue';

  
  export default {
    name:'DevProject',
    components: {
      ProjectDetails,
        DsideBar
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
  