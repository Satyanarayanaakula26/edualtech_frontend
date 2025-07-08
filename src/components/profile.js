import React,{useState}from 'react'
import CourseItem from './courseItem'
export default function Profile(props){
    const cart=[
          {
            title:"DSA-Data Structures and Algorithms",
            image:"assets/dsa.jpg",
            description:"This course provides you with complete knowledge of data structures from scratch",
            para:"In today’s fast-paced tech industry, Data Structures and Algorithms (DSA) are the foundation of efficient software development.Whether you're aiming to crack coding interviews at top tech companies like Google, Amazon, or Microsoft—or simply want to become a better problem-solver—this course is an essential step in your tech career.",
            use:"💼 In-demand skill: DSA is a must-know for roles in software development, data science, AI, and machine learning.\n🧩 Crack coding interviews: 95% of technical interviews test your understanding of algorithms and data structures.\n📈 Boost performance: Efficient code saves time, memory, and computing resources—critical in any real-world application.\n🏆 Stand out: Top performers in coding platforms (LeetCode, HackerRank, Codeforces) all excel at DSA.",
            syllabus:"Core data structures: Arrays, Linked Lists, Stacks, Queues, Trees, Graphs, Hash Tables.\nKey algorithms: Sorting, Searching, Recursion, Dynamic Programming, Greedy methods.\Time and space complexity analysis (Big O Notation).\nReal-world problem-solving techniques used in technical interviews.\nHands-on coding in Python/C++/Java (customizable based on platform)."
        }
    ];
    const ongoing=[
        {title:"DSA-Data Structures and Algorithms",
            image:"assets/dsa.jpg",
            description:"This course provides you with complete knowledge of data structures from scratch",
        }
        ];
    const completed=[
        {title:"DSA-Data Structures and Algorithms",
            image:"assets/dsa.jpg",
            description:"This course provides you with complete knowledge of data structures from scratch",
        }
    ];
    const[isopen1,setisopen1]=useState(false);
    const[isopen2,setisopen2]=useState(false);
    const[isopen3,setisopen3]=useState(false);
    const[isopen4,setisopen4]=useState(false);
    const[isopen5,setisopen5]=useState(false);
    const toggle1=()=>{
        setisopen1(!isopen1);
    }
    const toggle2=()=>{
        setisopen2(!isopen2);
    }
    const toggle3=()=>{
        setisopen3(!isopen3);
    }
    const toggle4=()=>{
        setisopen4(!isopen4);
    }
    
    
    return(
        <>
        <div className="profile-dis">
        <h1>My Details</h1>
        <div className="basic-profile">
            <img className="profile-img" src="assets/logo192.png" alt="profile-pic" width="200px" height="200px"/>
            <div className="profile-intro">
            <h3>My Name</h3>
            <i><p>My email</p></i>
            <button className="btn btn-success">Edit Profile</button>
            </div>
        </div>
        <div className="profile-list">
        <ul>
         <li><div className="listed" onClick={toggle1}><span>My Cart</span></div>
            {isopen1 &&(
                <div className="drop-content-1">
                  {cart.map((item)=>{
                    return(
                    <CourseItem title={item.title} image={item.image} description={item.description} para={item.para} syllabus={item.syllabus} use={item.use}/>
                    );
                  })}
                </div>
            )}
            </li>
            <li><div className="listed"  onClick={toggle2}>My Learning</div>
             {isopen2 &&(
                <div className="drop-content-2">
                    <span className="learning">
                    <span><h3>Ongoing Courses:</h3>
                    {
                        ongoing.map((item)=>{
                            return(
                               <div className="ongoing-course">
                                <ul>
                                    <li><a>{item.title}</a></li>
                                </ul>
                               </div>
                            )
                        })
                    }
                        </span>
                    <span><h3>Completed Courses:</h3>
                                        {
                        ongoing.map((item)=>{
                            return(
                               <div className="ongoing-course">
                                <ul>
                                    <li><a>{item.title}</a></li>
                                </ul>
                               </div>
                            )
                        })
                    }

                    </span>
                    </span>
                </div>
            )}</li>
            <li><div  className="listed" onClick={toggle3}>Educational Information</div>
             {isopen3 &&(
                <div className="drop-content-3">
                    <span><h3>Name:</h3><i>Your Name</i></span>
                    <span><h3>School/University:</h3><i>Your College</i></span>
                    <span><h3>Class:</h3><i>Your class</i></span>
                    <span><h3>Place:</h3><i>Your Place</i></span>
                    <button className="btn btn-success"> Edit</button>
                </div>
            )}</li>
            <li><div className="listed" onClick={toggle4}>Rewards</div>
             {isopen4 &&(
                <div className="drop-content-4">
                    <i>No Rewards found..</i>
                </div>
            )}</li>
            <li><button  id="logout" className="btn btn-danger">Logout</button></li>
        </ul>
        </div>
        </div>
        </>
    );
}