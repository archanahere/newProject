<template>
     <nav class="container-fluid mt-1">
      <div class="d-inline-block ms-3">
        {{ pagename }}
      </div>
      <form class="w-25 d-inline-block p-3" role="search">
        <input
          class="form-control p-2 mx-4 rounded-pill"
          v-model="search"
          @click="searched"
          type="search"
          placeholder="Search Projects"
          aria-label="Search"
        />
      </form>
      <div class="d-inline-block">
        <div class="admin justify-content-end d-flex">
          {{ adminname }}
        </div>
      </div>
    </nav>
    <div class="d-flex flex-row mb-3">
      <div class="text-box align-items-left d-flex justify-content-start mt-2 mx-3 text p-5 border-right">
        <span class="text">Total User</span><br>
       <span class="ms-auto"> {{ users.Total }}</span>
      </div>
      <div class="text-box align-items-center d-flex justify-content-start mt-2  mx-3  text p-5 ">
        <span class="text">Completed</span><br>
        <span class="ms-auto"> {{ users.Active }}</span>
      </div>
      <div class="text-box align-items-center d-flex justify-content-start mt-2 mx-3  text p-5 "><span class="text">In Progress</span> <br> <span class="ms-auto">{{users.Projects}}</span></div>
      <!-- <div class="text-box align-items-center d-flex justify-content-start mt-2  mx-3 text p-5 "><span class="text">Yet to Start</span> <br> <span class="ms-auto">{{project_status.yet_to_start}}</span></div> -->
    </div>
    <div class="row">
      <table class="table container">
  <thead class="thead ">
    <tr class="rounded-top">
  <th scope="col text"><span class="text">Name</span></th>
      <th scope="col text"><span class="text">Projects</span></th>
      <th scope="col text"><span class="text">Status</span></th>
      <th scope="col text"><span class="text">Plan</span></th>
      <th scope="col "><span class="text">View</span></th>
    </tr>
  </thead>
  <tbody>
    <!-- <tr>
      <td class="name">
     <span  v-for="(rowitem,index) in row" v-bind:key="index">
      {{ index.Name }}
     </span>
        </td>

        <td class="project">
     <span class="text" v-bind:key="index in row">
      {{ index.row.project }}
     </span>
        </td>

        <td class="status">
     <span v-bind:key="index">
      <div v-if="status==='Progress' " style="background-color:fffcc4; text_color : dac400;">In Progress</div>
      <div v-else-if="status==='Panding' " style="background-color:ffbcbc; text_color : fc4747;">Pending</div>
      <div v-else-if="status==='Completed' " style="background-color:c5ffbc; text_color : 41fb00;">Completed</div>
         </span>
        </td>

        <td class="plan">
          {{ plan }}
        </td>
style="background-color:fffcc4; text_color : color -->

        <!-- <td class="view">
     <span v-bind:key="index">
      <figure src="src">
        {{index.row.view }}

      </figure>
     </span>
        </td>
    </tr> -->
  </tbody>
</table>
    </div>
  
  </template>
  
  <script>
// import { type } from 'os';

export default {
  name: "adminUser",
  data() {
    return {
      search: "",
      pagename: "User",
      adminname: "sdvfgcgg",
      
      row: {
        Name: "skdhfhv",
        project: "sfsdfasgf",
        status: "trhd",
        plan: "fdh",
        view: "../../assests/image/Eye.svg",
      },
      columns: [
        "Name",
        "project",
        "status",
        "plan",
        "view",
        //   src:'../../assests/image/Eye.svg',
        //   type:String,
        //   requires:true

        // }
      ],
      users: [{ Total: 12, Active: 19, Projects: 38 }],
    };
  },
  computed: {
    isCompleted() {
      return this.status === "Completed";
    },
    isActive() {
      return this.status === "Active";
    },
    isPending() {
      return this.status === "Pending";
    },
  },
};
</script>
  
    
  <style lang="scss" scoped>
.container-fluid {
  background-color: var(--gray);
}
.form-control {
  justify-self: center;
  // background-color: var(--);
}
.table {
  width: 75%;
}
.thead {
  background-color: var(--primary);
  border-radius: 30%;
  th {
    // text-decoration-color: white;
    text-align: center;
    // text-align: -webkit-match-parent;
    .text {
      color: white;
    }
  }
}
.text-box {
  height: 30px;
  width: 40px;
  background-color: white;

  border-radius: 10%;
  box-shadow: 4px 4px 6px -1px rgba(0, 0, 0, 0.2),
    inset 4px 4px 6px -1px rgba(255, 255, 255, 0.2);
}

.row {
  background-color: var(--light);
  height: 100%;
}
.admin {
  justify-content: end;
  position: absolute;
}
// .text-box{
//   background-color: white;
// }

tbody {
  .name {
    color: black;
  }
  .project {
    color: var(--light);
    .text{
      color:var(--light);
    }
  }
  .plan{
    background-color: white;
    width: 20px;
    height: 15px;
    border: 2px;    
    border-color: var(--primary);
    
  }
  // .status{

  // }
  // .view{

  // }
}
</style>