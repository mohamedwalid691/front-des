import Vuex from "vuex";

import home from "./modules/home/index.js";
import auth from "./modules/auth/index.js";
import customerRequest from "./modules/customerRequest/index.js";

import reusable from "./modules/reusable/index.js";
import axios from "axios";

const createStore = () => {
  return new Vuex.Store({
    modules: {
      reusable,
      home,
      auth,
      customerRequest,

    },
    state: {
      adminState: {},
      notifications: [],
      userState: {},
      doctorState: {},
      roles: [],
      isAuth: false,
      filePath: process.env.FILE_URL,
    },
    mutations: {
      showState(state, action) {
        const hasPermission = state.roles.find((ro) => ro.name_en == action);
        if (hasPermission) return true;
        else return false;
      },
      assignUser(state, { user, token ,notifications}) {
        localStorage.setItem("token", token);
        state.notifications=notifications;

        state.isAuth = true;
        state.userState = user;
   
      },
      logout(state) {
        (state.adminState = {}), (state.role = ""), (state.isAuth = false);
        localStorage.removeItem("token");

        this.$router.push(this.localePath("/"));
      },
     
    },
    actions: {
      async login(context, { email, password, role = "doctor" }) {
        try {
          context.dispatch(
            "reusable/startLoading",
            {},
            {
              root: true,
            }
          );
          const config = {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          };
          const { data } = await axios.post(
            `${process.env.BASE_URL}login`,
            {
              email,
              password,
              role,
            },
            config
          );

          if (data.status) {
            context.dispatch(
              "reusable/successResponse",
              {
                data,
              },
              {
                root: true,
              }
            );
            context.commit("assignUser", {
              user: data.data,
              token: data.data.token,
            });

            this.$router.push(this.localePath('/'));
          }
        } catch (e) {
          context.dispatch("reusable/errorResponse", e, {
            root: true,
          });
        }
      },











      async register(context, { email, password,name,mobile, role = "doctor" }) {
        try {
          context.dispatch(
            "reusable/startLoading",
            {},
            {
              root: true,
            }
          );
          const config = {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          };
          const { data } = await axios.post(
            `${process.env.BASE_URL}register`,
            {
              email,
              password,
              name,
              mobile,
              role,
            },
            config
          );

          if (data.status) {
            context.dispatch(
              "reusable/successResponse",
              {
                data,
              },
              {
                root: true,
              }
            );
            context.commit("assignUser", {
              user: data.data,
              token: data.data.token,
            });

            this.$router.push(this.localePath('/'));
          }
        } catch (e) {
          context.dispatch("reusable/errorResponse", e, {
            root: true,
          });
        }
      },




      async autoLogin(context) {
        const token = localStorage.getItem("token");
        console.log("here is token");
        console.log(token);
        if (token) {
          try {
            const { data } = await axios.get(
              `${process.env.BASE_URL}user/doctor`,
              {
                headers: {
                  authorization: "Bearer " + token,
                  code: process.env.APPLICATION_CODE,
                },
              }
            );
            console.log("data is hhere");

            console.log(data);
            

            if (data.status) {
              context.commit("assignUser", {
                user: data.data,
                token: token,
                notifications:data.notifications

              });
              return true;
            }
          } catch (e) {
            console.log(e);
          }
        }
      },
      async changePassword(context, { newPassword, oldPassword }) {
        try {
          context.dispatch(
            "reusable/startLoading",
            {},
            {
              root: true,
            }
          );
          const token = localStorage.getItem("token");
          const config = {
            headers: {
              code: process.env.APPLICATION_CODE,
              authorization: "Bearer " + token,
            },
          };
          const { data } = await axios.post(
            `${process.env.BASE_URL}change-password`,
            {
              newPassword,
              oldPassword,
            },
            config
          );

          if (data.status) {
            context.dispatch(
              "reusable/successResponse",
              {
                data,
              },
              {
                root: true,
              }
            );
          }
        } catch (e) {
          console.log(e);
          context.dispatch("reusable/errorResponse", e, {
            root: true,
          });
        }
      },
    },
  });
};
export default createStore;
