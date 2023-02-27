<template>
    <div>

      <input class="bbtn" type="button" @click="Back"/>Back
    </div>  

</template>
<script>

import router  from '../router';
export default {
     name : '#backButton',
     methods: {Back() {
      router.back(-1);
    }}
     
  }



</script>
<style lang="scss">

  .bbtn {
  width:5rem;
  height:5rem;
  background: none;
  border: none;
  color: gray;
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  line-height: 1;
  padding: 0.5rem;
  transition: none;

  &:hover {
    text-decoration: none;
  }

  &:before {
    content: "\003C";
    display: inline-block;
    margin-right: 0.3rem;
  }
}


</style>
