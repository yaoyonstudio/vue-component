import axios from 'axios'
let apiUrl = 'http://localhost:3000'

let ajax = function (url, method, params, fn, errFn) {
  return axios({
    url: url,
    method: method,
    data: params
  }).then((res) => {
    console.log(res)
    if (res.status) {
      fn(res.data)
    } else {
      errFn(res)
    }
  }, (error) => {
    console.log(error)
    errFn(error)
  })
}

export default {
  public: {
    getSliders (params, fn, errFn) {
      ajax.call(this, apiUrl + '/sliders', 'get', params, fn, errFn)
    },
    getIndustryData (params, fn, errFn) {
      ajax.call(this, apiUrl + '/industry', 'get', params, fn, errFn)
    }
  }
}
