<template>
  <div>
    <div v-if="loading" class="spinner">
      <img src="../../assets/images/spinner.gif" alt="" />
    </div>
    <div v-if="loading" class="login-hide"></div>
  </div>
</template>

<script>
export default {
  props: ['loading'],
  methods: {},
}
</script>

<style>
.spinner {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 500;
}
.spinner img {
  width: 8rem;
}
</style>
