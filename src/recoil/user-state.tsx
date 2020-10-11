import { atom } from 'recoil'
import { Schemas } from '../api/schemas'

export const userState = atom<Schemas.User | null>({
  key: 'userState',
  default: null,
})
