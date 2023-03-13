<template>
  <div>
    <div class="d-flex flex-row mb-3">
      <div
        class="text-box align-items-center d-flex justify-content-start mt-2 mx-3 text p-5"
      >
        <div class="text">Total</div><br />
        <div class="ms-auto"> {{ developer_details.Total }}</div>
      </div>
      <div
        class="text-box align-items-center d-flex justify-content-start mt-2 mx-3 text p-5"
      >
        <div class="text">Completed</div><br />
        <div class="ms-auto"> {{ developer_details.active }}</div>
      </div>
      <div
        class="text-box align-items-center d-flex justify-content-start mt-2 mx-3 text p-5"
      >
        <div class="text">In Progress</div> <br />
        <div class="ms-auto">{{ developer_details.working }}</div>
      </div>
      <div
        class="text-box align-items-center d-flex justify-content-start mt-2 mx-3 text p-5"
      >
        <div class="text">Yet to Start</div> <br />
        <div class="ms-auto">{{ developer_details.Non_active }}</div>
      </div>
      <div>
        <div class="card align-items-left d-block">
  <div class="card-body">
    <h6>
    Have a new Developer?
</h6> 
<h6 class="text-muted">
    Add developer and Assign new Projects
</h6>

<router-link class="btn" to="/Admin-ADev/addDev">
Add Developer
</router-link>
  </div>
</div>
       

      </div>
    </div>
    <hr>
    <div class="row">
      <div>All Developers</div>
      
  
    <div class="card m-2">
      <div class="card-body">
        <img class="card-title" src=""  alt="profile"/>
        <h5 class="name">{{ developer_details.dev_name }}</h5>
        <p class="card-text text-mute">{{ developer_details.dev_gmail }}</p>
        <router-link  :to="{name:'Adev_details'}" class="btn btn-primary" v-bind=" developer_details.dev_profile" aria-placeholder="Developer">
           </router-link>
      </div>
    </div>
  </div>
    </div>
  
  
</template>

  <script>
  // import aDev_details from '@/components/Admin/developer_details.vue'
export default {
  name: "adminDeve",
  components:{
    // aDev_details
  },
  data() {
    return {
      developer_details: {
        Total: "",
        active: "",
        working: "",
        Non_active: "",
        dev_name:'',
        dev_gmail :'',
        dev_profile :''
      },
    };
  },
};
</script>
  
  <style lang="scss" scoped>
  .btn{
    background-color: var(--primary);
  }

  .text-box{
  height:30px;
  width:40px;
  background-color: white;
  
  border-radius: 10%;
  box-shadow: 4px 4px 6px -1px rgba(0, 0, 0, 0.2),
  inset 4px 4px 6px -1px rgba(255, 255, 255, 0.7);
}
</style>