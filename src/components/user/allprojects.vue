<template>
   <div class="col-3">
    <sideBar />
</div>

<div class=" col-9 ms-1">
  
    <div class=" mb-3 mb-sm-0">
      
        <div class="col-12 mb-3 mb-sm-0 bg-secondary-subtle">
          
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
  
</template>
  <script>


import allCard from "@/components/user/cards.vue";

export default {
  components: {  allCard },
  name: "allPro",
  data() {
    return {
      pro_no: [
        {
          no: 1,
          type: "E-Commerce Website",
          progress: 90,
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