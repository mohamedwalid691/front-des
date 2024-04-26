<template>
    <div class="card mt-3 radius p-3">
      <h2>N.P</h2>
      <div class="d-flex">
        <h5>Full metal</h5>
  
        <input
          :checked="isNPAdded('Full metal')"
          @click="changeNPValue('Full metal')"
          class="check-input"
          type="checkbox"
          name="Full metal"
        />
      </div>
  
      <div class="d-flex">
        <h5>PFM</h5>
  
        <input
          :checked="isNPAdded('PFM')"
          @click="changeNPValue('PFM')"
          class="check-input"
          type="checkbox"
          name="PFM"
        />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      changeNPValue(value) {
        if (this.$store.state.customerRequest.NP == value) {
          this.$store.state.customerRequest.NP = "";
        } else {
          this.$store.state.customerRequest.NP = value;
        }
  
        console.log(this.$store.state.customerRequest.NP);
      },
      isNPAdded(value) {
        return this.$store.state.customerRequest.NP == value;
      },
    },
  };
  </script>
  
  <style scoped>
  .d-flex {
    display: flex;
    margin-top: 20px;
  }
  .d-flex h5 {
    flex-grow: 1;
  }
  .request-holder {
    width: 40%;
    margin: auto;
  }
  .radius {
    border-radius: 30px;
  }
  .check-input {
    width: 30px;
  }
  </style>
  