<template>
  <div class="row">
    <div class="card m-2" style="width:270px">
      <div class="new d-inline-block" style="font-size: 20px">
        Welcome Back Admin
        <br /><span class="text-muted"> You Have New Project in feed </span>
      </div>
      <button class="btn p-1 btn-primary d-inline-block">Check Now</button>
    </div>

    <div class="task ms-2">
      <div class="card" style="width: 18rem">
        <h6 class="text-muted m-1">Task</h6>
        <h4 class="card-title m-1 mb-1" style="font-size: 15px">
          Task Completed by Developer
        </h4>
        <hr />
        <div class="card-body">
          <div class="progress-stacked" style="width: 230px">
            <div
              class="progress mx-1 d-inline-flex"
              role="progressbar"
              aria-label="Assigned"
              aria-valuenow="16"
              aria-valuemin="0"
              aria-valuemax="100"
              style="width: 15%; background-color: #ff718b"
            >
              <div class="" style=""></div>
            </div>
            <div
              class="progress mx-1 d-inline-flex"
              role="progressbar"
              aria-label="In progress"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
              style="width: 30%; background-color: #ffeb3a"
            >
              <div class="progress-bar-2" style=""></div>
            </div>
            <div
              class="progress mx-1 d-inline-flex"
              role="progressbar"
              aria-label="Completed"
              aria-valuenow="20"
              aria-valuemin="0"
              aria-valuemax="100"
              style="width: 40%; background-color: #7fe47e"
            >
              <div class="progress-bar-3" style=""></div>
            </div>
          </div>

          <div class="justify-content-between d-flex">
            <label class="text-muted mt-1">
              Assigned<br />
              <span class="d-inline-block">{{ assigned }} </span>
              <figure class="mt-1 ms-1 d-inline-block mt-1">
                <img src="../../assets/image/Nagetive_Icon.svg" />
              </figure>
            </label>

            <label class="text-muted mt-1">
              In Progress<br /><spna class="d-inline-block mt-1">{{
                In_process
              }}</spna>
              <figure class="mt-1 ms-1 d-inline-block">
                <img src="../../assets/image/Neutral_Icon.svg" />
              </figure>
            </label>

            <label class="text-muted mt-1">
              Completed<br /><span class="d-inline-block">
                {{ completed }}</span>

              <figure class="mt-0 ms-1 d-inline-block mt-1">
                <img src="../../assets/image/Positive_Icon.svg" />
              </figure>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div>
      <pro_active />
    </div>

  </div>
</template>
  
  <script>
  import pro_active from '../Developer/pro_active.vue';
export default {
  name: "adminDb",
  components:{
    pro_active
  },
  data() {
    return {
      assigned: 20,
      In_process: 30,
      completed: 50,
    };
  },
};
</script>
  
  <style lang="scss" scoped>
.row {
  height: 100%;
  background-color: var(--light);
}
// .progress-bar-1{
//   background-color:#ff718b !important;
// }
// .progress-bar-2{
//   background-color:#ffeb3a !important;
// }
// .progress-bar-3{
//   background-color:#7fe47e !important;
// }
.btn{
  background-color: var(--primary);
}
.text-muted {
  font-size: small;
}
</style>