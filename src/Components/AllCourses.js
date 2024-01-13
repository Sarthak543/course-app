import React, { useState } from 'react'
import Course from "./Course"

export default function AllCourses() {
    const [courses,setCourses]=useState([
        {title:"Core Java Course", desc:"This is Demo Course and give you better understanding of java"},
        {title:"ReactJS Course", desc:"This is Demo Course and give you better understanding of ReactJS"},
        {title:"Python Course", desc:"This is Demo Course and give you better understanding of Python"},
        {title:"Django Course", desc:"This is Demo Course and give you better understanding of Django"}
    ]);

    const obj={title:"Core Java Course", desc:"This is Demo Course and give you better understanding of java"};
    return (
    <div>
        <h1>All Courses</h1>
        <p>List Of Courses are as follow :</p>
        {
            courses.length>0?(courses.map((item)=>{
                return <Course course={item} />
            })):"No Courses"
        }
    </div>
  )
}
