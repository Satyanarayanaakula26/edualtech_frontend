import react,{useState} from 'react';
import '../App.css';

export default function Services(props){
  const services=[
    {
      title:'EduGuide',
      content:'Personalized guidance, anytime you need it. Our expert mentors are just a click away—ready to help you solve doubts, stay motivated, and reach your academic goals through 1-on-1 support tailored to your journey.'
    },
     {
      title:'Alternative Education',
      content:"Break the traditional mold! Explore flexible, personalized learning paths tailored to your pace, style, and goals—because one-size-fits-all doesn't fit education anymore."
    },
     {
      title:'Seamless Communication',
      content:'Stay connected like never before! With instant updates, doubt-clearing chats, and smart notifications, our platform ensures you never miss a beat in your learning journey.'
    },
     {
      title:'DailyPulse',
      content:'We listen to learn. With DailyPulse, your feedback is collected every day to help us improve your learning experience in real time. Quick, easy, and focused on what matters to you most.'
    }
  ]
  return(
    <>
    <section className="services">
      <h1 className='services-heading'>What you are Provided with?</h1>
      <h5 className='services-tag'>Providing you with wide range of services</h5>
      <ul className="services-list">
        {services.map((service)=>{
          return(
            <li>
            <div className="card card-service">
              <div className="card-body">
                <h5 className="card-header card-header-service">{service.title}</h5>
                <p>{service.content}</p>
              </div>
            </div>
          </li>
          )})}
      </ul>
    </section>
    </>
  );
}
