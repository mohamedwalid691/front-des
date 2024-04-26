<template>
  <div>
    <div @click="goToRequest" class="card bg-white p-4 m-5 address-card">
      <div class="d-flex">
        <h5>Location :</h5>
        <h5>{{ address.location }}</h5>
      </div>

      <div class="d-flex">
        <h5>Governorate :</h5>
        <h5>{{ address.governorate }}</h5>
      </div>

      <div class="d-flex">
        <h5>Mobile :</h5>
        <h5>{{ address.mobile }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["address"],
  methods: {
    goToRequest() {
      this.$store.state.customerRequest.addressId = this.address.id;

      this.$router.push(this.localePath({ name: "add-request" }));
    },
  },
};
</script>

<style scoped>
.address-card {
  border-radius: 20px;
  cursor: pointer;
}
</style>
