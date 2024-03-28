import React from 'react'
import { useRecoilValue } from 'recoil'
import { animalsState } from './atom'
import Animals from "./Animals"
import Filter from "./Filter"

export default function Recoil() {

	return (
    <div>
      <Filter/>
			<Animals/>
		</div>
	)
}
