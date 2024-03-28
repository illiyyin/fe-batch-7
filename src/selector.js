import { selector, useRecoilValue } from 'recoil'
import { activeFilterState, animalsState } from './atom'
import { useState } from "react"

export const filteredAnimals = selector({
  key: 'filteredAnimalState',
  get: ({ get }) => {
    const filter = get(activeFilterState) // 'all', 'dog' atau 'cat'
    const animals = get(animalsState) // State awal didefinsikan dalam Atom

    // Menghasilkan state yang diperbarui berdasarkan nilai filter
    if (filter === 'all') return animals
    return animals.filter((animal) => animal.type === filter)
  },
  
})