<template>
  <div class="mission-area bg-custom-primary">
    <h2 class="mission-head">{{ $t("OurMissionandVision") }}</h2>
    <div class="mission-vision">
      <img src="../../assets/images/Image 16-02-2022 at 2_18 PM.png" alt="" />
      <div class="vision-area">
        <h3>{{ $t("Mission") }}</h3>
        <p>
          <!-- Dental lab specialized in construction of dental prosthesis using most
          updated technology available nowadays. We provide services for all
          dental practitioners, dental clinics, and dental centers in Iraq
          locally and on an international level as well thanks to our digital
          workflow. In our lab we are combining the latest technology and top
          brand machines with well trained and highly experienced dental
          technicians and supervisors to craft scientific prosthesis and to
          deliver our best work to our kind dentists. -->


          {{ $store.state.home.homeData[`mission_${$i18n.locale}`] }}
        </p>

        <div></div>

        <h3>{{ $t("Vision") }}</h3>
        <p>
          {{ $store.state.home.homeData[`vision_${$i18n.locale}`] }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.mission-area {
  padding-top: 30px;
  padding-bottom: 30px;
}
.mission-vision {
  display: flex;
  flex-wrap: wrap;
  width: 60%;
  flex-direction: row;
  align-items: center;
  margin: auto;
}
.mission-vision img {
  width: 400px;
  display: block;
  height: 250px;
}
.vision-area {
  margin-left: 30px;
  width: 450px;
  color: white;
}
.mission-head {
  color: #c8b88e;
  letter-spacing: 4px;
  font-weight: 300;
  text-align: center;
  margin-bottom: 20px;
  margin-bottom: 60px;

  padding-top: 30px;
}
.mission-vision h3 {
  color: #c8b88e;
}
</style>
