<template>
  <nav class="">
    <div class="card">
      <div class="header">
        {{ plan }}
      </div>
      <div class="card-body">
        <button class="btn text-muted" @click="upload">
          <span>{{ photo }}</span>
          <div class="name">
            {{ nameOfCus }}
          </div>
        </button>
        <h5 class="text-muted d-inline-block">
          Name/Title of Projects:
          <div class="name">
            {{ name }}
          </div>
        </h5>
        <div class="type text-muted d-inline-block rounded">
          <div class="name">
            {{ type }}
          </div>
        </div>

        <p class="text-muted">Description:</p>
        <div class="name">
          {{ description }}
        </div>

        <p class="text-muted">Type</p>
        <div class="name">{{ type }}</div>

        <h5 class="text-muted d-block-inline">
          <span>Task Completed</span>
          <div class="name">
            {{ total_completed }}
          </div>
        </h5>
        <button class="btn d-block-inline"></button>
      </div>
      <div class="card-footer">
        {{ process }}
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "ProjectDetails",
  // props:{
  //     photo:Object,
  //    divOfCus:'',
  //    plan:{id:Gold,id:Silver,id:Platinum},
  //    title:'',
  //    type:{id:active,id:completed},
  //    description:'',
  //    total_completed:'',
  //    process:Number

  // },
  data() {
    return {
      selectedFile: null,
      photo: null,
      nameOfCus: "Archana",
      plan: "gold",
      title: "project",
      type: "e-commmerce",
      description: "loren5 ",
      total_completed: 20,
      process: 30,
    };
  },
};
</script>
<style scoped lang="scss">
.type {
  background-color: var(--primary-alt);
  text-decoration-color: var(--primary);
  width: 30vh;
}
.header {
  background-color:var (--primary);
  align-self: right;
}
.h5 {
  font-size: 10px;
}
div {
  text-decoration-color: black;
}
</style>
