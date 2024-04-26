export default {
  addToRestoration(state, restorationValue) {
    const targetRestoration = state.restoration.find(
      (re) => re == restorationValue
    );
    if (targetRestoration) {
      state.restoration = state.restoration.filter(
        (res) => res != restorationValue
      );
    } else {
      state.restoration.push(restorationValue);
    }
    console.log(state.restoration);
  },

  changeRightUpToothNumber(state, number) {
    const data = { number: 2, color: "red" };

    const isAdded = state.rightUpToothNumber.find((to) => to.number == number);
    if (isAdded) {
      state.rightUpToothNumber = state.rightUpToothNumber.filter(
        (to) => to.number != number
      );
    } else {
      state.rightUpToothNumber.push({
        number,
        color: state.fColorSelected.color,

        color2: state.sColorSelected.color,
        color3: state.tColorSelected.color,
        colorName: state.fColorSelected.name,
        color2Name: state.sColorSelected.name,
        color3Name: state.tColorSelected.name,
      });
    }

    console.log(state.rightUpToothNumber);
  },

  changeLeftUpToothNumber(state, number) {
    const data = { number: 2, color: "red" };

    const isAdded = state.leftUpToothNumber.find((to) => to.number == number);
    if (isAdded) {
      state.leftUpToothNumber = state.leftUpToothNumber.filter(
        (to) => to.number != number
      );
    } else {
      state.leftUpToothNumber.push({
        number,
        color: state.fColorSelected.color,

        color2: state.sColorSelected.color,
        color3: state.tColorSelected.color,
        colorName: state.fColorSelected.name,
        color2Name: state.sColorSelected.name,
        color3Name: state.tColorSelected.name,
      });
    }
  },

  changeRightDownToothNumber(state, number) {
    const data = { number: 2, color: "red" };

    const isAdded = state.rightDownToothNumber.find(
      (to) => to.number == number
    );
    if (isAdded) {
      state.rightDownToothNumber = state.rightDownToothNumber.filter(
        (to) => to.number != number
      );
    } else {
      state.rightDownToothNumber.push({
        number,
        color: state.fColorSelected.color,

        color2: state.sColorSelected.color,
        color3: state.tColorSelected.color,
        colorName: state.fColorSelected.name,
        color2Name: state.sColorSelected.name,
        color3Name: state.tColorSelected.name,
      });
    }
  },

  changeLeftDownToothNumber(state, number) {
    const data = { number: 2, color: "red" };

    const isAdded = state.leftDownToothNumber.find((to) => to.number == number);
    if (isAdded) {
      state.leftDownToothNumber = state.leftDownToothNumber.filter(
        (to) => to.number != number
      );
    } else {
      state.leftDownToothNumber.push({
        number,
        color: state.fColorSelected.color,

        color2: state.sColorSelected.color,
        color3: state.tColorSelected.color,
        colorName: state.fColorSelected.name,
        color2Name: state.sColorSelected.name,
        color3Name: state.tColorSelected.name,
      });
    }
  },
};
