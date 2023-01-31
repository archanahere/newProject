<template>
    <div class="container row-4 bg-blue-200">
      <form class="row g-5">
  <div class="col-md-3">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" v-model="Email" class="form-control" id="inputEmail4">
  </div>
  <div class="col-md-3">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" v-model="Password" class="form-control" id="inputPassword4">
  </div>cx vn xv
  <div class="col-4">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" v-model="address" class="form-control" id="inputAddress" placeholder="1234 Main St">
  </div>
  <div class="col-4">
    <label for="inputAddress2" class="form-label">Address 2</label>
    <input type="text"  class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
  </div>
  <div class="col-md-3">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity">
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected></option>
      
    </select>  
  </div>
  <div class="col-md-5">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip">
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input m-3 " type="checkbox" id="gridCheck">
      <label class="form-check-label m-2 p-3" for="gridCheck">
        Check me out
      </label>
    </div>
    </div>
  
  <div class="col-12">
    <button type="submit" @click="signin" class="btn btn-primary">Sign in</button>
  
</div>
</form>
    </div>
 
</template>
<script>
export default {
  data(){
    return{
      Email:'',
    addrss:'',
    password:'',
    city:'',
    State:'',

    }
    
  },
}
</script>
<!-- <style>
  .custom-container {
    background-color: #1e0ff4;
  }
</style> -->