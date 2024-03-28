import { atom } from 'recoil'

export const animalsState = atom({
  key: 'animalsState',
  default: [
    {
      id: 1,
      name: 'Rexy',
      type: 'dog',
    },
    {
      id: 2,
      name: 'Oscar',
      type: 'cat',
    },
    {
      id: 3,
      name: 'Tom',
      type: 'cat',
    },
  ],
})

export const activeFilterState = atom({
  key: 'animalFilterState',
  default: 'all',
})