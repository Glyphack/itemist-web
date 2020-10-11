import { atom } from 'recoil'
import { Schemas } from '../api/schemas'

export const userState = atom({
  key: 'userState',
  default: (null as unknown) as Schemas.User,
})
