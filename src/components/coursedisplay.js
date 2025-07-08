import React,{useState} from 'react'
import { useLocation } from 'react-router';
import CourseItem from './courseItem';
import Edcourses from './Edcourses';

export default function CourseDisplay(props){
    const location=useLocation();
    let coursedata=location.state;
    if(!coursedata){
        return <p>No course data available.please go back and select available courses.</p>
    }
    console.log(coursedata);
    const{ title,image,description,syllabus,para,use}=coursedata;
    return(
        <>
        <div className="course-display">
            <div className="course-info">
                <h1>{title}</h1>
                <small><p>created by:</p></small>
                <p className="course-para">
                    {para} 
                </p>
                <button className="btn btn-success" id="add-cart">Add to Cart</button>
                <button className="btn btn-success" id="join-course">Join the course</button>
            </div>
             <img className="course-img"src={image} width="400px" height="400px"/>
        </div>
        <div className="courseinfo-extra">
        <div className="syllabus-intro">
            <h1>What You'll Learn:</h1>
            <ul>
                { syllabus.split('\n').map((line,index)=>(
                    <li key={index}>{line}</li>
                ))}
            </ul>
        </div>
        <div className="course-use">
         <h1>Career Impact:</h1>
         <ul>
            { use.split('\n').map((line,index)=>(
                    <li key={index}>{line}</li>
                ))}
         </ul>
        </div>
        </div>
        </>
    );
} 