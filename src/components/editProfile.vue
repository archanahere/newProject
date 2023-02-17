<template>
    
  <div class="m-2 d-inline-block">
    <h6 for="exampleDataList" class="form-label">First Name </h6>
    <input
      v-model="First_name"
      type="name"
      class="form-control-sm"
      id=""
      placeholder="First Name"
    />
  </div>
  <div class="m-2 d-inline-block">
    <h6 for="floatingInput" class="form-floating">Last Name </h6>
    <input
      v-model="Last_name"
      type="name"
      class="form-control-sm"
      id=""
      placeholder="Last Name"
    />
  </div>

  <div class="m-2">
    <h6 for="floatingInput" class="form-floating">Email </h6>
    <input
      v-model="Email"
      type="Email"
      class="form-control-sm"
      id="Email"
      placeholder="Last Name"
    style="widht:100vh"/>
  </div>

  <div class="m-2">
    <h6 for="floatingInput" class="form-floating">Phone Number </h6>
    <input
      v-model="Phone"
      type="text"
      class="form-control-sm"
      id="Phone"
      placeholder="Phone Number"
      style="widht:100vh"/>
  </div>

  <div class="m-2">
    <h6 for="Profession" class="form-floating">Profession </h6>

    <input
      v-model="Profession"
      type="Profession"
      class="form-control-sm"
      id="Profession"
      placeholder="Profession"
      style="widht:100vh"/>
  </div>

  <div class="m-3">
    <h6 for="floatingInput" class="form-floating">Address</h6>
    <textarea class="form-control-sm" id="Address" rows="3"></textarea>
  </div>

  <div class="m-3 d-inline-block">
    <h6 for="floatingInput" class="form-floating">Country </h6>
    <input
      v-model="Country"
      type="Name"
      class="form-control-sm"
      id="Country"
      placeholder="Country"
    />  
  </div>

  <div class="m-3 d-inline-block">
    <h6 for="floatingInput" class="form-floating">City </h6>
    <input
      v-model="City"
      type="Name"
      class="form-control-sm"
      id="City"
      placeholder="City"
    />
  </div>
</template>
      <script>
//   import dbAccount from '@/components/account.vue'
//   import navBar
export default {
  name: "#editProfile",
  components: {
    // dbAccount,
  },
  data() {
    return {
      name: "",
      component_name: "Account",
      profile_details: {
        First_name: "",
        Last_name: "",
        Email: "",
        Phone: "",
        Profession: "",
        Address: "",
        Country: "",
        City: "",
      },
    };
  },
};
</script>
      <style scoped>
.navbar,
.navbar-text {
  position: relative;
}
.btn.hover {
  background-color: white;
}
.text-blue {
  color: blue;
}
a.router-link-active {
  background: #ffffff;
  text-decoration-color: black;
}
</style>
      
    