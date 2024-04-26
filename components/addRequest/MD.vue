<template>
  <div class="card mt-3 radius p-3">
    <h2>MD4</h2>
    <div class="d-flex">
      <h5>Acrylic</h5>

      <input
        :checked="isMDAdded('Acrylic')"
        @click="changeMDValue('Acrylic')"
        class="check-input"
        type="checkbox"
        name="Acrylic"
      />
    </div>

    <div class="d-flex">
      <h5>Flex</h5>

      <input
        :checked="isMDAdded('Flex')"
        @click="changeMDValue('Flex')"
        class="check-input"
        type="checkbox"
        name="Flex"
      />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changeMDValue(value) {
      if (this.$store.state.customerRequest.md4 == value) {
        this.$store.state.customerRequest.md4 = "";
      } else {
        this.$store.state.customerRequest.md4 = value;
      }

      console.log(this.$store.state.customerRequest.md4);
    },
    isMDAdded(value) {
      return this.$store.state.customerRequest.md4 == value;
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
</style>
