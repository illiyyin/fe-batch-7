import React from 'react'
import { useSetRecoilState } from "recoil"
import { activeFilterState } from "./atom"

export default function Filter() {
  const setAnimalFilter = useSetRecoilState(activeFilterState)
  
  return (
    <div>
      <button onClick={() => setAnimalFilter('all')} style={styles.button}>
        All
      </button>
      <button onClick={() => setAnimalFilter('dog')} style={styles.button}>
        Dogs
      </button>
      <button onClick={() => setAnimalFilter('cat')} style={styles.button}>
        Cats
      </button>
    </div>
  )
}

const styles = {
  button: {
    padding: '8px 12px',
    margin: '0 8px',
    fontSize: '16px',
  },
}