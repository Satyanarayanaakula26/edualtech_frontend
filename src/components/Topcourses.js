import React,{useState} from 'react'


export function TopCourses(){
    const topitems=[
        {
            'title':'Data Structures and algorithms',
            'content':'some content',
            'image':'https://satyanarayanaakula26.github.io/edualtech_frontend/assets/dsa.jpg'
        },
        {
            'title':'Data Structures and algorithms',
            'content':'some content',
            'image':'https://satyanarayanaakula26.github.io/edualtech_frontend/assets.dsa.jpg'
        },
    {
       'title':'Data Structures and algorithms',
        'content':'some content',
        'image':'https://satyanarayanaakula26.github.io/edualtech_frontend/assets.dsa.jpg' 
    },
    {
       'title':'Data Structures and algorithms',
        'content':'some content',
        'image':'https://satyanarayanaakula26.github.io/edualtech_frontend/assets.dsa.jpg' 
    },
    {
       'title':'Data Structures and algorithms',
        'content':'some content',
        'image':'https://satyanarayanaakula26.github.io/edualtech_frontend/assets.dsa.jpg' 
    },
    {
       'title':'Data Structures and algorithms',
        'content':'some content',
        'image':'https://satyanarayanaakula26.github.io/edualtech_frontend/assets.dsa.jpg' 
    },
    {
       'title':'Data Structures and algorithms',
        'content':'some content',
        'image':'https://satyanarayanaakula26.github.io/edualtech_frontend/assets.dsa.jpg' 
    },
    {
       'title':'Data Structures and algorithms',
        'content':'some content',
        'image':'https://satyanarayanaakula26.github.io/edualtech_frontend/assets.dsa.jpg' 
    },
    {
       'title':'Data Structures and algorithms',
        'content':'some content',
        'image':'https://satyanarayanaakula26.github.io/edualtech_frontend/assets.dsa.jpg' 
    },
    {
       'title':'Data Structures and algorithms',
        'content':'some content',
        'image':'https://satyanarayanaakula26.github.io/edualtech_frontend/assets.dsa.jpg' 
    }]
    return(
        <section className="top-course">
            <h1>TOP MOST POPULAR COURSES</h1>
            <div className='scroll-container topcourse-container my-4 d-flex flex-nowrap  '>
               {
                topitems.map((item)=>{
                    return  <div className=' card-topcourses card me-3 ms-3 ' style={{minWidth:'300px'}}>
                    <img className="card-img rounded" src={topitems[0].image} alt={topitems[0].title} />
                    <div className="card-content">
                    <h3>{topitems[0].title}</h3>
                    <h5><i className="bi bi-star-fill me-2"></i>What you will get:</h5>
                    <p>{topitems[0].content}</p>
                    <a className='card card-footer' href="">View details</a>
                    </div>
                </div>
                })
               }
            </div>
        </section>
    );
}