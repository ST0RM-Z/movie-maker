import React from 'react'
import {Button,Form,Container} from 'react-bootstrap';

export default function AddMovies() {
  return (
    <Container className='mt-5'>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="Enter Name" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Genre</Form.Label>
      <Form.Control type="text" placeholder="Genre" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>year</Form.Label>
    <Form.Control type="text" placeholder="Year" />
  </Form.Group>
    
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  </Container>
  )
}
