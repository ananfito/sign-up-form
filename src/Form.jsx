import React from 'react'

export default function Form() {
    return (
        <section className='form-container'>
            <div className='form-container--text'>
                <p><span className='bold-text'>Try it free 7 days</span> then $20/mo. thereafter</p>
            </div>
            <form className='form-container--form' action="">
                <input 
                    type="text" 
                    name="" 
                    id="" 
                    placeholder='First Name' 
                />
                <input 
                    type="text" 
                    name="" 
                    id="" 
                    placeholder='Last Name' 
                />
                <input 
                    type="email" 
                    name="" 
                    id="" 
                    placeholder='Email Address' 
                />
                <input 
                    type="password" 
                    name="" 
                    id="" 
                    placeholder='Password' 
                />
                <button className='form-container--btn'>
                    Claim your free trial
                </button>
                <p className='terms'>By clicking the button, you are agreeing to our <a>Terms and Sercives</a></p>
            </form>
        </section>
    )
}