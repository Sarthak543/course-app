import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import { Button, Container, Form, FormGroup, Input } from "reactstrap"
import base_url from "../api/bootAPI"
import { toast } from 'react-toastify';

export default function AddCourse() {

    useEffect(() => {
        document.title = "All Courses"
    }, []);

    const [course, setCourse] = useState({});

    // creating function to post data on server
    const postDataToServer=(data)=>{
        console.log(data)
        axios.post(`${base_url}/courses`,data).then(
            (response)=>{
                toast.success("Course added successfully",{position:'top-center'});
                setCourse({id:"",title:"",description:""});
            },
            (error)=>{toast.error("Something went wrong. try again later",{position:'top-center'});}
        )
    }

    //form handler function
    const handleForm = (e) => {
        postDataToServer(course);
        e.preventDefault();
    };

    return (
        <Fragment>
            <h1 className='text-center my-3'>Fill Course Details</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label htmlFor="userID ">Course Id</label>
                    <Input type="number" placeholder='Enter course id' name="id" id='userID' onChange={(e) => { setCourse({ ...course, id: e.target.value }) }} />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="courseName">Course Name</label>
                    <Input type="text" placeholder='Enter course name' name="title" id='title' onChange={(e) => { setCourse({ ...course, title: e.target.value }) }} />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="courseDescription">Course Name</label>
                    <Input type="textarea" placeholder='Enter description here' name="description" id='description' style={{ height: 150 }} onChange={(e) => { setCourse({ ...course, description: e.target.value }) }} />
                </FormGroup>
                <Container className='text-center'>
                    <Button type='submit' color='success' outline >Add Course</Button>
                    <Button type='reset' className='mx-2' color='danger' outline onClick={()=>{setCourse({id:"",title:"",description:""});}}>Clear</Button>
                </Container>
            </Form>
        </Fragment>
    )
}
