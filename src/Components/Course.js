import axios from 'axios'
import React from 'react'
import base_url from "../api/bootAPI"
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardFooter,
  Button,
  Container
} from "reactstrap"
import { toast } from 'react-toastify'

export default function Course({ course, update }) {

  const deleteCourse = (id)=> {
    axios.delete(`${base_url}/courses/${id}`).then(
      (response) => { toast.success("Deleted successfully", { position: "top-center" }); update(id) },
      (error) => { toast.success("Something went wrong. Unable to delete course", { position: "top-center" }) }
    )
  }

  return (
    <div className='my-2'>
      <Card className='text-center'>
        <CardBody>
          <CardSubtitle className='fw-bold'>{course.title}</CardSubtitle>
          <CardText>{course.desc}</CardText>
          <Container className='text-center'>
            <Button className='center mx-2' color='danger' outline onClick={() => {
              deleteCourse(course.id);
            }}>Delete</Button>
            <Button className='center mx-2' color='warning' outline>Update</Button>
          </Container>
        </CardBody>
      </Card>
    </div>
  )
}
