<template>
    <div class="card mt-3 radius p-3">
        <h2>Zircon</h2>
        <div class="d-flex">
          <h5>With ceramic build up</h5>
  
          <input
            :checked="isZirconAdded('With ceramic build up')"
            @click="changeZirconValue('With ceramic build up')"
            class="check-input"
            type="checkbox"
            name="With ceramic build up"
          />
        </div>
  
        <div class="d-flex">
          <h5>With ceramic facing (cut back)</h5>
  
          <input
            :checked="isZirconAdded('With ceramic facing (cut back)')"
            @click="changeZirconValue('With ceramic facing (cut back)')"
            class="check-input"
            type="checkbox"
            name="With ceramic facing (cut back)"
          />
        </div>
  
        <div class="d-flex">
          <h5>Full anatomic</h5>
  
          <input
            @click="changeZirconValue('Full anatomic')"
            :checked="isZirconAdded('Full anatomic')"
            class="check-input"
            type="checkbox"
            name="Full anatomic"
          />
        </div>
      </div>
</template>

<script>
export default {
    methods: {
        changeZirconValue(value) {
      if (this.$store.state.customerRequest.zircon == value) {
        this.$store.state.customerRequest.zircon = "";
      } else {
        this.$store.state.customerRequest.zircon = value;
      }

      console.log(this.$store.state.customerRequest.zircon);
    },
    isZirconAdded(value) {
      return this.$store.state.customerRequest.zircon == value;
    },
  },
}
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