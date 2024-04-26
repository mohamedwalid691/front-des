<template>
  <div class="bg-main">
    <div class="custom-auto">
      <h2 class="py-5">Track All new on your request</h2>

      <div class="card round comment-card my-3">
        <h3>comment1</h3>
        <p>
          {{ $store.state.customerRequest.singleRequest.admin_comment_1 }}
        </p>
      </div>

      <div class="card round comment-card my-3">
        <h3>comment2</h3>
        <p>
          {{ $store.state.customerRequest.singleRequest.admin_comment_1 }}
        </p>
      </div>
      <div class="card round comment-card my-3">
        <h3>comment3</h3>
        <p>
          {{ $store.state.customerRequest.singleRequest.admin_comment_1 }}
        </p>
      </div>

      <div class="card round comment-card my-3">
        <h3>file1</h3>
        <p>
          {{
            filePath($store.state.customerRequest.singleRequest.admin_file_1)
          }}
        </p>
      </div>

      <div class="card round comment-card my-3">
        <h3>file2</h3>
        <p>
          {{
            filePath($store.state.customerRequest.singleRequest.admin_file_2)
          }}
        </p>
      </div>

      <div class="card round comment-card my-3">
        <h3>file3</h3>
        <p>
          {{
            filePath($store.state.customerRequest.singleRequest.admin_file_3)
          }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  layout: "site",
  async created() {
    if (!this.$store.state.customerRequest.singleRequestId) {
      this.$router.push(this.localePath({ name: "requests" }));
    } else {
      await this.$store.dispatch("customerRequest/getSingleRequest");
    }
  },

  methods: {
    filePath(path) {
      return process.env.FILE_URL + path;
    },
  },
};
</script>

<style scoped>
.comment-card {
  padding: 15px;
  border-radius: 15px;
}
</style>
