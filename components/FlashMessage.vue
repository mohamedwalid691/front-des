<template>
  <div class="flash-message">
    <p class="mb-0">{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: ['message'],
}
</script>

<style scoped>
.flash-message {
  position: fixed;
  top: 20;
  top: 38px;
  right: 15px;
  font-size: 2rem;
  color: white;
  padding: 1.3rem;
  border-radius: 1rem;
  background: #0f172a;
  box-shadow: 1px 1px 5px grey;
  z-index: 10;
}
</style>
