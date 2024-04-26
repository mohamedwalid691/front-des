<template>
  <div :class="$i18n.locale == 'ar' ? 'rtl-class' : ''">
    <div class="login-card d-flex">
      <div v-if="$store.state.isAuth">
        <div class="dropdown show">
          <a
            class="btn btn-secondary dropdown-toggle"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Actions
          </a>

          <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <nuxt-link :to="localePath({ name: 'address' })">
              Address</nuxt-link
            >
            <nuxt-link :to="localePath({ name: 'requests' })">
              Requests</nuxt-link
            >

            <a class="btn pointer" type="button" @click.prevent="logout">
              logout</a
            >
          </div>
        </div>

      </div>
      <div class="pointer"  type="button"  @click="goAuth" v-else>
        login
      </div>

      


      <nuxt-link
      v-if="$i18n.locale =='en'"
      class="text-capitalize btn text-white border-0 mx-2 d-block text-start font-wight"
      :to="switchLocalePath('ar')"
      >Arabic</nuxt-link
    >

    <nuxt-link
    v-else
    class="text-capitalize btn text-white border-0 mx-2 d-block text-start font-wight"
    :to="switchLocalePath('en')"
    >English</nuxt-link
  >
    </div>
    <slider />
    <suppliers />
    <misson />
    <project />
    <contact />
    <single-project v-if="$store.state.home.selectedProject" />
  </div>
</template>

<script>
import Contact from "~/components/home/Contact.vue";
import Misson from "~/components/home/Misson.vue";
import Project from "~/components/home/Project.vue";
import SingleProject from "~/components/home/SingleProject.vue";
import Slider from "~/components/home/Slider.vue";
import Suppliers from "~/components/home/Suppliers.vue";
export default {
  layout: "site",
  components: { Slider, Suppliers, Misson, Project, SingleProject, Contact },

  async created() {
    await this.$store.dispatch("home/get");

    await this.$store.dispatch("autoLogin");
  },

  methods:{
    logout(){
      this.$store.commit("logout");
    },
    goAuth(){
      this.$router.push(this.localePath({ name: "auth" }));
    }
  }
};
</script>

<style scoped>
.login-card {
  position: fixed;
  top: 20px;
  right: 20px;
  background: #011e46;
  z-index: 500;
  padding: 15px 20px;
  border-radius: 23px;
  color: white;
}
.login-card a {
  text-decoration: none;
  color: white;
  display: block;
}
#dropdownMenuLink {
  border: none;
  background: transparent;
}

.dropdown-menu a {
  color: black;
  display: block;
  padding: 10px;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
}
.pointer{
  cursor: pointer;
}
</style>
