import React, { useState, } from 'react'

function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [inputValue,setInputValue]=useState('')


  function handleSubmit() {
    setIsSubmitted(true)
  }

  function handleInput(e) {
    if (e.target.value === "gak boleh") {
      alert("input dilarang")
      return
    }
    setInputValue(e.target.value)
  }
	/* Deklarasikan variable contactForm */
	let contactForm

	/* Buat statement if dengan isSubmitted sebagai pernyataan bersyarat */

	if (isSubmitted) {
		contactForm = <div className='contact-submit-message'>Pesan Terkirim</div>
	} else {
		contactForm = (
			<form onSubmit={handleSubmit}>
				<p>Alamat Email (wajib diisi)</p>
				<input value={inputValue} />
				<p>Pesan (wajib diisi)</p>
				<textarea value={inputValue} onChange={handleInput} />
				<input type='submit' value='Kirim' />
			</form>
		)
	}
	return (
		<div className='contact-form'>
			{/* Hapus code di bawah dan tampilkan variable contactForm */}
			{contactForm}
			{/* Hapus sampai di sini */}
		</div>
	)
}

export default ContactForm
