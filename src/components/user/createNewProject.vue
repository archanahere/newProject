<template>
    <div class="m-1 bg-tertiary" >

        <figure class="mx-auto d-flex">
            <img src="../../assets/image/createProject_center_img.png"/>
    
        </figure>
        <h6 class="text-center text-capitalization">You Don’t Have Any  Active Project </h6>
                <div class=" container-fluid d-flex mb-6">
                  <router-link class="btn mx-auto btn-primary btn-sm " :to="{name: 'crepro'}"  >Create Project</router-link>
                </div>
    </div>
</template>


<script>
// import router from '.router'

export default {
name:'#defCreate',

}
</script>

<style>

</style>