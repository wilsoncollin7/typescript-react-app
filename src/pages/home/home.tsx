import * as React from 'react';
// bootstrap
import { Container, Row, Col } from 'react-bootstrap';
// components
import PostGrid from '../../components/postGrid/postGrid';
import PostForm from '../../components/postsForm/postForm';


const Home: React.FC = () => {
  
  return ( 
    <Container>
      <Row>
        <Col></Col>
        <Col xs={9}>
          <PostForm />
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <PostGrid />
      </Row>
    </Container>
  );
};

export default Home;
