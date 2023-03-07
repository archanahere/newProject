<template>
  <div class="row">
    <h4>Edit Profile</h4>
    <div type="file" accept="image/*" class="hidden" ref="file" @click=(click) >
            <img src="src" atl="profile" class="" style="width:5vh; height:5vh;" />
<div class="m-2 d-inline-block">
<h6 for="exampleDataList" class="form-label">First Name </h6>
<input
 v-model="First_name"
 type="name"
 class="form-control-sm"
 id=""
 placeholder="First Name"
/>
</div>
<div class="m-2 d-inline-block">
<h6 for="floatingInput" class="form-floating">Last Name </h6>
<input
 v-model="Last_name"
 type="name"
 class="form-control-sm"
 id=""
 placeholder="Last Name"
/>
</div>

<div class="m-2">
<h6 for="floatingInput" class="form-floating">Email </h6>
<input
 v-model="Email"
 type="Email"
 class="form-control-sm"
 id="Email"
 placeholder="Last Name"
style="widht:100vh"/>
</div>

<div class="m-2">
<h6 for="floatingInput" class="form-floating">Phone Number </h6>
<input
 v-model="Phone"
 type="text"
 class="form-control-sm"
 id="Phone"
 placeholder="Phone Number"
 style="widht:100vh"/>
</div>

<div class="m-2">
<h6 for="Designation" class="form-floating">Designation </h6>

<input
 v-model="Designation"
 type="Designation"
 class="form-control-sm"
 id="Designation"
 placeholder=""
 style="widht:100vh"/>
</div>

<div class="m-3">
<h6 for="floatingInput" class="form-floating">Skills</h6>
<textarea class="form-control-sm" id="Skills" rows="3"></textarea>
</div>

<div class="m-3 d-inline-block">
<h6 for="floatingInput" class="form-floating">Experience </h6>
<input
 v-model="Experience"
 type="Name"
 class="form-control-sm"
 id="Experience"
 placeholder="Experience"
/>  
</div>

<div class="m-3 d-inline-block">
<h6 for="floatingInput" class="form-floating">Education </h6>
<input
 v-model="Education"
 type="Name"
 class="form-control-sm"
 id="Education"
 placeholder="Education"
/>
</div>
</div>
</div>
</template>

<script>
export default {
nmae:'DevEditPro',
Data(){
return{

    First_name:'',
    Last_name:'',
    Email:'',
    Phone:'',
    Designation:'',
    Experience:'',
    Education:'',
}
}, methods: {
    selectComponent(componentName) {
      this.componentName = componentName;
    },
    click(e){
      this.$refs.file.change();
      this.file=e.target.files[0];
      this.$emit('image',this.file);
      let render = new FileReader();
      render.readAsDataURL(this.file);
      render.load=(e)=>{
        this.src =e.taget.result;
      }
    }
  }

}
</script>

<style>

</style>
