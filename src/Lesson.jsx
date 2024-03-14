import React, { useState } from 'react'

export const Lesson2 = (props) => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	function handleClick() {
		setIsModalOpen(true)
	}

	const handleClose = () => {
		setIsModalOpen(false)
	}

	return (
		<div className='lesson-card'>
			<div className='lesson-item' onClick={handleClick}>
				<p>{props.name}</p>
				<img src={props.image} />
			</div>
			{isModalOpen ? (
				<div className='modal'>
					<div className='modal-inner'>
						<div className='modal-header'></div>
						<div className='modal-introduction'>
							<h2>{props.name}</h2>
							<p>{props.introduction}</p>
						</div>
						<button onClick={() => handleClose()} className='modal-close-btn'>
							Tutup
						</button>
					</div>
				</div>
			) : null}
		</div>
	)
}

function Lesson(props) {
	const [isModalOpen, setIsModalOpen] = useState(false)

	function handleClick() {
		setIsModalOpen(true)
	}

	const handleClose = () => {
		setIsModalOpen(false)
	}

	let modal

	if (isModalOpen) {
		modal = (
			<div className='modal'>
				<div className='modal-inner'>
					<div className='modal-header'></div>
					<div className='modal-introduction'>
						<h2>{props.name}</h2>
						<p>{props.introduction}</p>
					</div>
					<button onClick={() => handleClose()} className='modal-close-btn'>
						Tutup
					</button>
				</div>
			</div>
		)
	}

	return (
		<div className='lesson-card'>
			<div onClick={handleClick} className='lesson-item'>
				<p>{props.name}</p>
				<img src={props.image} />
			</div>
			{modal}
		</div>
	)
}

export default Lesson
