import axios from 'axios'
import Cookies from 'js-cookie'

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

instance.interceptors.request.use(
  config => {
    config.headers.Authorization = `Bearer ${Cookies.get('access_token')}`
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

declare namespace EndpointTypes {
  type get = '/profile' | '/profile/inventory' | '/sell' | '/products' | '/cart' | '/cart/checkout'
  type post = '/sell' | '/cart'
  type put = '/profile'
}

declare namespace Requests {
  type sellPostData = { appId: string; contextId: string; assetId: string; price: number }
  type cartPostData = { productId: string }
}

export const api = {
  get: (endpoint: EndpointTypes.get) => instance.get(endpoint),
  post: (endpoint: EndpointTypes.post, sellOrder: Requests.cartPostData | Requests.sellPostData) =>
    instance.post(endpoint, sellOrder),
  put: (endpoint: EndpointTypes.put, tradeUrl: string) => instance.put(endpoint, { tradeUrl }),
}
