import axios from 'axios';
import Cookies from 'js-cookie'

const itemist = axios.create({
  baseURL: `http://api.itemist.ir/v1/`
});

itemist.interceptors.request.use(
  config => {
    const token = Cookies.get('token') || '';
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default itemist
