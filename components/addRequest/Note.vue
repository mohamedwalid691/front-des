<template>
  <div class="card mt-3 radius p-3">
    <h2>Note</h2>

    <div class="mb-3">
      <label for="comment" class="form-label">Comment</label>
      <textarea
        v-model="$store.state.customerRequest.comment"
        class="form-control"
        id="comment"
      ></textarea>
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
