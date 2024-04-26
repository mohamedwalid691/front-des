export default {

  errorResponse(state, error) {

    state.loading = false;


    if (error.response) {
      const {
        data
      } = error.response;
      console.log(error)
      state.message = data.message;
      state.errArr = data.errors;
    } else {
      state.message = error.message
    }

    


    state.success = true;
    dispatch('hideFlash')
  },


  successResponse(state, {
    data
  }) {

    state.loading = false;
    state.message = data.message;
    state.success = true;

  dispatch('hideFlash')
  },
  startLoading(state) {
    console.log(state)
    state.errArr = {}
    state.loading = true;
    state.message = '';

    state.success = false;
  },
changeNotificationBox(state){
  state.showNotificationBox =!state.showNotificationBox;
}
,
closeNotificationBox(state){
  state.showNotificationBox =false;
}
  // assignLinks(context, links) {
  //   context.state.links=[];
  //   if (links.length >= 3) {
  //     links.forEach((li, index) => {
  //       console.log(index)
  //       if (index > 0 && index <= links.length - 2) {
  //         context.state.links.push(li)
  //       }
  //     })
  //   }
  // },
}
