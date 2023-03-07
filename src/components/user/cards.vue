<template name="user ">
    <div class="card m-3 rounded">
<div class="card-body">
  <h5 class="card-title">{{ type }}</h5>
  <h6 class="ms-auto">{{ status }}</h6>
  <p class="card-text">{{ discription }}</p>
  <h6 class="d-inline-block mb-0">Plan:</h6>
  <h6
    class="text-light d-inline-block mb-0 bg-warning m-2 rounded-pill"
  >
    {{ plans }}
  </h6>
  <br />
  <div class="wrapper">
  <label class="">Process</label>
    
<input type="range" min="0" max="100" step="1" v-bind="value"> 
  
  </div>
  <router-link to="#" class="btn btn-sm btn-primary"
    >View Details</router-link
  >

  <card>

  </card>
</div>
</div>
</template>

<script>


export default {
    name:'allCard',
    props: {
        no: Number,
          type: String,
          value: Number,
          plans: String,
          status: String,
          taskdone: Number,
          discription:String,

  },
  methods: {
  updateProgress() {
    this.$emit('update:progress', this.localProgress);
  }
}
    }

</script>
