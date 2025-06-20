import { useState, useEffect } from "react"
import {FaUser} from 'react-icons/fa'
const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const {name, email, password, password2} = formData

    const onChange = (e) =>{
        setFormData(({prevState})=> ({
            // Spread accross the other fields collect all 
            ...prevState,
            // We want ket the key as 'name'and the value would be what ever we type 
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) =>{
        e.preventDefault()
    }
    return (
    <>
        <section className='heading'>
            <h1>
                <FaUser /> Register
            </h1>
            <p>Please create an account</p>
        </section>

        <section className='form'>
            <form onSubmit={onSubmit}> 
                <div className="form-group">
                    <input 
                    type="text" 
                    className="form-control" 
                    id='name' 
                    name='name' 
                    value={name} 
                    placeholder='Enter Your Name' 
                    onChange={onChange}/>
                </div>
                <div className="form-group">
                    <input 
                    type="text" 
                    className="form-control" 
                    id='email' 
                    name='email' 
                    value={email} 
                    placeholder='Enter Your Email' 
                    onChange={onChange}/>
                </div>
                <div className="form-group">
                    <input 
                    type="text" 
                    className="form-control" 
                    id='password' 
                    name='pasword' 
                    value={password} 
                    placeholder='Enter Your Password' 
                    onChange={onChange}/>
                </div>
                <div className="form-group">
                    <input 
                    type="text" 
                    className="form-control" 
                    id='password2' 
                    name='pasword2' 
                    value={password2} 
                    placeholder='Confirm Password' 
                    onChange={onChange}/>
                </div>
                <div className="div-form-group">
                    <button type='submit' className='btn btn-block'>Submit</button>
                </div>
            </form>
        </section>
    </>
  )
}

export default Register