<template>
    <div>
        <div class="row">
            <div class="col-6">
                <h5 class="">Payment successfull</h5>
                <figure>
                    <img src="../../assets/image/success_payment.png" alt=""/>
                </figure>
                <h6 class="text-mute d-inline-block mb-0">Your Payment Completed </h6>
            <h6 class="text-mute d-inline-block mb-0">Please Wait Our Team Assign you Professional Developer </h6>
            
            <button type="button" class="btn btn-primary btn-lg">Back To Home</button><br>
            
            <button type="button" class="btn btn-link">Download Recepit</button>

            </div>
            <div class="col-6">
                <div class="card" style="width: 18rem;">
  <selectPlan @selectedPLan="showplan"/>

                    <div class="card-body">
    <h5 class="card-title"></h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
            </div>
    </div>

    </div>


</template>
<script>
import { defineComponent } from '@vue/composition-api'
import selectPlan from './selectPlan.vue';
export default defineComponent({
    components:{
        selectPlan
    },
    setup() {
        
    },
})
</script>
