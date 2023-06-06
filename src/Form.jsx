import React from 'react' 
import errorImgUrl from './assets/icon-error.svg'

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
        console.log(event.target)
        let errors = {}
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-z0-9.-]+\.[a-zA-Z]{2,}$/

        if(data.firstName === '') {
            errors.firstName = 'First name cannot be empty'
            event.target.firstName.focus()
            event.target.firstName.style.marginBottom = '2em'
        }

        if(data.lastName === '') {
            errors.lastName = 'Last name cannot be empty'
            event.target.lastName.focus()
            event.target.lastName.style.marginBottom = '2em'
        }

        if(data.email === '') {
            errors.email = 'Email cannot be empty'
            event.target.email.focus()
            event.target.email.style.marginBottom = '2em'
        } else if (!emailPattern.test(data.email)) {
            errors.email = "Looks like that's not an email"
            event.target.email.focus()
            event.target.email.style.marginBottom = '2em'
        }

        if(data.password === '') {
            errors.password = 'Password cannot be empty'
            event.target.password.focus()
            event.target.password.style.marginBottom = '2em'
        }

        return errors
    }

    return (
        <section className='form-container'>
            <div className='form-container--text'>
                <p><span className='bold-text'>Try it free 7 days</span> then $20/mo. thereafter</p>
            </div>
            <form className='form-container--form' onSubmit={handleSubmit}>
                <label className='label' htmlFor="firstName">
                    <input 
                        className='input'
                        type="text" 
                        name="firstName" 
                        id="firstName" 
                        placeholder='First Name'
                        onChange={handleChange}
                        value={formData.firstName}
                    />
                    {errorMessage.firstName && <img alt='red exclamation mark' src={errorImgUrl} className='error-img'/>}
                    {errorMessage.firstName && <p className='error-msg'>{errorMessage.firstName}</p>}
                </label>
                
                <label className='label' htmlFor="lastName">
                    <input
                        className='input'
                        type="text"
                        name="lastName"
                        id="lastName"
                        placeholder='Last Name'
                        onChange={handleChange}
                        value={formData.lastName}
                    />
                    {errorMessage.lastName && <img alt='red exclamation mark' src={errorImgUrl} className='error-img'/>}
                    {errorMessage.lastName && <p className='error-msg'>{errorMessage.lastName}</p>}
                </label>
                
                <label htmlFor="email" className="label">
                    <input
                        className='input'
                        type="text"
                        name="email"
                        id="email"
                        placeholder='Email Address'
                        onChange={handleChange}
                        value={formData.email}
                    />
                    {errorMessage.email && <img alt='red exclamation mark' src={errorImgUrl} className='error-img'/>}
                    {errorMessage.email && <p className='error-msg'>{errorMessage.email}</p>}
                </label>

                <label htmlFor="password" className="label">
                    <input
                        className='input'
                        type="password"
                        name="password"
                        id="password"
                        placeholder='Password'
                        onChange={handleChange}
                        value={formData.password}
                    />
                    {errorMessage.password && <img alt='red exclamation mark' src={errorImgUrl} className='error-img'/>}
                    {errorMessage.password && <p className='error-msg'>{errorMessage.password}</p>}
                </label>
                <button className='form-container--btn'>
                    Claim your free trial
                </button>
                <p className='terms'>By clicking the button, you are agreeing to our <a>Terms and Services</a></p>
            </form>
        </section>
    )
}
