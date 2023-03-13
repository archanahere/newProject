<template>
 <div>
  
 </div>
</template>
<script>
export default {
  name: "ProjectDetails",
  props: {
    photo: {
      type: String,
      required: false
    },

    nameOfCus: {
      type: String,
      required: false
    },

    plan: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: false
    },

    type: {
      type: String,
      required: false
    },

    description: {
      type: String,
      required: false
    },

    total_completed: {
      type: String,
      required: false
    },

    process: {
      type: Number,
      required: false
    },
    color: {
      type: String,
      required: false
    },
    fonts: {
      type: String,
      required: false
    },
    task_assign: {
      type: String,
      required: false
    },
    task_completed: {
      type: String,
      required: false
    },
    developer: {
      type: String,
      required: false
    },
    logo:{
        type:String,
      required:false},

  },
  // data() {
  //   return {
  //     selectedFile: null,
  //     photo: null,
  //     nameOfCus: "Archana",
  //     plan: "gold",
  //     title: "project",
  //     type: "e-commmerce",
  //     description: "loren5 ",
  //     total_completed: 20,
  //     process: 30,


  //   };
  // },
};
</script>
<style scoped lang="scss">
.type {
  background-color: var(--primary-alt);
  text-decoration-color: var(--primary);
  width: 30vh;
}

.header {
  background-color: var (--primary);
  align-self: right;
}

.h5 {
  font-size: 10px;
}

div {
  text-decoration-color: black;
}</style>
