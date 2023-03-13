<template>
  <nav class="nav row bg-ligh">
    <div class="component">
      <h5 class="mt-2">{{ nameOfPage }}</h5>
    </div>
    <div class="d-flex justify-content-end ml-auto">
      <figure>
        <div class="nav-item">
          <img
            class="mt-2 mx-3"
            src="../../assets/image/msg_icon.png"
            alt="Massages"
            style="width: 3vh; height: 3vh"
          />
        </div>
      </figure>

      <figure>
        <div class="nav-item">
          <img
            class="mt-2 mx-3"
            src="../../assets/image/notifcation_icon.png"
            alt="Notification"
            style="width: 3vh; height: 3vh"
          />
        </div>
      </figure>

      <div>
        <h6 class="mt-2 mx-2 nav-link">{{ Cus_name }}</h6>
      </div>
      
          <input type="file" accept="image/*" @change="previewImage" class="form-control-file" id="my-file">
          <template v-if="preview">
              <img :src="preview" class="img-fluid rounded-circle" style="height:4vh; height:5vh" />
             
            </template>
    </div>
  </nav>
</template>
<script>
export default {
  name: "navBar",
  props: {
    nameOfPage: {
      type: String,
      required: false,
    },
    Cus_name: {
      type: String,
      required: false,
    },
  },data: function() {
    return {
      preview: null,
      image: null,
      preview_list: [],
      image_list: []
    };
  },
 
  
}
</script>
<style scoped>
.nav {
  background-color: white;
}
</style>