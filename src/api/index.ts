import axios, { AxiosRequestConfig } from 'axios'
import Cookies from 'js-cookie'

export const instance = axios.create({
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

export declare namespace EndpointTypes {
  type Get = '/profile' | '/profile/inventory' | '/sell' | '/products' | '/cart' | '/cart/checkout'
  type Post = '/sell' | '/cart/add-product' | '/cart/remove-product'
  type Put = '/profile'
}

declare namespace RequestData {
  namespace Post {
    type Sell = { appId: string; contextId: string; assetId: string; price: number }
    type CartAddProduct = { productId: string }
    type CartRemoveProduct = { productId: string }
  }
  namespace Put {
    type Profile = { tradeUrl: string }
  }
}

export const api = {
  get: (endpoint: EndpointTypes.Get, config?: AxiosRequestConfig) => instance.get(endpoint, config),
  post: (
    endpoint: EndpointTypes.Post,
    data:
      | RequestData.Post.Sell
      | RequestData.Post.CartAddProduct
      | RequestData.Post.CartRemoveProduct
  ) => instance.post(endpoint, data),
  put: (endpoint: EndpointTypes.Put, data: RequestData.Put.Profile) => instance.put(endpoint, data),
}
