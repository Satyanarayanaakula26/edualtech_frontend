import React from 'react'
import { useNavigate } from 'react-router';

export default function Courses(){
    const navigate=useNavigate();
    return(
        <section className="course-types">
            <div className="edcourse-intro">
                <h1>Focus on Educational Skills</h1>
                <img src="/assets/educationimg.jpg" alt="education" />
                <p>Our Educational and Professional courses are designed to empower you with knowledge and capabilities that matter in school, university, and your career. Whether you're aiming to improve your academic performance, learn technical skills like programming or data science, or build essential soft skills like communication and leadership — we've got you covered. From beginners to professionals, these courses help you build a strong foundation and advance confidently in your field.</p>
                <button className="btn btn-success" onClick={()=>navigate('/Edcourses')}> Get Started</button>
            </div>
        <div className="nonedcourse-intro">
                <h1>Follow Your Passion</h1>
                <div className="passion-imgs">
                <img src="/assets/art.jpg" alt="passion" className="gallery-img img1" />
                <img src="/assets/music.jpg" alt="passion" className="gallery-img img2"/>
                <img src="/assets/sports-tools.jpg" alt="passion" className="gallery-img img3"/>
                </div>
                <p>Passion-Oriented Courses are built to ignite your creativity, develop your hobbies, and support a healthy, balanced lifestyle. These courses span music, sports, visual arts, and personal wellness — designed for those who want to pursue what they love, whether for fun, fitness, or future dreams. Learn to play an instrument, master photography, cook like a pro, or dive into yoga — all at your own pace. Fuel your passion, one course at a time.</p>
                <button className="btn btn-success"onClick={()=>navigate('/Nonedcourses')} > Get Started </button>
        </div>
        </section>
    );
}