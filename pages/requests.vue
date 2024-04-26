<template>
  <div class="request-up">
    <request-card
      v-for="request in $store.state.customerRequest.requests"
      :key="request.id"
      :request="request"
    />
  </div>
</template>

<script>
import RequestCard from "~/components/requests/RequestCard.vue";
export default {
  layout: "site",
  components: { RequestCard },
  async created() {
    await this.$store.dispatch("customerRequest/getRequests");
  },
};
</script>

<style scoped>
.request-up {
  background: #e9edfa;
  padding: 20px;
  min-height: 100vh;
}
</style>
