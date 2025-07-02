import { useState, useEffect } from "react"
import {FaSignInAlt} from 'react-icons/fa'
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from "react-router-dom"
import {toast} from 'react-toastify'
import {login,  reset} from '../features/auth/authSlice'
import Spinner from "../components/Spinner"

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    

    const {email, password} = formData
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user, isLoading, isError, isSuccess, message} = useSelector((state)=>state.auth)

     useEffect(()=>{
        if(isError){
            toast.error(message)
        }
        if(isSuccess || user){
            navigate('/')
        }
        dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])

    if(isLoading){
        return <Spinner />
    }
    const onChange = (e) =>{
        setFormData(prevState => ({
            // Spread accross the other fields collect all 
            ...prevState,
            // We want ket the key as 'name'and the value would be what ever we type 
            [e.target.name]: e.target.value
        }))
    }


    const onSubmit = (e) =>{
        e.preventDefault()

        const userData = {
            email,
            password
        }
        dispatch(login(userData))
    }
    return (
    <>
        <section className='heading'>
            <h1>
                <FaSignInAlt /> Login
            </h1>
            <p>Please Login to Account</p>
        </section>

        <section className='form'>
            <form onSubmit={onSubmit}> 

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
                    type= {showPassword ? 'text' : 'password'}
                    className="form-control" 
                    id='password' 
                    name='password' 
                    value={password} 
                    placeholder='Enter Your Password' 
                    onChange={onChange}/>
                </div> 

                <div className="mt-4 flex items-center justify-start">
                    <div className="flex items-center gap-2">
                        <label
                        htmlFor="showPassword"
                        className="text-sm font-medium cursor-pointer m-0 inline-block"
                        >
                        Show Password
                        </label>
                        <input
                        type="checkbox"
                        id="showPassword"
                        checked={showPassword}
                        onChange={() => setShowPassword(!showPassword)}
                        className="w-4 h-4 cursor-pointer"
                        />
                    </div>
                </div>

                <div className="div-form-group">
                    <button type='submit' className='btn btn-block'>Submit</button>
                </div>
            </form>
        </section>
    </>
  )
}

export default Login