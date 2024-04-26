import axios from 'axios'

export default {



  async get (context){

    try {
      const token = localStorage.getItem('token')
      const header = token
        ? {
            headers: {
              authorization: 'Bearer ' + token,
              lang: this.$i18n.locale,
              code: process.env.APPLICATION_CODE,
            },
          }
        : {
            lang: this.$i18n.locale,
            code: process.env.APPLICATION_CODE,
          }
         
      context.dispatch(
        'reusable/startLoading',
        {},
        {
          root: true,
        }
      )
    
      const { data } = await axios.get(`${process.env.BASE_URL}front-end/home`, header)
      console.log("get data");
      

      if (data.status) {
        context.state.sliders=data.data.slider
        context.state.projects=data.data.project
        context.state.homeData=data.data.homeData

        context.state.suppliers = JSON.parse(context.state.homeData.suppliers) 
        
        context.dispatch(
          'reusable/successResponse',
          {
            data,
          },
          {
            root: true,
          }
        )
     

        console.log(data);

      }
    } catch (e) {
     
      context.dispatch('reusable/errorResponse', e, {
        root: true,
      })
    }
  }


}
