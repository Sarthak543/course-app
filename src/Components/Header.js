import React from 'react'
import { Card, CardBody } from 'reactstrap'

export default function Header() {
  return (
    <div>
      <Card className='my-2 bg-warning'>
        <CardBody>
          <h1 className='text-center my-4'>Welcome to Cources Application</h1>
        </CardBody>
      </Card>
    </div>
  )
}
