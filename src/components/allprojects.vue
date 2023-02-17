<template>
  <div class="row">
    <div class="col-3 ">
      <Dashboard />
    </div>
    <div class="col-9 mb-3 mb-sm-0">
      <div class="row">
        <div class="col-12 mb-3 mb-sm-0 bg-secondary-subtle">
          <navBar class="container" nameOfPage="Projects" Cus_name="Jhon Deo"></navBar>
        </div>
        <!-- <div v-for="card in cards" :key="pro_no"> -->
            <div class="m-auto"></div>
        <allCard
          v-for="(project, no) in pro_no"
          :key="no"
          :type="project.type"
          :progress="project.progress"
          :plans="project.plans"
          :status="project.status"
          :taskdone="project.taskdone"
          :discription="project.discription"
        >
        </allCard>
      </div>
    </div>
  </div>
</template>
  <script>
import Dashboard from "@/components/DashBoard.vue";
import navBar from "@/components/navbar.vue";
import allCard from "@/components/cards.vue";

export default {
  components: { Dashboard, navBar, allCard },
  name: "allPro",
  data() {
    return {
      pro_no: [
        {
          no: 1,
          type: "E-Commerce Website",
          progress: 20,
          plans: "GOLD",
          status: "Pending",
          taskdone: 20,
          discription: "logran bdvghvfghgtrbyu hgfhbhebf n hj",
        },
        {
          no: 1,
          type: "E-Commerce Website",
          progress: 20,
          plans: "GOLD",
          status: "Pending",
          taskdone: 20,
          discription: "logran bdvghvfghgtrbyu hgfhbhebf n hj",
        }
        
      ],
    };
  },
};
</script>