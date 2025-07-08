import React, { useState } from 'react'

export function Team(){
    const teammates=[
        {
            name:'Akula Satyanarayana',
            role:'Technical Department',
            image:'./assets/coursespic.png',
            info:'At EdualTech, Akula Satyanarayana plays a crucial role in shaping our technology strategy and delivering innovative solutions that empower our clients. With extensive expertise in [add key skills, e.g., full-stack development, cloud infrastructure, or AI-driven platforms],'
        },
        {
            name:'Akula Satyanarayana',
            role:'Technical Department',
            image:'./assets/coursespic.png',
            info:'At EdualTech, Akula Satyanarayana plays a crucial role in shaping our technology strategy and delivering innovative solutions that empower our clients. With extensive expertise in [add key skills, e.g., full-stack development, cloud infrastructure, or AI-driven platforms],'
        },
        {
            name:'Akula Satyanarayana',
            role:'Technical Department',
            image:'./assets/coursespic.png',
            info:'At EdualTech, Akula Satyanarayana plays a crucial role in shaping our technology strategy and delivering innovative solutions that empower our clients. With extensive expertise in [add key skills, e.g., full-stack development, cloud infrastructure, or AI-driven platforms],'
        },
        {
            name:'Akula Satyanarayana',
            role:'Technical Department',
            image:'./assets/coursespic.png',
            info:'At EdualTech, Akula Satyanarayana plays a crucial role in shaping our technology strategy and delivering innovative solutions that empower our clients. With extensive expertise in [add key skills, e.g., full-stack development, cloud infrastructure, or AI-driven platforms],'
        }
    ]
    return(
       <section className='team-mems'>
        <h1>OUR PROUD TEAM</h1>
       <div className="team-cards">
        {
            teammates.map((mate)=>{
                return(
                    <div className="teammate ms-4 me-4 my-4">
        <img className="teammate-img"src={mate.image} alt="teammate" width="300px" height="300px"/>
        <div className="teammate-info">
            <h3>{mate.name}</h3>
            <h5>{mate.role}</h5>
            <p>{mate.info}</p>
        </div>
        </div> 
                )
            })
        }   
       </div>
       </section>
    );
}
