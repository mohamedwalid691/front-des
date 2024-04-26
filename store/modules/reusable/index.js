import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getter.js'
export default {
  namespaced: true,

  state() {
    return {
      loading: false,
      message: "",
      success: false,
      errArr:{},
      links:[],
      showNotificationBox:false
    }
  },
  mutations,
  actions,
  getters
}
