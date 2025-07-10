import React from 'react'

export function Contact(){
    return(
        <section className='contact'>
             <img className='contact-img' src="https://satyanarayanaakula26.github.io/edualtech_frontend/assets/contact-img.jpeg" alt=" contact image"></img>
            <div className='contact-info-take'>
                <div className="contact-form">
                    <h1>Get In Touch With Us!</h1>
                    <input type="text" id="name" placeholder='Enter your Name' required/><br/><br/>
                    <input type="email" id="mail" placeholder='Enter your Enail' required/><br/><br/>
                    <textarea className='message' placeholder='Enter your message'rows='5' cols='50' ></textarea><br/><br/>
                    <button className='btn btn-success'>Send Us</button>
                    <div className='contact-icons'>
                        <a href='/contact'><i className='bi bi-linkedin fs-2'></i></a>
                        <a href='/contact'><i className='bi bi-whatsapp fs-2'></i></a>
                        <a href='/contact'><i className='bi bi-instagram fs-2'></i></a>
                    </div>
                </div>
            </div>
        </section>
    );
}