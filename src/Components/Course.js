import React from 'react'
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

export default function Course({course}) {
  return (
    <div>
        <Card className='text-center'>
        <CardBody>
            <CardSubtitle className='fw-bold'>{course.title}</CardSubtitle>
            <CardText>{course.desc}</CardText>
            <Container className='text-center'>
                <Button className='center mx-2' color='danger' outline>Delete</Button>
                <Button className='center mx-2' color='warning' outline>Update</Button>
            </Container>
        </CardBody>
    </Card>
    </div>
  )
}
