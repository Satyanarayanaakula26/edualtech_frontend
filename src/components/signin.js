import React,{useState} from 'react'

export default function Signin(){
    return(
        <section className="sign_in">
            <h1>Sign In</h1>
            <div className="signin_info">
                <img src="https://satyanarayanaakula26.github.io/edualtech_frontend/assets/login-image.jpg" alt="sign-in" width ="300px" height="300px"/>
            <form className="sign_in_form">
                <span className="input-info"><i className="bi bi-envelope-fill me-3"></i><input  type="email" id="email" placeholder="Enter your email"required/></span>
                <span className="input-info"><i className="bi bi-lock-fill me-3"></i><input  type="password" id="password" placeholder="Enter your password" required/></span>
                <button className="btn btn-success"> login</button>
                <a  className="forg_pass" href="/signin">forgot password?</a>
            </form>
            </div>
        </section>
    );
}