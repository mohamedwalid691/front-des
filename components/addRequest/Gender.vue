<template>
  <div class="card mt-3 radius p-3">
    <h2>Info</h2>
    <div class="d-flex">
      <h5>Male</h5>

      <input
        :checked="isGenderAdded('Male')"
        @click="changeGenderValue('Male')"
        class="check-input"
        type="checkbox"
        name="Male"
      />
    </div>

    <div class="d-flex">
      <h5>Female</h5>

      <input
        :checked="isGenderAdded('Female')"
        @click="changeGenderValue('Female')"
        class="check-input"
        type="checkbox"
        name="Female"
      />
    </div>

    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text" id="">Center Name</span>
      </div>
      <input
        type="text"
        required
        class="form-control"
        v-model="$store.state.customerRequest.centerName"
      />
    </div>

    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text" id="">Doctor Name</span>
      </div>
      <input
        type="text"
        class="form-control"
        required
        v-model="$store.state.customerRequest.doctorName"
      />
    </div>

    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text" id="">Patient Name</span>
      </div>
      <input
        type="text"
        class="form-control"
        v-model="$store.state.customerRequest.patientName"
        required
      />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changeGenderValue(value) {
      this.$store.state.customerRequest.gender = value;
      // if (this.$store.state.customerRequest.gender == value) {
      //   this.$store.state.customerRequest.gender = "";
      // } else {
      //   this.$store.state.customerRequest.gender = value;
      // }

      console.log(this.$store.state.customerRequest.gender);
    },
    isGenderAdded(value) {
      return this.$store.state.customerRequest.gender == value;
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
.input-group {
  margin-top: 15px;
}
</style>
