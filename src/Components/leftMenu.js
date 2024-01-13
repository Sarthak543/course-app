import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default function leftMenu() {
  return (
    <ListGroup>
        <ListGroupItem tag="a" href="#!" action>Home</ListGroupItem>
        <ListGroupItem tag="a" href="#!" action>Add Courses</ListGroupItem>
        <ListGroupItem tag="a" href="#!" action>View Courses</ListGroupItem>
        <ListGroupItem tag="a" href="#!" action>About</ListGroupItem>
        <ListGroupItem tag="a" href="#!" action>Contact</ListGroupItem>
    </ListGroup>
  )
}
