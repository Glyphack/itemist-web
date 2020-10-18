import { atom } from 'recoil'

export const refetchState = atom({
  key: 'refetchState',
  default: false,
})
