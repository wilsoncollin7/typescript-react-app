import * as React from 'react';
// styling
import './postForm.css'
import { useForm } from 'react-hook-form';
import { useCreatePost } from '../../graphql/posts/queries';
import { FormData } from '../../interfaces/postInterfaces';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';


const PostForm: React.FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const createPost = useCreatePost();

  const onSubmit = handleSubmit(({ title, body }) => {
    console.log(title, body)
    createPost({ variables: { input: { title, body } } } );
  });

  return (
    <Container className="formContainer my-4 rounded shadow">
      <Form onSubmit={onSubmit}>
        <Row className="py-3">
          <Col>
           <Form.Control type="text" placeholder="Post Title" {...register("title")} />
          </Col>
          <Col>
            <Form.Control className="" as="textarea" rows={1} placeholder="Post Body" {...register("body")} />
          </Col>
          <Col md="auto">
            <Button className="" variant="secondary" type="submit">Submit</Button>
          </Col>
        </Row>
      </Form> 
    </Container>
  );
};

export default PostForm;
