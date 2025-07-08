 import React,{useState} from 'react'

export default function Signup(){
    return(
     <div className="sign_up">
  <h1>Sign Up</h1>
  <form className="sign_up_form">
      
      <input type="text" id="name" className="input-bar" placeholder="Enter your name" required />

      <input type="email" id="email" className="input-bar" placeholder="Enter your email" required />
  
     
      <input type="password" id="inputpassword" className="input-bar" placeholder="Enter your password" required />

      <input type="password" id="password-c" className="input-bar" placeholder="Confirm your password"required />

      <button type="submit" className="btn btn-success">Sign up</button>
      
      <a href="#">Already have an account? Sign in</a>

  </form>
</div>

    );
}