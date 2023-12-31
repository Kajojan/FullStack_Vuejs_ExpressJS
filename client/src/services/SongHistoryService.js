import Api from './Api'

export default {
  index(params) {
    return Api().get('history', {
      params: params
    })
  },
  post(history) {
    return Api().post('history', history)
  },
}
