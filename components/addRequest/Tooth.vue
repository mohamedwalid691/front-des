<template>
  <div class="card mt-3 radius p-3">
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text" id="">Number of tooth</span>
      </div>
      <input
        type="number"
        required
        class="form-control"
        v-model="$store.state.customerRequest.toothNumber"
      />
    </div>
    <div class="d-flex">
      <h5>Connected</h5>

      <input
        :checked="isToothAdded('Connected')"
        @click="changeToothValue('Connected')"
        class="check-input"
        type="checkbox"
        name="Connected"
      />
    </div>

    <div class="d-flex">
      <h5>Separated</h5>

      <input
        :checked="isToothAdded('Separated')"
        @click="changeToothValue('Separated')"
        class="check-input"
        type="checkbox"
        name="Separated"
      />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changeToothValue(value) {
      if (this.$store.state.customerRequest.tooth == value) {
        this.$store.state.customerRequest.tooth = "";
      } else {
        this.$store.state.customerRequest.tooth = value;
      }

      console.log(this.$store.state.customerRequest.tooth);
    },
    isToothAdded(value) {
      return this.$store.state.customerRequest.tooth == value;
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
