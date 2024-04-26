<template>
  <div class="address-up">
    <div class="address-holder custom-auto card round p-3">
      <h2 class="text-center">{{ $t('AddAddress') }}</h2>

      <div class="input-group mt-4">
        <div class="input-group-prepend">
          <span class="input-group-text" id=""> {{ $t("Country") }} </span>
        </div>
        <input
          type="text"
          readonly
          class="form-control"
          v-model="$store.state.customerRequest.country"
        />
      </div>
      <div class="input-group mt-4">
        <div class="input-group-prepend">
          <span class="input-group-text" id="">{{ $t("Location") }}</span>
        </div>
        <input
          type="text"
          required
          class="form-control"
          v-model="$store.state.customerRequest.location"
        />
      </div>

      <div class="input-group mt-4">
        <div class="input-group-prepend">
          <span class="input-group-text" id="">  {{ $t("Landmark") }}</span>
        </div>
        <input
          type="text"
          required
          class="form-control"
          v-model="$store.state.customerRequest.landmark"
        />
      </div>

      <div class="input-group mt-4">
        <div class="input-group-prepend">
          <span class="input-group-text" id=""> {{ $t("mobile") }} </span>
        </div>
        <input
          type="number"
          required
          class="form-control"
          v-model="$store.state.customerRequest.mobile"
        />
      </div>

      <select
        class="form-select mt-4"
        aria-label="f color"
        v-model="$store.state.customerRequest.governorate"
      >
        <option v-for="gov in governorate" :key="gov" :value="gov">
          {{ gov }}
        </option>
      </select>

      <button
        @click.prevent="addAddress"
        type="submit"
        class="btn btn-primary custom-btn w-100 mt-5"
      >
        {{ $t('AddAddress') }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  layout: "site",
  data() {
    return {
      governorate: [
        "أربيل",
        "	الأنبار",
        "	بابل",
        "	بغداد",
        "البصرة",
        "دهوك",
        "القادسية",
        "ديالى",
        "ذي قار	",
        "السليمانية",
        "صلاح الدين",
        "كركوك",
        "كربلاء",
        "المثنى",
        "ميسان",
        "النجف",
        "نينوى",
        "واسط",
      ],
    };
  },
  methods: {
    addAddress() {
      this.$store.dispatch("customerRequest/addAddress");
    },
  },
};
</script>

<style>
h2 {
  margin-top: 20px;
  margin-bottom: 20px;
  color: #011e46;
}
.address-holder {

  padding-top: 30px;
  padding-bottom: 30px;
  transform: translateY(50%);
  border-radius: 20px;
}


.address-up {
  background: #e9edfa;
  min-height: 100vh;
}
.form-select {
  display: block;
  width: 100%;
  padding: 0.375rem 2.25rem 0.375rem 0.75rem;
  -moz-padding-start: calc(0.75rem - 3px);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 16px 12px;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 10px;
}

.form-select:focus {
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
</style>
