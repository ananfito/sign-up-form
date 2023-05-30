import React from 'react'

export default function Form() {
    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })
  
    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(event)
        const form = event.target
        const {firstName, lastName, email, password} = formData

        if (firstName != '' && lastName != '' && email != '' && password != '') {
            console.log('success')
            
        } else {
            console.log('missing form info')
            switch (firstName === '' | lastName === '' | email === '' | password === '') {
                case firstName === '':
                    form.firstName.focus()
                case lastName === '':
                    form.lastName.focus()
                    break;
                    
            }
            
            
        }
    }

    return (
        <section className='form-container'>
            <div className='form-container--text'>
                <p><span className='bold-text'>Try it free 7 days</span> then $20/mo. thereafter</p>
            </div>
            <form className='form-container--form' onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="firstName" 
                    id="firstName" 
                    placeholder='First Name'
                    onChange={handleChange}
                    value={formData.firstName}
                />
                <input 
                    type="text" 
                    name="lastName" 
                    id="lastName" 
                    placeholder='Last Name'
                    onChange={handleChange}
                    value={formData.lastName} 
                />
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder='Email Address'
                    onChange={handleChange}
                    value={formData.email} 
                />
                <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder='Password'
                    onChange={handleChange}
                    value={formData.password} 
                />
                <button className='form-container--btn'>
                    Claim your free trial
                </button>
                <p className='terms'>By clicking the button, you are agreeing to our <a>Terms and Sercives</a></p>
            </form>
        </section>
    )
}