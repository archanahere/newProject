<template>
  <h6>{{ name }}</h6>
  <!-- <h6>Billing History</h6> -->
    <br>
    <div class="mx-4 my-3">{{ table_name }}</div>
    <div class="row">
      <table class="table col-11 col-mg-12 mx-auto">
        
        <div class="row">
          <div class="col-12">
  <thead class="table">
    
      <tr>
        <th v-for="col in cols" :key="col.index">{{ col.name }}</th>
      </tr>
    </thead>
    <tbody class="table-group-divider">
    <tr>
      <th scope="row" v-bind:about=rows >{{ }}</th>
      <td>
        {{  }}
      </td>
      
    </tr>
    </tbody>
</div>
</div>
</table>
</div>
    <!-- </div> -->
  
</template>

<script>
export default {
name:'#bHistory',
data(){
    return{
        name:"Billing History",
        table_name:"Total No of Transection: ",
        cols:[
          {index:1,name:'project Name'},
          {index:2,name:'Date'},
          {index:4,name:'Transection ID'},
          {index:5,name:'Amount/Plan'},
          {index:6,name:'Status'},
          {index:7,name:'Invoice'},
        ],
      rows:[]
    }
}
}
</script>

<style>
.thead.table {
    text-decoration-color: white;
    background-color: rgb(16, 87, 219);
}
</style>