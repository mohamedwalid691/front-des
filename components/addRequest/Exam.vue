<template>
  <div class="card mt-3 radius p-3">
    <h2>Exam</h2>
    <div class="d-flex">
      <h5>Veneer</h5>

      <input
        :checked="isExamAdded('Veneer')"
        @click="changeExamValue('Veneer')"
        class="check-input"
        type="checkbox"
        name="Veneer"
      />
    </div>

    <div class="d-flex">
      <h5>Crown</h5>

      <input
        :checked="isExamAdded('Crown')"
        @click="changeExamValue('Crown')"
        class="check-input"
        type="checkbox"
        name="Crown"
      />
    </div>

    <div class="d-flex">
      <h5>Inlay/Onlay</h5>

      <input
        @click="changeExamValue('Inlay/Onlay')"
        :checked="isExamAdded('Inlay/Onlay')"
        class="check-input"
        type="checkbox"
        name="Inlay/Onlay"
      />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changeExamValue(value) {
      if (this.$store.state.customerRequest.exam == value) {
        this.$store.state.customerRequest.exam = "";
      } else {
        this.$store.state.customerRequest.exam = value;
      }

      console.log(this.$store.state.customerRequest.exam);
    },
    isExamAdded(value) {
      return this.$store.state.customerRequest.exam == value;
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
