import axios from 'axios'

export default {
  getReps: async function (state: string) {
    return axios.get('/.netlify/functions/rep-by-state', {
      params: {
        state,
        type: 'rep',
      },
    })
  },
  getSens: async function (state: string) {
    return axios.get('/.netlify/functions/rep-by-state', {
      params: {
        state,
        type: 'sen',
      },
    })
  },
}
