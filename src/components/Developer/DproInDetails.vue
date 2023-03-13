<template>
  <div>
    <nav>
      <div class="card">
        <span class="file d-block-inline">{{ photo }}</span>
        <div class="name d-block-inline">
          {{ nameOfCus }}
        </div>

        <div class="card-body">
          <h5 class="text-muted d-inline-block">
            Name/Title of Projects:
            <div class="name">
              {{ name }}
            </div>
          </h5>
          <div class="type text-muted d-inline-block rounded">
            <div class="name">
              <span class="date">
                {{ type }}
              </span>
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
        <div class="d-inline-flex justify-content-evenly">
          <div class="mx-2">
            <label for="name exampleColorInput" class="mx-4 form-label"
              >Color</label
            >
            <input
              type="color"
              class="colornew mx-4 form-control form-control-color"
              id="exampleColorInput"
              value="#fff"
              title="Choose your color"
              style="width: 12vh; height: 10vh; border-radius: 10px"
            />
          </div>

          <div class="mx-2">
            <label for="name exampleColorInput" class="mx-4 form-label"
              >Color</label
            >
            <!-- <div class="d-flex" style="width:200px border-:30px flex-width:50px"> -->
            <input
              type="color"
              class="color new mx-4 form-control form-control-color"
              id="exampleColorInput"
              value="#fff"
              title="Choose your color"
              style="width: 12vh; height: 10vh; border-radius: 10px"
            />
          </div>

          <div class="mx-2">
            <label for="name exampleColorInput" class="mx-4 form-label"
              >Color</label
            >
            <!-- <div class="d-flex" style="width:200px border-:30px flex-width:50px"> -->
            <input
              type="color"
              class="colornew mx-4 form-control form-control-color"
              id="exampleColorInput"
              value="#fff"
              title="Choose your color"
              style="width: 12vh; height: 10vh; border-radius: 10px"
            />
          </div>
        </div>
        <div class="card" style="width: 18rem">
          <h5 class="card-title">{{ plan }}</h5>
          <div class="card-body">
            <div class="name">
              <span class="date">
                {{ Date }}
              </span>
            </div>
          </div>
        </div>

        <button class="btn"></button>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
    name:'#proInDetail'
    ,props:{
        
photo:{
  type:String,
  require:false,
},
nameOfCus:{
  type:String,
  require:false,
},
name:{
  type:String,
  require:false,
},
type:{
  type:String,
  require:false,
},
description:{
  type:String,
  require:false,
},

total_completed:{
  type:String,
  require:false,
},
process:{
  type:String,
  require:false,
},
color1:{
  type:String,
  require:false,
},
color2:{
  type:String,
  require:false,
},
color3:{
  type:String,
  require:false,
},
fonts:{
  type:String,
  require:false,
},
logo:{
  type:String,
  require:false,
},
Date:{
  type:Date,
  require:false,
},plan:{
  type:String,
  require:false,
},

    },mounted(){

    }
}

</script>

<style scoped lang="scss">
.card {
  border-block-color: var(--primary);
}
.btn {
  background-color: var(--primary);
  text-decoration-color: var(--light);
}
.date {
  background-color: var(--primary-alt);
  text-decoration-color: var(--primary);
}
</style>