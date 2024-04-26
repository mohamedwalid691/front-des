<template>
  <div class="bg-custom-primary py-4">
    <div class="contact-holder">
      <h2 class="contact-head">{{ $t("CONTACT") }}</h2>

      <div class="mt-3"></div>

      <div class="d-flex contact-area">
        <div class="tel-area">
          <p>{{ $t("mobile") }} : {{ $store.state.home.homeData.number }}</p>

          <p>{{ $t("email") }}: {{ $store.state.home.homeData.email }}</p>
        </div>

        <div class="address-area">
          <p>{{ $store.state.home.homeData.address }}.</p>

          <div class="d-flex">
            <div class="circle-social mx-2">
              <a :href="$store.state.home.homeData.facebook"
                ><img
                  src="../../assets/images/facebook.png"
                  alt=""
                  class="face-book"
              /></a>
            </div>
            <div class="circle-social mx-2">
              <a :href="$store.state.home.homeData.instagram"
                ><img src="../../assets/images/instgram.png" alt=""
              /></a>
            </div>
            <div class="circle-social mx-2">
              <a :href="`https://wa.me/${$store.state.home.homeData.whatsapp}`"
                ><img src="../../assets/images/WhatsApp.png" alt=""
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.contact-head {
  color: #c8b88e;
  letter-spacing: 4px;
  font-weight: 300;
  text-align: center;
  margin-bottom: 20px;
  margin-bottom: 60px;
  letter-spacing: 8px;

  padding-top: 30px;
}
p {
  color: #c8b88e;
}
.contact-holder {
  width: 40%;
  margin-left: auto;
  margin-right: auto;
}

.circle-social {
  border-radius: 50%;
  width: 55px;
  background: #949494;
  height: 55px;
  display: flex;
  align-items: center;

  justify-content: center;
}

.contact-area {
  justify-content: space-between;
  flex-wrap: wrap;
}
.tel-area {
  width: 250px;
}
.address-area {
  width: 250px;
}
.circle-social img {
  width: 60px;
  display: block;
}
.circle-social .face-book {
  width: 140px !important;
  display: block;
}
</style>
