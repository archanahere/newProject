<template>
  <div class="row">
    <div class="col-2">
      <!-- <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#"></a></li>
    <li class="breadcrumb-item active" aria-current="page">Library</li>
  </ol>
</nav> -->
<h5 class="text-bold">Feed</h5>
</div>
<div class="col-3">
  <div
      v-for="card in cards"
      :key="card.id"
      @click="cardSelected(card,card.id)"
      class="col-4"
    >
      <div class="card">
        <img
          src=card.src
          class="img rounded-circle d-inline-block"
          style="width: 5vh; height: 5vh"
        />
        <div class="name d-inline-block">
          {{ card.nameOfCus }}
        </div>

        <div class="card-body">
          <h5 class="text-muted d-inline-block">Name/Title of Projects:</h5>
          <div class="name d-inline-block">
            {{ card.name }}
          </div>
          <div class="type text-muted d-inline-block rounded">
            <div class="name">
              <span class="">
                {{ card.type }}
              </span>
            </div>
          </div>

          <p class="text-muted">Description:</p>
          <div class="name">
            {{ card.description }}
          </div>
        </div>
      </div>
    </div>
    
</div>
<div class="col-7">
  <div>
  <!-- <router-view :is={name:,params:{id}} /> -->
  </div>
</div>
    </div>
  
</template>


<script>
// import DproInDetails from '../Developer/DproInDetails.vue';

export default {
  nmae: "#adminFeed",
  components:{
    // DproInDetails
    
  },
  props:{
    src:String,
    id: {
    type: String,
    required: true
  }
  },
  data() {
    return {
      selectedcard:null,
      cards: [
        {
          id: 1,
          title: "Card 1",
          src: "../../assets/image/createProject_center_img.png",
          description: "This is the content of card 1",
          isSelected: false,
          nameOfCus: "dnbgfhvh",
          type: "e commerce",
          plan: "gold",
        },
        {
          id: 2,
          title: "Card 1",
          photo: "dbfhv",
          description: "This is the content of card 1",
          isSelected: false,
          nameOfCus: "dnbgfhvh",
          type: "e commerce",
          plan: "gold",
        },
      ],
    };
  },
  methods: {
    cardSelected(id) {
      this.selectedcard = id;
      this.$emit('showcard',this.selectedcard);
      this.cards.forEach((card) => {
        if (card.id !== card.id) {
          card.isSelected = false;
        }

      });
      
    },
  },
};
</script>

<style scoped lang="scss">
.row {
  background-color: var(--light);
  height: 100%;
}
.card {
  border-block-color: var(--primary);
  width:30vh;
}
.btn {
  background-color: var(--primary);
  text-decoration-color: var(--light);
}
.date {
  background-color: var(--primary-alt);
  text-decoration-color: var(--primary);
}
.selected {
  border: 2px solid var(--primary);
}

.img {
  border-block-color: var(--primary);
}
</style>
