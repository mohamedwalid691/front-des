<template>
  <div class="auth-holder custom-auto">
    <div v-if="$store.state.auth.page == 'Login'">
      <div class="bg-white card round auth-card p-4">
        <h2 class="text-center">Welcome Back</h2>
        <form>
          <div class="form-group">
            <input
              type="email"
              class="form-control custom-input"
              id="email"
              placeholder="Email"
              v-model="email"
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control custom-input"
              id="password"
              v-model="password"
              placeholder="Password"
            />
          </div>

          <button
            @click.prevent="login"
            type="submit"
            class="btn btn-primary custom-btn w-100"
          >
            Sing in
          </button>
        </form>

        <div class="mt-3"></div>

        <div class="hr-older">
          <hr />
          <span>or</span>
        </div>

        <div class="mt-3"></div>

        <p class="text-center">
          if you don't have an account
          <span @click="changePage('Register')" class="text-button"
            >register</span
          >
        </p>
      </div>
    </div>

    <div v-else>
      <div class="bg-white card round auth-card p-4">
        <h2 class="text-center">Hello</h2>
        <form>
          <div class="form-group">
            <input
              type="text"
              class="form-control custom-input"
              id="name"
              placeholder="name"
              v-model="name"
            />
          </div>
          <div class="form-group">
            <input
              type="email"
              class="form-control custom-input"
              id="email"
              placeholder="Email"
              v-model="email"
            />
          </div>

          <div class="form-group">
            <input
              type="text"
              class="form-control custom-input"
              id="mobile"
              placeholder="mobile"
              v-model="mobile"
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control custom-input"
              id="password"
              placeholder="Password"
              v-model="password"
            />
          </div>

          <button
            @click.prevent="register"
            type="submit"
            class="btn btn-primary custom-btn w-100"
          >
            Sing Up
          </button>
        </form>

        <div class="mt-3"></div>

        <div class="hr-older">
          <hr />
          <span>or</span>
        </div>

        <div class="mt-3"></div>

        <p class="text-center">
          I have an account
          <span @click="changePage('Login')" class="text-button">login</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "site",
  methods: {
    changePage(page) {
      this.$store.state.auth.page = page;
    },

    async login() {
      try {
        await this.$store.dispatch("login", {
          email: this.email,
          password: this.password,
        });
      } catch (e) {
        console.log(e);
      }
    },

    async register() {
      try {
        await this.$store.dispatch("register", {
          email: this.email,
          password: this.password,
          mobile: this.mobile,
          name: this.name,
        });
      } catch (e) {
        console.log(e);
      }
    },
  },

  data() {
    return {
      email: "",
      password: "",
      name: "",
      mobile: "",
    };
  },
};
</script>

<style scoped>
.auth-holder {
  transform: translateY(50%);
}
h2 {
  margin-top: 20px;
  margin-bottom: 20px;
  color: #011e46;
}
.auth-card {
  border-radius: 20px;
}

.custom-input {
  border-radius: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
}
.custom-input:focus {
  border: 1px solid #011e46;
}
.hr-older {
  position: relative;
}
.hr-older span {
  position: absolute;
  top: -3px;
  color: #011e46;
  font-size: 20px;
  left: 50%;
}
p {
  color: #bdbdbd;
}
.text-button {
  color: #011e46;
  font-weight: bold;
  cursor: pointer;
}
</style>
