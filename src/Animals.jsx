import React, { useState, } from 'react'
import { useRecoilValue } from "recoil"
import { activeFilterState, animalsState } from "./atom"
import { filteredAnimals } from "./selector"

export default function Animals() {
  const animals = useRecoilValue(filteredAnimals)
  // const animals = useRecoilValue(animalsState)
  const active = useRecoilValue(activeFilterState)

	const getIcon = (animalType) => {
		switch (animalType) {
			case 'dog':
				return 'DogIcon'
			case 'cat':
				return 'CatIcon'
			default:
				return
		}
	}
	return (
		<div>
			<h1>Animals:</h1>
      <h1>Active State: {active}</h1>
			{animals.map((animal,i) => (
				<div key={animal.id} style={{ display: 'flex', alignItems: 'center' }}>
					{animal.name} is {animal.type} - 
					<p> {getIcon(animal.type)}</p>
				</div>
			))}
		</div>
	)
}
