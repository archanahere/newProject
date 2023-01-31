<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
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
  name: "#HoMe",
  components: {
    profileCustomer,
  },
  data() {
    return {};
  },
};
</script>
