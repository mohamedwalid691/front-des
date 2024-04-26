<template>
    <div class="card mt-3 radius p-3">
      <h2>Digital</h2>
      <div class="d-flex">
        <h5>DSD</h5>
  
        <input
          :checked="isDigitalAdded('DSD')"
          @click="changeDigitalValue('DSD')"
          class="check-input"
          type="checkbox"
          name="DSD"
        />
      </div>
  
      <div class="d-flex">
        <h5>Mock up</h5>
  
        <input
          :checked="isDigitalAdded('Mock up')"
          @click="changeDigitalValue('Mock up')"
          class="check-input"
          type="checkbox"
          name="Mock up"
        />
      </div>
  
      <div class="d-flex">
        <h5>Printed model</h5>
  
        <input
          @click="changeDigitalValue('Printed model')"
          :checked="isDigitalAdded('Printed model')"
          class="check-input"
          type="checkbox"
          name="Printed model"
        />
      </div>




      
      <div class="d-flex">
        <h5>Temporary (PMMA)</h5>
  
        <input
          @click="changeDigitalValue('Temporary (PMMA)')"
          :checked="isDigitalAdded('Temporary (PMMA)')"
          class="check-input"
          type="checkbox"
          name="Temporary (PMMA)"
        />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      changeDigitalValue(value) {
        if (this.$store.state.customerRequest.digital == value) {
          this.$store.state.customerRequest.digital = "";
        } else {
          this.$store.state.customerRequest.digital = value;
        }
  
        console.log(this.$store.state.customerRequest.digital);
      },
      isDigitalAdded(value) {
        return this.$store.state.customerRequest.digital == value;
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
  