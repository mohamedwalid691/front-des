import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getter.js";
export default {
  namespaced: true,

  state() {
    return {
      sliders: [],

      projects: [],
      selectedProject:"",
      homeData:{},
      suppliers:[],
    };
  },
  mutations,
  actions,
  getters,
};
