<template>
    <!-- the card id created i this data will be filled -->
  
    <div class="card container mt-3">
  <div class="m-2 ">
  <div class="card-body">
    <h5 class="card-title">Project Info:</h5>
    <h6 class="card-text my-3" style="--bs-text-opacity: .5">Please describe your project in detail; this will assist the developer in understanding your needs.
    </h6>
    <div class="mb-3">
  <label for="exampleFormControlInput1"  class="form-label validationCustom01">Name/Tittle of the project</label>
  <input type="name" class="form-control" v-model="NameOfproject" id="validationName" placeholder="project Name" required>
  <div class="invalid-feedback">
      Please Give Tittle For continue to the next step.
  </div>
</div>

  <div class="mb-3">
  <label for="Description" id="inputGroupPrepend" class="form-label">Description
  </label>
  <textarea class="form-control" v-model="discription" id="Description" rows="3" placeholder="Describe your project in details"></textarea>
  <div class="invalid-feedback">
        Please write Description.
      </div>  
</div>


  </div>
  <div class="mx-3 form-floating border p-2 mb-2" id="selector" style="width:270px; --bs-border-opacity: .10;">
  <select class="form-select" aria-label="Default select example" style="width:250px" v-model="saveSelectedOption">
    <option selected>Select the Type of Website</option>
    <option value="1">Business website</option>
    <option value="2">Port</option>
    <option value="3">Blog Website</option>
    <option value="3">E-commerce Website</option>
    <option value="3">Blog Website</option>
    <option value="3">Custmise Website</option>
    <option value="3">sideBar</option>
    <div class="invalid-feedback">
      Please select a valid state.
    </div>  
  
  </select>
  </div>
  <br>
  <div class="d-inline-flex justify-content-evenly">
   
      
    <div class="mx-2">
  <label for=" exampleColorInput" class="mx-4 form-label">Color</label>
  <input type="color" class="mx-4 form-control form-control-color" id="exampleColorInput" value="#fff" title="Choose your color" style="width:12vh; height: 10vh; border-radius: 10px;" >
  </div>
  
  
    <div class="mx-2">
  <label for=" exampleColorInput" class="mx-4 form-label">Color</label>
  <!-- <div class="d-flex" style="width:200px border-:30px flex-width:50px"> -->
  <input type="color" class="mx-4 form-control form-control-color" id="exampleColorInput" value="#fff" title="Choose your color" style="width:12vh; height: 10vh; border-radius: 10px;" >
  </div>
  
  
  <div class="mx-2">  
  <label for=" exampleColorInput" class="mx-4 form-label">Color</label>
  <!-- <div class="d-flex" style="width:200px border-:30px flex-width:50px"> -->
  <input type="color" class="mx-4 form-control form-control-color" id="exampleColorInput" value="#fff" title="Choose your color" style="width:12vh; height: 10vh; border-radius: 10px;" >
  </div>
  </div>
  <div class="row g-2 my-3 mx-2">
    <div class="col-md">
      <div class="form-floating">
        <label for="floatingInputGrid">Fonts</label>
        <input type="email" class="form-control" id="floatingInputGrid" placeholder="e.g: Sens serif Xyz" value="e.g: Sens serif Xyz">
      </div>
    </div>
    <div class="col-md">
      <div class="input-group">
        <label for="floatingInputGrid">Logo/Img</label>
    <input type="file" class="form-control"  id="inputGroupFile04" placeholder="Upload logo/Img" aria-describedby="inputGroupFileAddon04" >
    <button src="../../assets/image/UploadSimple.png" class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04"></button>
  </div>
    </div>
  </div>
</div>
<router-link :to="{name:'sp'}" type="button" class="btn btn-primary" @click="next"
        style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;" >
  Next
</router-link> 
  </div>
  
  </template>
  <script>
  
  
  import { router } from "../router";
  
  export default {
      name:'#proInfo',
      emits: ['next'],

      data(){
        return{
           
            options: ['Business Website', 'Portfolio Website', 'Blog Website', 'E-commerce Website', 'Custmise Website', 'sideBar'],
            selectedOption: null,
            NameOfproject:'',
            discription:'',
            fonts:'',
            logo:'',
            color1:'',
            color2:'',
            color3:'',
            
        } 
      },methods: {
      saveSelectedOption(value) {
        this.selectedOption=value
      },
      // emit function to redirect user to the next step of project planing....
      next() {
      // ...
      // this.$emit('next', {NameOfproject})
      router.push({name:'sp'})
    }
      
      
  }
  }
  
    </script>
    <style lang="saas">
  /* $form-select-border-width: 12px; */
  
  /* .selector {
    border-width: $form-select-border-width;
    
  } */
  
  
    </style>