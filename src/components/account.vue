<template>
  <div class="row">
    <div class="col-3">
      <!-- <DashBoard  @click="SelectedComponent('component')"/> -->
      <DashBoard/>
    </div>
    <div class="col-9">
      <div class="row">
        <div class="col-2 bg-light" style="height: 100vh; width: 100vh">
          <router-link
            class="
              btn btn-light
              p-3
              bg-opacity-10
              border border-primary border-start-0
              rounded-end
            "
            to="/ep"
            
            >Account </router-link
            ><br />
            
            <router-link
            class="
              btn btn-light
              p-3
              bg-opacity-10
              border border-primary border-start-0
              rounded-end
            "
            to="/nf"
            
            >Notification </router-link
            ><br />
            <!-- @click="Component('component')" -->
          <!-- <router-view :is="Component"></router-view> -->
          <!-- <router-link class="btn py-2 m-2" to="savedCard"
            >Notification
          </router-link> -->
        </div>
        <div class="col-10 bg-secondary-subtle">
          <br>
          <router-view :is="Component"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
    <script>
import DashBoard from "@/components/DashBoard.vue";
// import navBar from "@/components/navbar.vue";
// import editProfile from "@/components/editProfile.vue";
export default {
  name: "#dbAccount",
  components: {
    DashBoard,
    // navBar,
    // editProfile,
  },
  data() {
    return {
      Component: "",
      SelectedComponent: "",
      nameOfPage: "Account",
      Cus_name: "Name",
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
  // methos: {
  //   Component(componentName) {
  //     this.Component = componentName;
  //   },
  //   SelectedComponent(componentName) {
  //     this.Component = componentName;
  //   },
  }
// };
</script>
    <style scoped>
.navbar,
.navbar-text {
  position: relative;
}
.active-link {
  text-decoration-color: blue;
}
</style>
    
  