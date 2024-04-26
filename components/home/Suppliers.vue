<template>
  <div class="suppliers bg-white">
    <h2 class="supply-head">{{ $t('OUROFFICIALSUPPLIERS') }}</h2>
    <div class="images-area">
      <img v-for="img in $store.state.home.suppliers" :key="img"  :src="imagePath(img)" alt="" />
  
    </div>
  </div>
</template>

<script>
export default {

 methods:{
  imagePath(path) {
      return this.$store.state.filePath + path;
    },
 }
};
</script>

<style scoped>
.suppliers {
  padding: 30px 0px;
}

.images-area {
  width: 40%;
  margin: auto;
  display: flex;

  flex-direction: row;
  flex-wrap: wrap;
}
.images-area img {
  display: block;
  width: 150px;
  margin: 40px;
}
.supply-head {
  color: #c8b88e;
  letter-spacing: 4px;
  font-weight: 300;
  text-align: center;
  margin-bottom: 20px;
}
</style>
