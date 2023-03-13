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
    <div class="d-flex flex-row mb-3">
      <div class="text-box align-items-left d-flex justify-content-start mt-2 mx-3 text p-5 border-right">
        <span class="text">Total</span><br>
       <span class="ms-auto"> {{ project_status.Total }}</span>
      </div>
      <div class="text-box align-items-center d-flex justify-content-start mt-2  mx-3  text p-5 ">
        <span class="text">Completed</span><br>
        <span class="ms-auto"> {{ project_status.completed }}</span>
      </div>
      <div class="text-box align-items-center d-flex justify-content-start mt-2 mx-3  text p-5 "><span class="text">In Progress</span> <br> <span class="ms-auto">{{project_status.in_Progress}}</span></div>
      <div class="text-box align-items-center d-flex justify-content-start mt-2  mx-3 text p-5 "><span class="text">Yet to Start</span> <br> <span class="ms-auto">{{project_status.yet_to_start}}</span></div>
    </div>


    <div class="col-7">
      <acivePro />
     <div class="text ms-2">
      Active Project
     </div> 
    </div>
    <div class="col-5">
      <DcompletedPro />
      Completed Project
    </div>
  </div>
</template>
  
  <script>
import acivePro from "@/components/Developer/pro_active.vue";
import DcompletedPro from "@/components/Developer/pro_compeleted.vue";
// import navBar from '@/components/user/navbar.vue'
export default {
  name: "adPro",
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