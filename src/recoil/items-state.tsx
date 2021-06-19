import { atom } from 'recoil'
import { Schemas } from '../api/schemas'

export const itemsState = atom<Schemas.Product[] | null>({
  key: 'itemsState',
  default: null,
})
