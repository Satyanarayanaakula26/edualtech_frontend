import React,{useState} from 'react'
import CourseDisplay from './coursedisplay';
import { useNavigate } from 'react-router-dom';

export default function CourseItem(props){
  const navigate=useNavigate();
  console.log(props)
  const coursedata={
    title:props.title,
    image:props.image,
    description:props.description,
    syllabus:props.syllabus,
    para:props.para,
    use:props.use
  }
    return(
      <div className="course-item">
        <img src={props.image} alt="coursename"/>
        <div className="course-des">
          <h6>{props.title}</h6>
          <p>{props.description}...</p>
          <div><button className="btn btn-success" onClick={()=>navigate('/course_display',{state:coursedata})}>View Course</button>
          </div>
        </div>
      </div>
    );
}