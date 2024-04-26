<template>
  <div class="project-area bg-custom-primary">
    <h2 class="project-head">{{ $t('OurProject') }}</h2>

    <div id="projectController" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div
          v-for="pro in $store.state.home.projects"
          :key="pro.id"
          class="carousel-item"
          :data-image="'image' - pro.id"
          :class="{ active: pro.id == 1 }"
        >
          <img  @click="changeSelectedProject(pro)" class="d-block w-100 pointer" :src="imagePath(pro.image)" alt="" />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#projectController"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#projectController"
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

  data() {
    return {
      activeImage: "",
    };
  },
  methods: {
    changeSelectedProject(project){
      this.$store.state.home.selectedProject =project
      
    },
    imagePath(path) {
      return this.$store.state.filePath + path;
    },

    changeActiveImage(targetImage) {
      const fullSrc = process.env.FILE_URL + targetImage;
      const sliderImage = document.querySelector(`img[src='login']`);
      console.log(sliderImage);

      const images = document.querySelectorAll(".carousel-item");
      images.forEach((im) => im.classList.remove("active"));
      console.log(images);
    },
  },
};
</script>

<style scoped>
.project-area {
  padding-top: 30px;
  padding-bottom: 30px;
}

.project-head {
  color: #c8b88e;
  letter-spacing: 4px;
  font-weight: 300;
  text-align: center;
  margin-bottom: 20px;
  margin-bottom: 60px;

  padding-top: 30px;
}
#projectController {
  width: 50%;
  margin: auto;
}

#projectController .carousel-item img {
  height: 300px;
}
.small-image {
  display: flex;
  flex-direction: row;
  width: 50%;
  margin: auto;
  overflow: hidden;
  margin-top: 20px;
}
.small-image img {
  width: 100px;
  cursor: pointer;
  margin: 20px;
}
.pointer{
  cursor: pointer;
}
</style>
