import React, {useState} from 'react'
import CourseItem from './courseItem';

export default function Edcourses(){
    const courses=[
        {
            title:"DSA-Data Structures and Algorithms",
            image:"assets/dsa.jpg",
            description:"This course provides you with complete knowledge of data structures from scratch",
            para:"In today’s fast-paced tech industry, Data Structures and Algorithms (DSA) are the foundation of efficient software development.Whether you're aiming to crack coding interviews at top tech companies like Google, Amazon, or Microsoft—or simply want to become a better problem-solver—this course is an essential step in your tech career.",
            use:"💼 In-demand skill: DSA is a must-know for roles in software development, data science, AI, and machine learning.\n🧩 Crack coding interviews: 95% of technical interviews test your understanding of algorithms and data structures.\n📈 Boost performance: Efficient code saves time, memory, and computing resources—critical in any real-world application.\n🏆 Stand out: Top performers in coding platforms (LeetCode, HackerRank, Codeforces) all excel at DSA.",
            syllabus:"Core data structures: Arrays, Linked Lists, Stacks, Queues, Trees, Graphs, Hash Tables.\nKey algorithms: Sorting, Searching, Recursion, Dynamic Programming, Greedy methods.\Time and space complexity analysis (Big O Notation).\nReal-world problem-solving techniques used in technical interviews.\nHands-on coding in Python/C++/Java (customizable based on platform)."
        },
        {
            title:"DSA-Data Structures and Algorithms",
            description:"This course provides you with complete knowledge of data structures from scratch",
            image:"assets/dsa.jpg",
            para:"In today’s fast-paced tech industry, Data Structures and Algorithms (DSA) are the foundation of efficient software development.Whether you're aiming to crack coding interviews at top tech companies like Google, Amazon, or Microsoft—or simply want to become a better problem-solver—this course is an essential step in your tech career.",
            use: "💼 In-demand skill: DSA is a must-know for roles in software development, data science, AI, and machine learning.\n🧩 Crack coding interviews: 95% of technical interviews test your understanding of algorithms and data structures.\n📈 Boost performance: Efficient code saves time, memory, and computing resources—critical in any real-world application.\n🏆 Stand out: Top performers in coding platforms (LeetCode, HackerRank, Codeforces) all excel at DSA.",
            syllabus:"Core data structures: Arrays, Linked Lists, Stacks, Queues, Trees, Graphs, Hash Tables.\nKey algorithms: Sorting, Searching, Recursion, Dynamic Programming, Greedy methods.\Time and space complexity analysis (Big O Notation).\nReal-world problem-solving techniques used in technical interviews.\nHands-on coding in Python/C++/Java (customizable based on platform)."
        },
        {
            title:"DSA-Data Structures and Algorithms",
            image:"assets/dsa.jpg",
            description:"This course provides you with complete knowledge of data structures from scratch",
            para:"In today’s fast-paced tech industry, Data Structures and Algorithms (DSA) are the foundation of efficient software development.Whether you're aiming to crack coding interviews at top tech companies like Google, Amazon, or Microsoft—or simply want to become a better problem-solver—this course is an essential step in your tech career.",
            use: "💼 In-demand skill: DSA is a must-know for roles in software development, data science, AI, and machine learning.\n🧩 Crack coding interviews: 95% of technical interviews test your understanding of algorithms and data structures.\n📈 Boost performance: Efficient code saves time, memory, and computing resources—critical in any real-world application.\n🏆 Stand out: Top performers in coding platforms (LeetCode, HackerRank, Codeforces) all excel at DSA.",
            syllabus:"Core data structures: Arrays, Linked Lists, Stacks, Queues, Trees, Graphs, Hash Tables.\nKey algorithms: Sorting, Searching, Recursion, Dynamic Programming, Greedy methods.\Time and space complexity analysis (Big O Notation).\nReal-world problem-solving techniques used in technical interviews.\nHands-on coding in Python/C++/Java (customizable based on platform)."
        }
    ]
    return(
        <div className="edcourse">
            <h1>Top Educational Courses:</h1>
            <div className="edcourse-list">
                {courses.map((course)=>{
                    return <CourseItem title={course.title} image={course.image} description={course.description} para={course.para} syllabus={course.syllabus} use={course.use}/>
                })}
            </div>
        </div>
    );
}
