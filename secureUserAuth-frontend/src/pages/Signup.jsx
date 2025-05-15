import React, {useState, useRef} from 'react';
import Input from '../components/input/Input'
import Container from '../components/Container';
import Button from '../components/buttons/Button';
import { Link, useNavigate } from 'react-router-dom';
import ShowPasswordButton from '../components/buttons/ShowPwdButton';
import { usePasswordToggle } from '../components/buttons/ShowPasswordToggle';
import { appConfig } from '../../config/appConfig.js';


function Signup() {

  const [type, visible, toggle] = usePasswordToggle();
  const [error, setError] = useState("")
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e) =>{
    e.preventDefault()
    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      confirmpassword: confirmPasswordRef.current.value

    }

    try{

      const res = await fetch(`${appConfig.registerEP}`, {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(payload)
      })

      const data = await res.json();
      if(res.ok){
        navigate('/login')
      }else{
        setError(data.error)
      }
      console.log(data)
    
    }catch(error){
      console.log(error);
      setError("Something went wrong")
      
    }
   
   
  }


  return (
    <Container>
        <div className='container py-7 mt-10 lg:mt-16'>
          <div className='flex flex-col justify-center items-center'>
            <h2 className='font-bold text-primary text-2xl mb-5'>Signup</h2>
            {error && <p className='text-red-400'>{error}</p>}
            <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-full max-w-sm'>
              <Input
                type="text"
                label="Name"
                ref={nameRef}
              />
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
              <Input
                type={type}
                label="Confirm Password"
                ref={confirmPasswordRef}
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
              Already have an account?
              <Link to="/login" className='text-blue-500 pl-2'>
                Login
              </Link>
            </p>
          </div>
        </div>
    </Container>
  )
}

export default Signup