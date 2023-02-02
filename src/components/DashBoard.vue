<template>

  <div class="row row-cols-2">
    <div class=".col p-10 w-25 h-75">Profile</div>
    <div class="col my-3 p-4 w-75 h-75">
      Insert Data
      <profileCustomer />
    </div>
  </div>
</template>
<script>
import profileCustomer from "@/components/profileCustomer.vue";

export default {
  name: "#DashBoard",
  components: {
    profileCustomer,
  },
  data() {
    return {};
  },
};
</script>
