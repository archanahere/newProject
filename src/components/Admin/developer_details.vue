<template>
    <div class="row">
      <!-- <navBar nameOfPage="project"/> -->
      <nav class="container-fluid mt-2">
        <div class="d-inline-block ms-3">
          {{ pagename }}
        </div>
        <form class="w-25 d-inline-block p-3" role="search">
          <input
            class="form-control p-2 mx-4 rounded-pill"
            v-model="search"
            @click="searched"
            type="search"
            placeholder="Search Projects"
            aria-label="Search"
          />
        </form>
        <div class="d-inline-block">
          <div class="admin justify-content-end d-flex">
            {{ adminname }}
          </div>
        </div>
      </nav>
      <div class="row">
        <div class="breadScrumb" style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><router-link :to="{name:'ADev'}">Developers</router-link></li>
    <li class="breadcrumb-item active" aria-current="page">Projects By Developer:</li>
  </ol>
</div>
      <div class="col-8">
        <acivePro />
       <div class="text ms-2">
        
       </div> 
      </div>
      <div class="col-4">
        <DcompletedPro />
       
      </div>
    </div>
</div>
  </template>
    
    <script>
  import acivePro from "@/components/Developer/pro_active.vue";
  import DcompletedPro from "@/components/Developer/pro_compeleted.vue";
  // import navBar from '@/components/user/navbar.vue'
  export default {
    name: "aDev_details",
    data() {
      return {
        project_status: {
          Total: 20,
          completed: 10,
          in_Progress: 4,
          yet_to_start: 10,
        },
        search: null,
        pagename: "Projects",
        adminname: "admin",
        
      };
    },
    components: {
      acivePro,
      DcompletedPro,
      // navBar
    },
    methods: {
      searched() {
        // this.
        console.log();
      },
    },
  };
  </script>
    
    <style lang="scss" scoped>
  .container-fluid {
    background-color: var(--gray);
  }
  .form-control {
    justify-self: center;
    // background-color: var(--);
  }
  .text-box{
    height:30px;
    width:40px;
    background-color: white;
    
    border-radius: 10%;
    box-shadow: 4px 4px 6px -1px rgba(0, 0, 0, 0.2),
    inset 4px 4px 6px -1px rgba(255, 255, 255, 0.7);
  }
  .row{
    background-color: var(--light);
    height:100%;
  }
  .admin {
    justify-content: end;
    position: absolute;
  }
  // .text-box{
  //   background-color: white;
  // }
  </style>