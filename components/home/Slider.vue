<template>
  <div class="slider">
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div
          v-for="slider in $store.state.home.sliders"
          :key="slider.id"
          class="carousel-item"
          :class="{ active: slider.id == 1 }"
        >
          <img class="d-block w-100" :src="imagePath(slider.image)" alt="" />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    imagePath(path) {
      return this.$store.state.filePath + path;
    },
  },
};
</script>

<style scoped>

img {
  height: 80vh;
  background-size: cover;
}
</style>
