<template>
    <div class="card mx-auto w-100 mb-3">
      <div class="card-body">
        
        <div class="m-3 ">
    <h6 for="floatingInput" class="form-floating">Current password </h6>
    <input
      v-model="new_pass"
      type="password"
      class="form-control-sm"
      id="Country"
      placeholder=""
    />   <div class="m-3 ">
    <h6 for="floatingInput" class="form-floating">New password</h6>
    <input
      v-model="new_pass"
      type="password"
      class="form-control-sm"
      id="Country"
      placeholder=""
    />   <div class="m-3 ">
        </div>
      </div>
      </div>
      </div>
      </div>
      
    </template>
    
      
       
    <script>
export default {
  name: "passSec",
  data(){
    return{
        new_pass:Number,
        curr_pass:Number
    }
  }
};
</script>
    
    
    <style>
.form-check .form-check-input:checked + .form-check-label::before {
  background-color: #007bff;
}

.form-check .form-check-input:focus + .form-check-label::before {
  box-shadow: 0 0 0 0.25rem rgba(0, 123, 255, 0.25);
}
</style>