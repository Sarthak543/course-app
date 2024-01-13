import React, { Fragment } from 'react'
import { Button, Container, Form, FormGroup, Input } from "reactstrap"

export default function addCourse() {
    return (
        <Fragment>
            <h1 className='text-center my-3'>Fill Course Details</h1>
                <Form>
                    <FormGroup>
                        <label htmlFor="userID ">Course Id</label>
                        <Input type="number" placeholder='Enter course id' name="id" id='userID' />
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="courseName">Course Name</label>
                        <Input type="text" placeholder='Enter course name' name="courseName" id='courseName' />
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="courseDescription">Course Name</label>
                        <Input type="textarea" placeholder='Enter description here' name="courseDescription" id='courseDescription' style={{height : 150}}/>
                    </FormGroup>
                    <Container className='text-center'>
                        <Button color='success' outline>Add Course</Button>
                        <Button className='mx-2' color='danger' outline>Clear</Button>
                    </Container>
                </Form>
        </Fragment>
    )
}
