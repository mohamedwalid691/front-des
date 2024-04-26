<template>
  <div class="address-up">
    <div class="add-address-card btn custom-btn">
      <nuxt-link :to="localePath({ name: 'add-address' })">
        <i class="fas fa-plus text-white"></i>
      </nuxt-link>
    </div>

    <div class="custom-auto">


      <address-card
      v-for="address in $store.state.customerRequest.address"
      :key="address.id"
      :address="address"
    />
    </div>

  </div>
</template>

<script>
import AddressCard from "~/components/address/AddressCard.vue";
export default {
  layout: "site",
  components: { AddressCard },
  async created() {
    await this.$store.dispatch("customerRequest/getAddress");
  },
};
</script>

<style scoped>
.address-up {
  background: #e9edfa;
  padding: 20px;
  min-height: 100vh;
}
.add-address-card {
  position: fixed;
  bottom: 10px;
  right: 10px;
  color: white;
}
.add-address-card a {
  color: white;
  text-decoration: none;
  display: block;
}
</style>
