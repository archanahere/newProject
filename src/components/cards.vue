<template name="card ">
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
  <label for="customRange2" class="form-label">Progress</label>
  <input
    type="range"
    class="form-range m-2"
    min="0"
    max="5"
    v-model="updateValue"
    id="customRange2"
  />
  <router-link to="#" class="btn btn-sm btn-primary"
    >View Details</router-link
  >
</div>
</div>

</template>
<script>


export default {
    name:'allCard',
    props: {
        no: Number,
          type: String,
          progress: Number,
          plans: String,
          status: String,
          taskdone: Number,
          discription:String,
  }
    }

</script>
