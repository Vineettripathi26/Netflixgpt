import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true)

    const handleClick = ()=> {
        setIsSignIn(!isSignIn)
    }

  return (
    <div className='absolute text-white' >
      <Header />
      <div className='absolute flex flex-col p-16 bg-black bg-opacity-75 w-[28rem] h-[36rem] mt-24 ml-[33vw]'>
        <h1 className='text-white text-3xl mb-4'>{isSignIn? "Sign In" : "Sign Up"}</h1>
      <form action="">
      {isSignIn && <input className='bg-[#333] opacity-1 w-72 h-12 my-4 py-2 px-4 text-white rounded-md' placeholder='Name' type="text"/>}
        <input className='bg-[#333] opacity-1 w-72 h-12 my-4 py-2 px-4 text-white rounded-md' placeholder='Email or Phone number' type="email" name="Email or Phone" id="" />
        <input className='bg-[#333] opacity-1 w-72 h-12 my-4 py-2 px-4 rounded-md text-white' placeholder='Password' type="password" />
      <button className='bg-[#e50914] text-white opacity-1 w-72 h-12 my-8 rounded-lg'>{isSignIn? "Sign In" : "Sign Up"}</button>
      <h2 className='cursor-pointer'  onClick={handleClick}>{isSignIn? "New to Netflix? Sign up now." : "Already a user? Sign in now"}</h2>
      </form>
      </div>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="background" />
    </div>
  )
}

export default Login
