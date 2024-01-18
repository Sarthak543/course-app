import React, { useEffect, useState } from 'react'
import Course from "./Course"
import base_url from "../api/bootAPI"
import axios from "axios"
import { toast } from 'react-toastify';


export default function AllCourses() {
    /*
         The useEffect hook is a React hook that lets you perform side effects in your components, such as fetching data, updating the DOM, or setting timers1. The useEffect hook takes two parameters: a callback function and an optional dependency array2.
    
         The callback function is the function that contains your effect logic. It runs after every render by default, unless you specify a dependency array. The callback function can also return a cleanup function, which runs before the next effect or when the component unmounts1.
        
         The dependency array is a list of all the reactive values that your effect depends on. Reactive values include props, state, and any variables or functions declared inside your component. If you pass an empty array, your effect will only run once after the initial render. If you pass an array with some values, your effect will only run when any of those values change. If you omit the dependency array, your effect will run after every render12.
        
         In your example, you are passing an empty array as the second parameter of useEffect. This means that your effect will only run once after the component mounts, and never again. If you want your effect to run more often, you should include the values that your effect depends on in the dependency array.
    */

    // function to call server
    const getAllCoursesFromServer = () => {
        axios.get(`${base_url}/courses`).then(
            (response) => {
                console.log(response);
                toast.success("Courses has been loaded",{position:'top-center'});
                setCourses(response.data);
            },
            (error) => {
                console.log(error);
                toast.error("Courses has been loaded",{position:'top-center'});
            }
        );
    }

    // calling loading course function 
    useEffect(() => {
        document.title = "All Courses";
        getAllCoursesFromServer();
    }, []);


    const [courses, setCourses] = useState([]);

    const updateCourse=(id)=>{
        setCourses(courses.filter((c)=>c.id!=id));
    }


    const obj = { title: "Core Java Course", desc: "This is Demo Course and give you better understanding of java" };
    return (
        <div>
            <h1>All Courses</h1>
            <p>List Of Courses are as follow :</p>
            {
                courses.length > 0 ? (courses.map((item) => {
                    return <Course key={item.id} course={item} update={updateCourse}/>
                })) : "No Courses"
            }
        </div>
    )
}
