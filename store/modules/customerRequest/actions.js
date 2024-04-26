import axios from "axios";

export default {
  async get(context) {
    try {
      const token = localStorage.getItem("token");
      const header = token
        ? {
            headers: {
              authorization: "Bearer " + token,
              lang: this.$i18n.locale,
              code: process.env.APPLICATION_CODE,
            },
          }
        : {
            lang: this.$i18n.locale,
            code: process.env.APPLICATION_CODE,
          };

      context.dispatch(
        "reusable/startLoading",
        {},
        {
          root: true,
        }
      );

      const { data } = await axios.get(
        `${process.env.BASE_URL}front-end/color`,
        header
      );
      console.log("get data");

      if (data.status) {
        context.state.fColorList = data.data.color;
        context.state.sColorList = data.data.color2;
        context.state.tColorList = data.data.color3;
        context.state.fColorSelected = {
          color: context.state.fColorList[0].color,
          name: context.state.fColorList[0].name_en,
        };
        context.state.sColorSelected = {
          color: context.state.sColorList[0].color,
          name: context.state.sColorList[0].name_en,
        };
        context.state.tColorSelected = {
          color: context.state.tColorList[0].color,
          name: context.state.tColorList[0].name_en,
        };
        context.dispatch(
          "reusable/successResponse",
          {
            data,
          },
          {
            root: true,
          }
        );

        console.log(data);
      }
    } catch (e) {
      context.dispatch("reusable/errorResponse", e, {
        root: true,
      });
    }
  },

  async getAddress(context) {
    const { data, status } = await context.dispatch(
      "reusable/getData",
      {
        type: "mobile/screen/doctor/address",
        userToken: true,
      },
      {
        root: true,
      }
    );
    if (status) {
      context.state.address = data.data;
    }
  },

  async addAddress(context) {
    const { data, status } = await context.dispatch(
      "reusable/createData",
      {
        type: "mobile/screen/doctor/address",

        objectData: {
          country: context.state.country,
          location: context.state.location,

          landmark: context.state.landmark,

          mobile: context.state.mobile,
          governorate: context.state.governorate,
        },
        userToken: true,
      },
      {
        root: true,
      }
    );

    if (status) {
      this.$router.push(this.localePath({ name: "address" }));
    }
  },

  async getSingleRequest(context, callback) {
    const { data, status } = await context.dispatch(
      "reusable/getData",
      {
        type: `mobile/screen/doctor/my-requests/files/${context.state.singleRequestId}`,
        userToken: true,
      },
      {
        root: true,
      }
    );
    if (status) {
      context.state.singleRequest = data.data;
    }
  },

  async getRequests(context) {
    const { data, status } = await context.dispatch(
      "reusable/getData",
      {
        type: "front-end/my-requests",
        userToken: true,
      },
      {
        root: true,
      }
    );
    if (status) {
      context.state.requests = data.data;
    }
  },

  async addRequest(context) {
    if (
      context.state.restoration.length ==0 ||
      context.state.rightUpToothNumber.length ==0 ||
      context.state.leftUpToothNumber.length ==0 ||
      context.state.rightDownToothNumber.length ==0 ||
      context.state.leftDownToothNumber.length ==0

   
    ) {
      context.state.error = "select all tooth you want and restoration";
      setTimeout(() => {
        context.state.error =""
      }, 1000);
      return;
    }
    const { data, status } = await context.dispatch(
      "reusable/createData",
      {
        type: "front-end/add-request",

        objectData: {
          MD4: context.state.md4,
          comment: context.state.comment,

          addresses_id: context.state.addressId,

          separated: context.state.tooth,
          tooth_number: context.state.toothNumber,
          center_name: context.state.centerName,

          doctor_name: context.state.doctorName,

          patient_name: context.state.patientName,
          exam: context.state.exam,
          zircon: context.state.zircon,

          N_P: context.state.NP,
          digital: context.state.digital,
          gender: context.state.gender,
          file: context.state.file,

          restoration: JSON.stringify(context.state.restoration),

          left_up_tooth_number: JSON.stringify(context.state.leftUpToothNumber),

          right_up_tooth_number: JSON.stringify(
            context.state.rightUpToothNumber
          ),

          left_down_tooth_number: JSON.stringify(
            context.state.leftDownToothNumber
          ),
          right_down_tooth_number: JSON.stringify(
            context.state.rightDownToothNumber
          ),
        },
        userToken: true,
      },
      {
        root: true,
      }
    );
    if (status) {
      this.$router.push(this.localePath("/"));
    }
  },
};
