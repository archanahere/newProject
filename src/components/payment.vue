<template>
   <select-plan @planSelected="selectedPlan"/>
    <div class="card container mt-3">
      <div class="card-body">
        <h5 class="card-title">Make payment :</h5>
        <form class="form-floating">
          <h6 for="floatingInputValue">Card Holder Name*</h6>
          <input v-model="cardName" type="email" class="form-control ml-auto" id="floatingInputValue" placeholder="Crad Holder name">
        </form>
        <form class="form-floating">
    <h6 for="floatingInputValue">Card Number*</h6>
    <input v-model="cardNumber" type="text" class="form-control ml-auto" id="floatingInputValue" placeholder="Card Number" readonly>
          </form>
  
        <div class="row">
          <div class="col">
            <label>Expiry Date</label>
            <input v-model="expiryDate" type="Date" class="form-control" placeholder="DD/MM/YYYY" aria-label="Expiery Dtae">
          </div>
          <div class="col">
            <label >CVV</label><br>
            <input v-model="cvv" class="m-2" type="text" maxlength="3" :class="{ 'is-invalid': !isValidCVV }">
            <p v-if="!isValidCVV" class="invalid-feedback">Invalid CVV</p>
          </div>
        </div>
        <div class="d-grid gap-2 col-6 m-2">
  <button class="btn btn-primary" type="button" style="width:125vh;">Make Payment</button></div>
      </div>
      Before Completeing payment Plaese read the 
    </div>
  </template>
  
  <script>
  import selectPlan from './components/selectPlan.vue';
  export default {
    name:'#MakePayment',
    components:{
      selectPlan},
    data() {
      return {
        cardName: '',
        cardNumber: '',
        expiryDate: '',
        cvv: ''
      }
    }, methods: {
    showMakePayment() {
      this.showPayment = true;
    }
  },
    computed: {
      maskedCardNumber() {
        if (!this.cardNumber) {
          return '';
        }
        return '•••• •••• ' + this.cardNumber.slice(-4);
      },
      isValidCVV() {
        return /^\d{3}$/.test(this.cvv);
      }
    }
  }
  </script>
  
  <style>
    .masked {
      position: relative;
    }
  
    .masked span {
      position: relative;
      z-index: 1;
      color: black;
    }
  
    .is-invalid {
      border: 1px solid red;
    }
  </style>
  