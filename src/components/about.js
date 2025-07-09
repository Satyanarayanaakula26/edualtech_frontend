import React from 'react'
 export function About(){
    return(
        <section className='about-section'>
           <div className='about-section-1'>
                <div className='about-1-left'>
                        <img src="https://satyanarayanaakula26.github.io/edualtech_frontend/assets/team4.jpg" alt="our mission info" />
                </div>
                <div className='about-1-right'>
                    <h1>Our Mission</h1>
                    <p>
                        Our mission is to empower students to thrive both academically and personally. We believe that learning should never be limited to the classroom — or to just textbooks. That’s why we’re building an EdTech platform that supports students with the knowledge, tools, and guidance they need to grow in their education and pursue their passions.
From 24/7 guidance and mentorship to alternative learning technologies, we’re here to help every student unlock their full potential — anytime, anywhere.
                    </p>
                </div>
           </div>
           <div className='about-section-2'>
                <div className='about-2-left' >
                <h1>Our Story</h1>
                <p>
Our journey started in November 2023, when we were still in our first year of B.Tech at JNTUK. Sparked by the SPARK program in our college, we came together as friends who saw how challenging it can be for students to find the right support — not just for exams, but for their dreams and interests beyond academics.
With a vision to change that, we worked day and night on our idea, and our dedication was rewarded when we were selected among the top 7 teams. That moment fueled our determination to keep going. Today, we’re building a community-driven platform where students can get real-time guidance, develop their skills, and follow their passions with confidence.
                </p>
                </div>
                <div className='about-2-right'>
                    <img className='right-img image1' src='https://satyanarayanaakula26.github.io/edualtech_frontend/assets/team1.jpg' alt='ourstory-1'/>
                    <img className='right-img image2' src='https://satyanarayanaakula26.github.io/edualtech_frontend/assets/team2.jpg' alt='ourstory-2'/>
                    <img className='right-img image3' src='https://satyanarayanaakula26.github.io/edualtech_frontend/assets/team3.jpg' alt='ourstory-3'/>
                </div>
           </div>
        </section>
    );
 }