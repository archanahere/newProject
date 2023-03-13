<template>
  <info class="row">
    <div class="col-2">
      <sideBar />
    </div>

    <div class="page col-10 ms-1">
      <navBar  class="navBar" Cus_name="{{ name }}" nameOfPage="Projects" />
      <allPro />
    </div>

    <div class="row container-fluid">
      <!-- <proInfo /> -->
    </div>
  </info>
</template>
  <script>
import sideBar from "./sideBar.vue";
// import proInfo from '@/components/user/porjectInfo.vue'
import navBar from "@/components/user/navbar.vue";
import allPro from "@/components/user/allprojects.vue";

export default {
  components: {
    sideBar,
    // proInfo,
    navBar,
    allPro,
  },
  name: "#dbProjects",
  data() {
    return {
      name: "Jhon Deo",
    };
  },
};
</script>
  <style scoped lang="scss">
info {
  height: 75%;
}
.page{
  background-color: var(--light
  );
}
</style>