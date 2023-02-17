<template>



<div class="card w-75 mb-3">
  <div class="card-body">
    
    
    
</div>
    <div class="form-check form-switch mx-auto">
        <label class="form-check-label" for="flexSwitchCheckDefault">Email Notification</label>
        <input class="form-check-input" type="checkbox" role="switch" id="toggle">
        <h6 class="text-muted">Get emails to find outprojects related updates</h6>
</div>
<div class="form-check form-switch mx-auto">
    <label class="form-check-label" for="flexSwitchCheckChecked">Message Notification</label>
    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
  <h6 class="text-muted">Get Message to find out projects related updates</h6>
</div>
<div class="form-check form-switch mx-auto">
    <label class="form-check-label" for="flexSwitchCheckChecked">Project Notification</label>
    <input class="form-check-input " type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
  <h6>Get Message to find out projects related updates</h6>
</div>
  </div>
</template>

  


<script>
export default {
    name:'myNotification'
}
</script>

<style>
.form-check .form-check-input:checked + .form-check-label::before {
  background-color: #007bff;
}

.form-check .form-check-input:focus + .form-check-label::before {
  box-shadow: 0 0 0 0.25rem rgba(0, 123, 255, 0.25);
}

</style>