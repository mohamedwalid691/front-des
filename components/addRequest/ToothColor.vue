<template>
  <div class="card mt-3 radius p-3">
    <h2>Tooth Color</h2>

    <div>
      <div class="tooth-color-holder">
        <select
          class="form-select"
          aria-label="f color"
          v-model="$store.state.customerRequest.fColorSelected"
        >
          <option
            v-for="tooth in $store.state.customerRequest.fColorList"
            :key="tooth.id"
            :value="{ color: tooth.color, name: tooth.name_en }"
            @click="changeColorName"
          >
            {{ tooth.name_en }}
          </option>
        </select>
        <div class="divider-color my-3"></div>

        <select
          class="form-select"
          aria-label="s color"
          v-model="$store.state.customerRequest.sColorSelected"
        >
          <option
            v-for="tooth in this.$store.state.customerRequest.sColorList"
            :key="tooth.id"
            :value="{ color: tooth.color, name: tooth.name_en }"
          >
            {{ tooth.name_en }}
          </option>
        </select>

        <div class="divider-color my-3"></div>

        <select
          class="form-select"
          aria-label="t color"
          v-model="$store.state.customerRequest.tColorSelected"
        >
          <option
            v-for="tooth in this.$store.state.customerRequest.tColorList"
            :key="tooth.id"
            :value="{ color: tooth.color, name: tooth.name_en }"
          >
            {{ tooth.name_en }}
          </option>
        </select>
      </div>
    </div>

    <div class="d-flex">
      <div
        @click="changeRightUpToothNumber(num)"
        class="tooth-holder"
        v-for="num in 8"
        :key="num"
      >
        <p :style="{ background: isRightUpTootAdded(num) }" class="tooth">
          {{ num }}
        </p>
      </div>
    </div>

    <div class="d-flex left-tooth">
      <div
        @click="changeLeftUpToothNumber(num)"
        class="tooth-holder"
        v-for="num in 8"
        :key="num"
      >
        <p :style="{ background: isLeftUpTootAdded(num) }" class="tooth">
          {{ num }}
        </p>
      </div>
    </div>

    <div class="mt-3"></div>
    <div class="divider"></div>

    <div class="mt-3"></div>

    <div class="d-flex">
      <div
        @click="changeRightDownToothNumber(num)"
        class="tooth-holder"
        v-for="num in 8"
        :key="num"
      >
        <p :style="{ background: isRightDownTootAdded(num) }" class="tooth">
          {{ num }}
        </p>
      </div>
    </div>

    <div class="d-flex left-tooth">
      <div
        @click="changeLeftDownToothNumber(num)"
        class="tooth-holder"
        v-for="num in 8"
        :key="num"
      >
        <p :style="{ background: isLeftDownTootAdded(num) }" class="tooth">
          {{ num }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async created() {
    await this.$store.dispatch("customerRequest/get");
  },
  methods: {
    changeColorName(e) {
      console.log(e.target);
    },
    changeRightUpToothNumber(num) {
      this.$store.commit("customerRequest/changeRightUpToothNumber", num);
    },

    isRightUpTootAdded(num) {
      const isAdded = this.$store.state.customerRequest.rightUpToothNumber.find(
        (to) => to.number == num
      );
      if (isAdded) {
        return isAdded.color;
      } else {
        return "#fff59d";
      }
    },

    changeLeftUpToothNumber(num) {
      this.$store.commit("customerRequest/changeLeftUpToothNumber", num);
    },

    isLeftUpTootAdded(num) {
      const isAdded = this.$store.state.customerRequest.leftUpToothNumber.find(
        (to) => to.number == num
      );
      if (isAdded) {
        return isAdded.color;
      } else {
        return "#fff59d";
      }
    },

    changeRightDownToothNumber(num) {
      this.$store.commit("customerRequest/changeRightDownToothNumber", num);
    },

    isRightDownTootAdded(num) {
      const isAdded =
        this.$store.state.customerRequest.rightDownToothNumber.find(
          (to) => to.number == num
        );
      if (isAdded) {
        return isAdded.color;
      } else {
        return "#fff59d";
      }
    },

    changeLeftDownToothNumber(num) {
      this.$store.commit("customerRequest/changeLeftDownToothNumber", num);
    },

    isLeftDownTootAdded(num) {
      const isAdded =
        this.$store.state.customerRequest.leftDownToothNumber.find(
          (to) => to.number == num
        );
      if (isAdded) {
        return isAdded.color;
      } else {
        return "#fff59d";
      }
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
.request-holder {
  width: 40%;
  margin: auto;
}
.radius {
  border-radius: 30px;
}
.check-input {
  width: 30px;
}
.tooth {
  margin: 10px;
  margin-top: 0;
  margin-bottom: 1rem;
  padding: 10px;
  background: #fff59d;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  text-align: center;
}

.left-tooth {
  justify-content: end;
}
.divider {
  height: 2px;
  width: 80%;
  background: #eeeeee;
}
.divider-color {
  height: 2px;
  width: 100px;
  background: #eeeeee;
}
.tooth-holder {
  cursor: pointer;
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
  width: 100px;
}

.tooth-color-holder {
  border: 1px solid #011e46;
  border-top-left-radius: 70px;
  border-top-right-radius: 70px;
  padding: 24px;
  width: 150px;
}
.form-select:focus {
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
</style>
