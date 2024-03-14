import { useState, Fragment } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LessonApaaja, { Lesson2 } from './Lesson'

import React, { Component } from 'react'
import Input from "./Input"

class App extends Component {
	render() {
		return (
			<Fragment>
				<div>App baru dari class</div>
				<LessonApaaja
					name='name lesson 1'
					image='https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/character_logo.svg'
				/>

				<Lesson2
					name='name lesson 2'
					image='https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/character_logo.svg'
        />
        
        <Input/>
			</Fragment>
		)
	}
}

export default App
