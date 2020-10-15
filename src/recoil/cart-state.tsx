import { atom } from 'recoil'

export const cartState = atom({
  key: 'cartState',
  default: {
    count: 0,
  },
})
