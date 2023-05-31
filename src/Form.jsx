import React from 'react' 

export default function Form() {
    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })
    const [errorMessage, setErrorMessage] = React.useState({})
  
    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        setErrorMessage(validator(formData, event))
    }

    function validator(data, event) {
        let errors = {}
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-z0-9.-]+\.[a-zA-Z]{2,}$/

        if(data.firstName === '') {
            errors.firstName = 'First name cannot be empty'
            event.target.firstName.focus()
        }

        if(data.lastName === '') {
            errors.lastName = 'Last name cannot be empty'
            event.target.lastName.focus()
        }

        if(data.email === '') {
            errors.email = 'Email cannot be empty'
            event.target.email.focus()
        } else if (!emailPattern.test(data.email)) {
            errors.email = "Looks like that's not an email"
            event.target.email.focus()
        }

        if(data.password === '') {
            errors.password = 'Password cannot be empty'
            event.target.password.focus()
        }

        return errors

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
                {errorMessage.firstName && <p className='error-msg'>{errorMessage.firstName}</p>}
                <input 
                    type="text" 
                    name="lastName" 
                    id="lastName" 
                    placeholder='Last Name'
                    onChange={handleChange}
                    value={formData.lastName} 
                />
                {errorMessage.lastName && <p className='error-msg'>{errorMessage.lastName}</p>}
                <input 
                    type="text" 
                    name="email" 
                    id="email" 
                    placeholder='Email Address'
                    onChange={handleChange}
                    value={formData.email} 
                />
                {errorMessage.email && <p className='error-msg'>{errorMessage.email}</p>}
                <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder='Password'
                    onChange={handleChange}
                    value={formData.password} 
                />
                {errorMessage.password && <p className='error-msg'>{errorMessage.password}</p>}
                <button className='form-container--btn'>
                    Claim your free trial
                </button>
                <p className='terms'>By clicking the button, you are agreeing to our <a>Terms and Sercives</a></p>
            </form>
        </section>
    )
}
