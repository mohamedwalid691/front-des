import axios from 'axios'
export default {
  hideFlash(context) {
    if (context.state.success) {
      setTimeout(() => {
        context.state.success = false
      }, 3000)
    }
  },

  async createData(
    context,
    {
      type,
      objectData,

      userToken,
    }
  ) {
    context.dispatch('startLoading')
    const token = localStorage.getItem('token')

    const config = userToken
      ? {
          headers: {
            'content-type': 'multipart/form-data',
            authorization: 'Bearer ' + token,
            lang: this.$i18n.locale,
            code: process.env.APPLICATION_CODE,
          },
        }
      : {
          headers: {
            'content-type': 'multipart/form-data',
            lang: this.$i18n.locale,
            code: process.env.APPLICATION_CODE,
          },
        }
    const fd = new FormData()
    for (const property in objectData) {
      if (objectData[property]) fd.append(property, objectData[property])
    }

    try {
      const { data } = await axios.post(
        `${process.env.BASE_URL}${type}`,
        fd,
        config
      )

      if (data.status) {
        context.dispatch(
          'reusable/successResponse',
          {
            data,
          },
          {
            root: true,
          }
        )
        return {
          status: true,
          data: data,
        }
      }
    } catch (e) {
      console.log(e)
      context.dispatch('reusable/errorResponse', e, {
        root: true,
      })
    }
  },

  async updateData(
    context,
    {
      type,
      objectData,

      userToken,
    }
  ) {
    context.dispatch('startLoading')
    const token = localStorage.getItem('token')

    const config = userToken
      ? {
          headers: {
            'content-type': 'multipart/form-data',
            authorization: 'Bearer ' + token,
            lang: this.$i18n.locale,
            code: process.env.APPLICATION_CODE,
          },
        }
      : {
          headers: {
            'content-type': 'multipart/form-data',
            lang: this.$i18n.locale,
            code: process.env.APPLICATION_CODE,
          },
        }
    const fd = new FormData()
    fd.append('_method', 'PUT')
    for (const property in objectData) {
      if (objectData[property]) fd.append(property, objectData[property])
    }

    try {
      const { data } = await axios.post(
        `${process.env.BASE_URL}${type}`,
        fd,
        config
      )

      if (data.status) {
        context.dispatch(
          'reusable/successResponse',
          {
            data,
          },
          {
            root: true,
          }
        )
        return {
          status: true,
          data: data,
        }
      }
    } catch (e) {
      context.dispatch('reusable/errorResponse', e, {
        root: true,
      })
      return {
        status: false,
      }
    }
  },

  async getData(
    context,
    {
      type,

      userToken,
    }
  ) {
    try {
      const token = localStorage.getItem('token')
      const header = userToken
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
      const { data } = await axios.get(`${process.env.BASE_URL}${type}`, header)
      if (data.status) {
        context.dispatch(
          'reusable/successResponse',
          {
            data,
          },
          {
            root: true,
          }
        )
        return {
          status: true,
          data: data,
        }
      }
    } catch (e) {
      context.dispatch('reusable/errorResponse', e, {
        root: true,
      })
    }
  },

  async getPaginationData(
    context,
    {
      type,
      page,
      role = 'admin',
      sort = null,
      sotryBy = null,
      order = null,
      orderBy = null,
    }
  ) {
    context.dispatch(
      'reusable/startLoading',
      {},
      {
        root: true,
      }
    )
    try {
      const token = localStorage.getItem('token')
      const config = {
        headers: {
          authorization: 'Bearer ' + token,
          code: process.env.APPLICATION_CODE,
        },
      }
      let taegetUrl = ''
      if (page) {
        taegetUrl = `${process.env.BASE_URL}${role}/pagination/${type}?page=${page}`
        if (sort) {
          taegetUrl += `&${sort}=${sotryBy}`
        }
        if (orderBy) {
          taegetUrl += `&orderBy=${orderBy}&order=${order}`
        }
      } else {
        taegetUrl = `${process.env.BASE_URL}${role}/pagination/${type}`
        if (sort) {
          taegetUrl += `?${sort}=${sotryBy}`
        }
        if (orderBy) {
          taegetUrl += `&${'orderBy'}=${orderBy}&"order"=${order}`
        }
      }

      const { data } = await axios.get(taegetUrl, config)
      if (data.status) {
        context.dispatch(
          'reusable/successResponse',
          {
            data,
          },
          {
            root: true,
          }
        )
        context.dispatch('reusable/assignLinks', data.data.links, {
          root: true,
        })
        return {
          status: true,
          data: data,
        }
      }
    } catch (e) {
      context.dispatch('reusable/errorResponse', e, {
        root: true,
      })
    }
  },

  async getSingleData(context, { type, id, userToken }) {
    context.dispatch(
      'reusable/startLoading',
      {},
      {
        root: true,
      }
    )
    const token = localStorage.getItem('token')

    const header = userToken
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
    try {
      const { data } = await axios.get(
        `${process.env.BASE_URL}${type}/${id}`,
        header
      )
      if (data.status) {
        context.dispatch(
          'reusable/successResponse',
          {
            data,
          },
          {
            root: true,
          }
        )
        return {
          status: true,
          data: data,
        }
      }
    } catch (e) {
      context.dispatch('reusable/errorResponse', e, {
        root: true,
      })
    }
  },

  errorResponse(context, error) {
    context.state.loading = false

    if (error.response) {
      const { data } = error.response

      context.state.message = data.message
      context.state.errArr = data.errors
    } else {
      context.state.message = error.message
    }

    context.state.success = true
    context.dispatch('hideFlash')
  },

  successResponse(context, { data }) {
    context.state.loading = false
    context.state.message = data ? data.message : null
    context.state.success = true

    context.dispatch('hideFlash')
  },
  startLoading(context) {
    context.state.errArr = {}
    context.state.loading = true
    context.state.message = ''

    context.state.success = false
  },

  async deleteData(context, { type, dataId, userToken }) {
    const token = localStorage.getItem('token')
    const config = userToken
      ? {
          headers: {
            authorization: 'Bearer ' + token,
            lang: this.$i18n.locale,
            code: process.env.APPLICATION_CODE,
          },
        }
      : {
          headers: {
            lang: this.$i18n.locale,
            code: process.env.APPLICATION_CODE,
          },
        }
    context.dispatch(
      'reusable/startLoading',
      {},
      {
        root: true,
      }
    )
    try {
      const { data } = await axios.delete(
        `${process.env.BASE_URL}${type}/${dataId}`,
        config
      )
      if (data.status) {
        context.dispatch(
          'reusable/successResponse',
          {
            data,
          },
          {
            root: true,
          }
        )
        return {
          status: true,
          data: data,
        }
      }
    } catch (e) {
      context.dispatch('reusable/errorResponse', e, {
        root: true,
      })
    }
  },

  assignLinks(context, links) {
    context.state.links = []

    if (links.length >= 3) {
      links.forEach((li, index) => {
        if (index > 0 && index <= links.length - 2) {
          context.state.links.push(li)
        }
      })
    }
  },
  async searchData(context, { type, searchBy, searchValue }) {
    const token = localStorage.getItem('token')

    try {
      context.state.links = []
      const config = {
        headers: {
          code: process.env.APPLICATION_CODE,
          authorization: 'Bearer ' + token,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
      context.dispatch('startLoading')
      const { data } = await axios.post(
        `${process.env.BASE_URL}admin/search/${type}`,
        {
          searchBy,
          searchValue,
        },
        config
      )
      if (data.status) {
        context.dispatch(
          'reusable/successResponse',
          {
            data,
          },
          {
            root: true,
          }
        )
        return {
          status: true,
          data: data,
        }
      }
    } catch (e) {
      context.dispatch('reusable/errorResponse', e, {
        root: true,
      })
      return {
        status: false,
      }
    }
  },

  async firebaseNotification(
    context,
    { to, body, title, orderId = null, type = null }
  ) {
    try {
      const config = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization:
            `key=${process.env.FIREBASE_TOKEN}`,
        },
      }
      context.dispatch(
        'reusable/startLoading',
        {},
        {
          root: true,
        }
      )

      const response = await axios.post(
        'https://fcm.googleapis.com/fcm/send',
        {
          to: to,
          notification: {
            sound: 'default',
            body,
            title,
            content_available: true,
            priority: 'high',
          },
          data: {
            sound: 'default',
            orderId,
            type,
            content_available: true,
            priority: 'high',
          },
        },
        config
      )
      context.dispatch(
        'reusable/successResponse',
        {
          data: null,
        },
        {
          root: true,
        }
      )
    } catch (e) {
      context.dispatch('reusable/errorResponse', e, {
        root: true,
      })
    }
  },
}
