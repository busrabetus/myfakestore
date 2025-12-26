import axios from 'axios'

const api = axios.create({
  baseURL: 'https://fakestoreapi.com',
  method: 'post',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default api