import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getter.js";
export default {
  namespaced: true,

  state() {
    return {
      restoration: [],
      exam: "",
      zircon: "",
      md4: "",
      NP: "",
      digital: "",
      gender: "Male",
      doctorName: "",
      centerName: "",
      patientName: "",
      toothNumber: "",
      tooth: "",

      comment: "",
      rightUpToothNumber: [],
      leftUpToothNumber: [],
      rightDownToothNumber: [],
      leftDownToothNumber: [],

      fColorList: [],
      sColorList: [],
      tColorList: [],

      fColorSelected: {},
      sColorSelected: "",
      tColorSelected: "",
      error:"",

      address: [],
      addressId: "",
      location: "",
      landmark: "",
      file:"",
      mobile: "",
      governorate: "أربيل",
      country: "Iraq",
      requests:[],

      singleRequest :{},
      singleRequestId:"",
    };
  },
  mutations,
  actions,
  getters,
};
