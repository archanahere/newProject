<template>
      
  <Button type="button" @click="Back">Back</Button>>

</template>
<script>

import router  from '../router';
export default {
     name : '#backButton',
     methods: {Back() {
      router.back(-1);
    }}
     
  }
// }


</script>

