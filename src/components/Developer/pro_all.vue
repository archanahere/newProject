<template>
    <div>
      
      <p v-if="project">
        Name: {{ project.name }}
        Status: {{ project.status }}
        Description: {{ project.description }}
      </p>
    </div>
  </template>
  
  <script>
  export default {
    name:'all_pro',
    props: {
      project: Object
    },
    methods: {
      showDetails() {
        // Show details based on selected project
        // You can access the selected project using this.project
      }
    }
  }
  </script>
  