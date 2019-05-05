/**
 * Created by fanjing on 2019/5/5.
 */

import axios from 'axios'
const CODE_OK = 0

export function get(url) {
  return function (params) {
    return axios.get(url, {
      params
    }).then(res => {
      const { code, data } = res.data
      if (code === CODE_OK) {
        return data
      }
    })
  }
}
