<template>
  <div>
    <div
      @click="getSingleRequest"
      class="card bg-white p-3 m-3 request-card d-flex custom-auto"
    >
      <div class="custom-circle">
        <span>{{ request.id }}</span>
      </div>

      <div class="ml-4">
        <h3>{{ request.patient_name }}</h3>
        <p>{{ request.created_date }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["request"],
  methods: {
    getSingleRequest() {
      this.$store.state.customerRequest.singleRequestId = this.request.id;
      this.$router.push(this.localePath({ name: "single-request" }));
    },
  },
};
</script>

<style scoped>
.request-card {
  border-radius: 20px;
  cursor: pointer;
 
  margin: 15px auto !important;
}
.d-flex {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.custom-circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: white;
  background: #011e46;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
