<template>
  <div class="request-up">
    <flash-message
    
    v-if="$store.state.reusable.success"
    :message="$store.state.reusable.message"
    />

    <flash-message
    
    v-if="$store.state.customerRequest.error"
    :message="$store.state.customerRequest.error"
    />
    <form class="needs-validation">
      <div class="request-holder custom-auto">
        <div class="card mt-3 radius p-3">
          <h2>Type of restoration</h2>
          <div class="d-flex">
            <h5>Crown and bridge</h5>

            <input
              @click="addToRestoration('Crown and bridge')"
              class="check-input"
              type="checkbox"
              name="Crown and bridge"
            />
          </div>

          <div class="d-flex">
            <h5>Inlay , Onlay, overlay and veneer</h5>

            <input
              @click="addToRestoration('Inlay , Onlay, overlay and veneer')"
              class="check-input"
              type="checkbox"
              name="Inlay , Onlay, overlay and veneer"
            />
          </div>

          <div class="d-flex">
            <h5>Cement retain implant crown and bridge</h5>

            <input
              @click="
                addToRestoration('Cement retain implant crown and bridge')
              "
              class="check-input"
              type="checkbox"
              name="Cement retain implant crown and bridge"
            />
          </div>
          <div class="d-flex">
            <h5>Screw retain implant crown and bridge</h5>

            <input
              @click="addToRestoration('Screw retain implant crown and bridge')"
              class="check-input"
              type="checkbox"
              name="Screw retain implant crown and bridge"
            />
          </div>

          <div class="d-flex">
            <h5>removable</h5>

            <input
              @click="addToRestoration('removable')"
              class="check-input"
              type="checkbox"
              name="removable"
            />
          </div>
        </div>

        <exam />
        <zircon />
        <MD />
        <NP />
        <digital />
        <tooth-color />
        <gender />
        <tooth />

        <note />

        <div class="card mt-3 radius p-3">
          <h2>File</h2>

          <div class="mb-3">
            <input class="form-control" type="file" id="formFile"
            
            @input="selectImage"
            />
          </div>
        </div>

        <div class="mt-3"></div>

        <button
          @click.prevent="addRequest"
          class="btn btn-primary w-100 custom-btn"
          type=""
        >
          submit request
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import Digital from "~/components/addRequest/Digital.vue";
import Exam from "~/components/addRequest/Exam.vue";
import Gender from "~/components/addRequest/Gender.vue";
import MD from "~/components/addRequest/MD.vue";
import Note from "~/components/addRequest/Note.vue";
import NP from "~/components/addRequest/NP.vue";
import Tooth from "~/components/addRequest/Tooth.vue";
import ToothColor from "~/components/addRequest/ToothColor.vue";
import Zircon from "~/components/addRequest/Zircon.vue";
import FlashMessage from '~/components/FlashMessage.vue';
export default {
  // middleware: ['autologin'],
  layout: "site",

  async created() {
    console.log("done");
    this.$store.dispatch("autoLogin").then((da) => {
      if (!this.$store.state.isAuth) {
        this.$router.push(this.localePath({ name: "auth" }));
      } else {
        if (!this.$store.state.customerRequest.addressId) {
          this.$router.push(this.localePath({ name: "address" }));
        }
      }
    });
  },

  components: {
    Exam,
    Zircon,
    MD,
    NP,
    Digital,
    Gender,
    Tooth,
    ToothColor,
    Note,
    FlashMessage,
  },
  methods: {
    addRequest() {
      this.$store.dispatch("customerRequest/addRequest");
    },

    addToRestoration(value) {
      this.$store.commit("customerRequest/addToRestoration", value);
    },

    selectImage(e) {
     
     this.$store.state.customerRequest.file = e.target.files[0];
     console.log(this.$store.state.customerRequest.file);
   },
  },
};
</script>

<style scoped>
.d-flex {
  display: flex;
  margin-top: 20px;
}
.d-flex h5 {
  flex-grow: 1;
}
.request-up {
  background: #e9edfa;
}
.request-holder {

  padding-top: 30px;
  padding-bottom: 30px;
}
.radius {
  border-radius: 30px;
}
.check-input {
  width: 30px;
}

.login-card {
  position: fixed;
  top: 20px;
  right: 20px;
  background: #000;
}
</style>
