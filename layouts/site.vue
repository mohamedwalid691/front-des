<template>
  <div >
    <Spinner :loading="$store.state.reusable.loading" />

    
    <img @click="goHome" class="logo-image" src="../assets/images/logo.png" alt="">
    <nuxt />
  </div>
</template>

<script>
import FlashMessage from "~/components/FlashMessage.vue";

import Spinner from "~/components/reusable/Spinner.vue";
export default {
  methods: {
    goHome(){

      this.$router.push(this.localePath("/"));
    }
  },

  components: {
    Spinner,
    FlashMessage,
  },
  
  head() {
    return this.$nuxtI18nHead();
  },
};
</script>

<style scoped>
.logo-image{
  position: fixed;
  top: 20px;
  left: 20px;
  display: block;
  width: 100px;
  z-index: 20000;
  cursor: pointer;

}

</style>
