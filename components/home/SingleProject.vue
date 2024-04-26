<template>
  <div class="bg-white holder">
    <i @click="closeSingle" class="fa fa-times text-dark close-single"></i>
    <div class="single-project-card">
      <img :src="imagePath($store.state.home.selectedProject.image)" alt="" />
      <div class="content-holder">
        <h2>
          {{ $store.state.home.selectedProject[[`name_${$i18n.locale}`]] }}
        </h2>

        <div class="mt-5"></div>
        <p>
          {{ $store.state.home.selectedProject[`description_${$i18n.locale}`] }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    imagePath(path) {
      return this.$store.state.filePath + path;
    },

    closeSingle(){
        this.$store.state.home.selectedProject =""
    }
  },
};
</script>

<style scoped>
.holder {
  z-index: 2000;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
}
.single-project-card {
  padding-top: 200px;
  padding-bottom: 200px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
}
.single-project-card img {
  max-width: 800px;
  min-width: 600px;
  display: block;
  border-radius: 20px;
}

.content-holder {
max-width: 500px;
margin-left: 60px;
}
.close-single{
    position: fixed;
    top: 30px;
    right:30px;
    cursor: pointer;
    font-size: 35px;
}
</style>
