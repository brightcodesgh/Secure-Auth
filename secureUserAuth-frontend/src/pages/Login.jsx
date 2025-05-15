import React,{useRef,  useState} from 'react';
import Input from '../components/input/Input'
import Container from '../components/Container';
import Button from '../components/buttons/Button';
import { Link, useNavigate } from 'react-router-dom';
import ShowPasswordButton from '../components/buttons/ShowPwdButton';
import { usePasswordToggle } from '../components/buttons/ShowPasswordToggle';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice.js';
import { appConfig } from '../../config/appConfig.js';


function Login() {
  const [type, visible, toggle] = usePasswordToggle();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false)
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) =>{
    e.preventDefault();
    
    const payload ={
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }
    
    setLoading(true)
    try{
      const res = await fetch(`${appConfig.loginEP}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials:'include',
        body: JSON.stringify(payload)
      })

      const data = await res.json();
      console.log(data)
      if(res.ok){
        const loggedIn = dispatch(login({userData:data.data}));
        console.log("user Logged in", loggedIn)
        navigate('/');
      }else{
        setError(data.message)
      }
    }catch(error){
      console.log(error)
      setError("Unexpected error. Please try again")
    }finally{
      setLoading(false)
    }
  }
  
  if(loading) return <p>Loading....</p>
  return (
    <Container>
      <div className='container py-7 mt-12 lg:mt-16'>
        <div className='flex flex-col justify-center items-center'>
          <h2 className='font-bold text-primary text-2xl mb-5'>Login</h2>
          {error && <p className='text-red-700'>{error}</p>}
          <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-full max-w-sm'>
            <Input
               type="text"
               label="Email"
               ref={emailRef}
            />
            <Input
               type={type}
               label="Password"
               ref={passwordRef}
            />
            <ShowPasswordButton isVisible={visible} onClick={toggle}/>
            <Button
              bgColor="bg-blue-800"
              textColor='text-gray-200'
              className='w-full rounded-lg 
                px-2 py-2 shadow-md 
                hover:bg-button mt-16 
                lg:mt-8 font-semibold'
            >
                Sign Up
            </Button>
              
          </form>
          <p className='mt-4'>
            Don't have an account?
            <Link to="/signup" className='text-blue-500 pl-2'>
              Signup
            </Link>
          </p>
        </div>
      </div>
    </Container>
  )
}

export default Login